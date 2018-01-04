# mod.io Design
Design for [mod.io](https://mod.io) is powered by the [bulma.io](http://bulma.io) CSS framework. The [bulma repository](https://github.com/jgthms/bulma) can be found here. We make minimal changes to it, opting to extend and overwrite its base functionality, so future updates to bulma.io can be easily merged in. We primarily comment out unused functionality to keep our compiled CSS filesize down.

## Extensions
The enhancements for bulma we use are stored in the sass/extensions/ folder (if they were made by a 3rd party), and our own enhancements are stored in the sass/modio/ folder.

<<<<<<< HEAD
## Setup
To get the [design](https://design.mod.io) up and running on your local machine:

1. Clone or fork this repository
2. Point your SASS compiler at the files in the sass/modio/ folder
3. Output the .css files to the docs/ folder
4. Load [index.html in the docs folder](https://design.mod.io) to preview how your changes will look before submitting your contribution
=======
[![npm](https://img.shields.io/npm/v/bulma.svg)](https://www.npmjs.com/package/bulma)
[![npm](https://img.shields.io/npm/dm/bulma.svg)](https://www.npmjs.com/package/bulma)
[![Join the chat at https://gitter.im/jgthms/bulma](https://badges.gitter.im/jgthms/bulma.svg)](https://gitter.im/jgthms/bulma)
[![Build Status](https://travis-ci.org/jgthms/bulma.svg?branch=master)](https://travis-ci.org/jgthms/bulma)
>>>>>>> refs/remotes/upstream/master

## Contributions Welcome
Want to enhance the design of [mod.io](https://mod.io)? Submit a pull request with your recommended changes to the SASS files.

## Other Repositories
Our aim with [mod.io](https://mod.io), is to provide an open modding API. You are welcome to view, fork and contribute to our other codebases in use:

* [SDK](https://sdk.mod.io) is public and open source, the repository with documentation can be [found here](https://github.com/DBolical/modioSDK). Game developers are welcome to utilize it directly, to add support for mods in their games, or extend it to create plugins and wrappers for other engines and codebases.
* [API documentation](https://docs.mod.io) is public and open source, the repository can be [found here](https://github.com/DBolical/modioAPIDOCS).
* [Browse engine tools](https://apps.mod.io), plugins and wrappers created by the community, or [share your own](https://apps.mod.io/add).
* [Unity plugin](https://github.com/DBolical/modioUNITY), easily manage the browsing and install of mods in Unity Engine games.
