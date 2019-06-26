/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable max-len */

// Original Author of sassMerge() code: DeathMark
// Modified sassMerge() + the rest: Patrick Sotiriou

const gulp = require('gulp');
const concat = require('gulp-concat');
const s3 = require('s3');
const fs = require('fs');
const path = require('path');
const gutil = require('gulp-util');
const throught = require('through2');

const filename = 'app.sass';

// iterate over each files contents and resolve
// imports whilst doing some basic minification
function sassMerge(content, baseDir) {
  const importRegex = /@import[^'"]+?['"](.+?)['"];?/g;
  const stripCommentRegex = /\/\/\s{0,1}.*/g;
  const stripEmptyLineRegex = /^[ \r\n]+$/gm;

  let modifiedContent = content;

  modifiedContent = modifiedContent.replace(stripCommentRegex, '');

  if (importRegex.test(modifiedContent)) {
    modifiedContent = modifiedContent.replace(importRegex, (m, capture) => {
      const parse = path.parse(path.resolve(baseDir, capture));
      let file = `${parse.dir}/${parse.name}`;

      if (fs.existsSync(`${file}.sass`)) {
        file += '.sass';
      } else {
        return sassMerge(modifiedContent, file.replace(/\/[\w]+/, ''));
      }

      return sassMerge(`${fs.readFileSync(file)}`, parse.dir);
    });
  }

  modifiedContent = modifiedContent.replace(stripEmptyLineRegex, '');

  return modifiedContent;
}

// iterate over base-gulp files
const combine = function () {
  return throught.obj((file, enc, cb) => {
    const currentFile = file;

    if (currentFile.isNull()) {
      cb(null, currentFile);
      return;
    }

    if (currentFile.isStream()) {
      cb(new gutil.PluginError('gulp-scss-combine', 'Streaming not supported'));
      return;
    }

    currentFile.contents = Buffer.from(sassMerge(currentFile.contents.toString(), path.dirname(currentFile.path)));

    setImmediate(cb, null, currentFile);
  });
};

// Merge Sass files and respect their @imports
// command: gulp combine
gulp.task('combine', (done) => {
  gulp.src(`sass/modio/${filename}`)
    .pipe(combine())
    .pipe(concat(filename))
    .pipe(gulp.dest('dist/'));
  done();
});

// Upload dist/app.sass to S3 bucket.
// command: gulp combine --bucket mybucket
gulp.task('upload', (done) => {
  const cmdArgs = process.argv;
  if (cmdArgs[3] === undefined || cmdArgs[3] !== '--bucket' || cmdArgs[4] === undefined) {
    console.log('You must supply the S3 bucket name: gulp upload --bucket mybucket. Aborting upload.');
    done();
  } else {
    const bucket = cmdArgs[4];
    const client = s3.createClient({
      s3Options: {
        region: 'us-west-1',
      }, 
    });

    const params = {
      localFile: `dist/${filename}`,
      s3Params: {
        Bucket: bucket,
        Key: `base/${filename}`,
        ACL: 'public-read',
      },
    };

    const uploader = client.uploadFile(params);

    uploader.on('error', (err) => {
      console.error(`Unable to upload ${filename}:`, err.stack);
    });
    uploader.on('progress', () => {
      console.log(`Upload progress of ${filename}:`, uploader.progressAmount, '/', uploader.progressTotal);
    }); 
    uploader.on('end', () => {
      console.log(`Finished uploading ${filename}`);
      done();
    });
  }
});

gulp.task('runall', gulp.series('combine', 'upload'));
