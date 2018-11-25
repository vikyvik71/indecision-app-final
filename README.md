# React course project
## Without Webpack
### Install NodeJS -> [Installer](https://nodejs.org/)
Check with:
```
$ node -v
v8.11.1

$ npm -v
6.4.1
```
### Install Yarn (globally)
```
$ npm install -g yarn
```
Check with:
```
$ yarn --version
1.12.3
```
### Create a project folder
```
$ mkdir -p ~/react-course-projects/indecision-app
```
### Install live-server (globally)
```
$ yarn global add live-server
```
Check with:
```
$ live-server -v
live-server 1.2.0
```
### Create a public folder and index.html
```
$ cd ~/react-course-projects/indecision-app
$ mkdir -p ~/react-course-projects/indecision-app/public
$ touch ~/react-course-projects/indecision-app/public/index.html
```
### Launch live-server from project home
```
$ live-server public/
```
### Include script tags in index.html for React and ReactDOM
```
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js" type="text/javascript"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js" type="text/javascript"></script>
```
### Create a script folder under public folder
```
$ cd ~/react-course-projects/indecision-app/public
$ mkdir -p scripts
```
### Create app.js file in the scripts folder
This is the main script for the app
```
$ cd ~/react-course-projects/indecision-app/public/scripts
$ touch app.js
```
### Install Babel (globally)
```
$ yarn global add babel-cli
```
Check with:
```
$ babel --version
```
### Init the project
```
$ cd ~/react-course-projects/indecision-app
$ yarn init
```
### Install Babel presets (env, react)
```
$ yarn add babel-preset-react babel-preset-env
```
Check in package.json if dependencies were correctly installed
### Create a new src folder under project root. 
```
$ cd ~/react-course-projects/indecision-app/
$ mkdir -p src
```
### Create a new app.js
```
$ cd ~/react-course-projects/indecision-app/src
$ touch app.js
```
This app.js is the original (not compiled) source script.
### Launch Babel with watch option
```
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
