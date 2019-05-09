<a href="https://mod.io"><img src="https://static.mod.io/v1/images/branding/modio-color-dark.svg" alt="mod.io" width="360" align="right"/></a>
# mod.io Design
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/modio/UnityPlugin/blob/master/LICENSE)
[![Discord](https://img.shields.io/discord/389039439487434752.svg?label=Discord&logo=discord&color=7289DA&labelColor=2C2F33)](https://discord.mod.io)


Design for [mod.io](https://mod.io) is powered by the [bulma.io](http://bulma.io) CSS framework. The [bulma repository](https://github.com/jgthms/bulma) can be found here. We make minimal changes to it, opting to extend and overwrite its base functionality, so future updates to bulma.io can be easily merged in. We primarily comment out unused functionality to keep our compiled CSS filesize down.

## Extensions
The enhancements for bulma we use are stored in the sass/extensions/ folder (if they were made by a 3rd party), and our own enhancements are stored in the sass/modio/ folder.

## Setup
To get the [design](https://design.mod.io) up and running on your local machine:

1. Clone or fork this repository
2. Point your SASS compiler at the files in the sass/modio/ folder
3. Output the .css files to the docs/ folder
4. Load [index.html in the docs folder](https://design.mod.io) to preview how your changes will look before submitting your contribution

## Contributions Welcome
Want to enhance the design of [mod.io](https://mod.io)? Submit a pull request with your recommended changes to the SASS files.

## Other Repositories
Our aim with [mod.io](https://mod.io), is to provide an open modding API. You are welcome to [view, fork and contribute to our other codebases](https://github.com/modio) in use:

* [API documentation](https://docs.mod.io) is public and open source, the repository can be [found here](https://github.com/modio/APIDocs).
* [Browse engine tools](https://apps.mod.io), plugins and wrappers created by the community, or [share your own](https://apps.mod.io/add).
* [Unreal Engine 4 plugin](https://github.com/modio/UE4Plugin), easily manage the browsing and install of mods in Unreal Engine 4 games
* [Unity plugin](https://github.com/modio/UnityPlugin), easily manage the browsing and install of mods in Unity Engine games
* [Python wrapper](https://github.com/ClementJ18/mod.io), a python wrapper for the mod.io API
* [Rust wrapper](https://github.com/nickelc/modio-rs), rust interface for mod.io
* And more...
