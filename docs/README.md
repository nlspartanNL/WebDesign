## Viewing the documentation
Instead of documentation, the files here are a [live preview](https://design.mod.io) of how your changes to the SASS files will affect the layout of [mod.io](https://mod.io)
To get the design up and running on your local machine:

<<<<<<< HEAD
1. Clone or fork this repository
2. Point your SASS compiler at the files in the sass/modio/ folder
3. Output the .css files to the docs/ folder
4. Load [index.html in the docs folder](https://design.mod.io) to preview how your changes will look before submitting your contribution
=======
The documentation HTML is produced with the Ruby-based `jekyll` tool.

1. Make sure Ruby 2.x is installed.
2. `gem install jekyll`

## Viewing the documentation locally

Then to view the documentation in your local checkout:

1. Before you begin, cd into `docs/` directory, and `cp _config.yml _config.local.yml`. Then edit `_config.local.yml` and change the `url:` value to `http://localhost:4000`. This local config file will be ignored by git.
1. In a separate shell session, `cd` to the `docs/` directory, and do:
```
jekyll serve --incremental --config _config.local.yml
```
This will start an HTTP server at `http://localhost:4000/` that serves the docs built in the `_site` directory; and anytime the docs are rebuilt by you, it will serve the docs site on the fly.
2. In your main shell session where you develop, if you change anything in `docs/` the jekyll server will rebuild those on the fly. But if you change anything about the Bulma SASS or CSS, you need to do `npm run start-docs` to build the docs' CSS before you will see it in the browser. The process running `jekyll serve` will pick up the new CSS automatically.

>>>>>>> refs/remotes/upstream/master
