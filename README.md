# mod.works Design
Design for [mod.works](https://mod.works) is powered by the [bulma.io](http://bulma.io) CSS framework. The [bulma repository](https://github.com/jgthms/bulma) can be found here. We make minimal changes to it, opting to extend and overwrite its base functionality, so future updates to bulma.io can be easily merged in. We primarily comment out unused functionality to keep our compiled CSS filesize down.

## Extensions
The enhancements for bulma we use are stored in the sass/extensions/ folder (if they were made by a 3rd party), and our own enhancements are stored in the sass/modworks/ folder.

## Setup
To get the design up and running on your local machine:

1. Clone or fork this repository
2. Point your SASS compiler at the file sass/modworks/bulma.sass
3. Output the bulma.css file to the test/ folder
4. Load [index.html in the root folder](https://design.mod.works) to preview how your changes will look before submitting your contribution

## Contributions Welcome
Want to enhance the design of [mod.works](https://mod.works)? Submit a pull request with your recommended changes to the SASS files.

## Other Repositories
Our aim with [mod.works](https://mod.works), is to provide an open modding API. You are welcome to view and fork our other codebases in use:

* [API documentation](https://docs.mod.works) is public and open source, the repository can be [found here](https://github.com/DBolical/modworksAPIDOCS).
* [SDK documentation](https://sdk.mod.works) is public and open source, the repository can be [found here](https://github.com/DBolical/modworksSDK).
* [SDK](https://sdk.mod.works) is public and open source, the repository can be [found here](https://github.com/DBolical/modworksSDK). Game developers are welcome to utilize it directly, to add support for mods in their games, or extend it to create plugins and wrappers for other engines and codebases.
