PassTheGas
==========
Simple, beautiful gas cost splitting application featuring full fledged Google Maps integration.  This repository contains all necessary
code for running the webapp available at http://passthegas.github.io. 

The code does not need to be built as it is html, and it should run by simply downloading the code and viewing index.html.  It can
also be seen live at the aforementioned url.

Developers: 
* [Dawson Botsford](https://github.com/dawsonbotsford) 
* [Adrian Chen](https://github.com/adrian-chen)
* [Brian Newsom](https://github.com/BrianNewsom)

##Auto-documentation
We used [Docco](http://jashkenas.github.io/docco/) to do our autodocumentation. The files needed for this are found within the docs folder.
Docco can be used as follows:
* Install npm
* $ sudo npm install -g docco
* Write comments with markdown after the double slash
* $ docco src/yourfile.js

## Running Tests
This code uses [Dalek](http://dalekjs.com/) for automated JS and HTML testing.  The tests are found in the test folder.  They can be run as follows.
* Install NodeJS & npm
* $ npm install dalek-cli -g
* $ npm install dalekjs --save-dev
* $ dalek test/dalekTests.js
This will start the run script and it will run all unit tests automatically! How cool!

<sup> profile image from www.freedigitalphotos.net </sup>
