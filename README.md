# Not_Another_NotePad

## Description

A simple text editior/ notepad type of application. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser the user is operating. The application will also be able to function offline and retain wanted data.

## Table of Contents

- [Installation](#installation)
- [Criteria](#criteria)
- [Acceptance Criteria](#criteria)
- [Preview](#Preview)
- [Credits](#credits) -[Questions](#questions)

## Installation

Initially you must have Node installed
Also have to initiliaze the npm command to install the required dependencies which can
be found in the package.json file
Nontheless, All the Npms needed to build application ar DotEnv, console.table, express, and mysql2.
After installing these, javascript has to be run from terminal through node in order to launch to the server, which would
then initiate the page.
Ultimately though, the application will be deployed for public use. This would allow for easier access and a more user-friendly interface.

## Preview

A video for previewing the usage of this application can be found in the following link
[Deployed Application link: ]()

![Screenshot of Application](https://user-images.githubusercontent.com/94323045/167522152-c5a62188-4be4-4e2e-9f29-b8fa30d1b6ce.jpg)

## User Story

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Criteria

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

## Credits

Tyler Gandy

## License

MIT

## Badges

![this was a badge](https://img.shields.io/badge/License-MIT-blue.svg)

## Features

- Node Js
- Express
- Console.Table
- Mongodb
- Mongoose
- Webpack
- IndexDB
- idb

## Questions

Any additional Questions feel free to email me at: TylerBGandy@gmail.com

© 2021 Tyler B Gandy. Confidential and Proprietary. All Rights Reserved.
Other Projects and repositories can be viewed [here](www.github.com/TyGBenjamin)
