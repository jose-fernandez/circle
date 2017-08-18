# The Circle

**The Circle** is a **MOBGEN** project by the Frontend Amsterdam team to connect with all MOBGENners offering them tips and instructions about MOBGEN, the city and their colleagues.
It is also used to inform about events, contact employees and improve relationships between MOBGENners.
We use React, Redux and Jest to build this project.

## Requirements

+ Node >= 5.8.0
+ Npm >= 3.7.3
+ Jest >= 3.8.0

## Usage

### Folder structure

circle
> coverage (unit test results)
> dist (distribution folder)
> node_modules (modules)
> settings (editor settings)
> src
>> actions
>> components
>>> component items (all items are split into a sub folder)
>>>> __test__ ( unit tests)
>>>> __mocks__ (unit tests mock functions)
>> images
>> reducers
>> store
>> style
>tools (configutarion tools)

### Code style & guideline

We are following a strict code style and guideline.
All code (with the exception of Unit Tests) must follow the ESlint airbnb rules.
When you install the project you will get these rules in your console and terminal.

If you want the correct settings in your IDE you can use one of the files from settings.

### Editor Config

Install editorconfig.org for your IDE and use our editor config file to follow our code standard.
If you have WebStorm just allow .editorconfig to be used.

#### Atom

Install atom packages

```
apm install linter linter-eslint react linter-stylelint

```

#### Sublime

Install SublimeText packages  

* [Babel](https://packagecontrol.io/packages/Babel)
* [Sublime-linter](http://www.sublimelinter.com/en/latest/)
* [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)
* [SublimeLinter-contrib-stylelint](https://packagecontrol.io/packages/SublimeLinter-contrib-stylelint)
* [EditorConfig](https://github.com/sindresorhus/editorconfig-sublime)

#### Unit testing

All code should be unit tested before it is considered done & ready for production.

### Installation

Before you install, make sure that you have Node, NPM and Jest installed globally.

```
npm install

npm start

open http://localhost:3000/
```

### Run App

Create **bundle.js** in public folder by the command:
```
npm start
```

Open http://localhost:3000/

## React Native Installation 
If you want to run the APP in ios simulator you need: 
- Last Version of Xcode
- React native cli:  npm install react-native-cli -g 
- Link the Gradient package with: rnpm link / react-native link ( after npm install )
- You can run the simulator with: react-native run-ios


For the Android version you will need:
- SDK package and an emulator configured / SDK and a real device
- React native cli:  npm install react-native-cli -g 
- Link the Gradient package with: rnpm link / react-native link ( after npm install )
- You can run the simulator with: react-native run-android


## Unit Testing in ReactJS
> Simplifies writing Unit Testing with Jest https://facebook.github.io/jest/

### Run Unit Testing
we have used jest and enzyme for Unit Testing

```
npm i
npm test

```
Or if you want to use 'jest', install it as global 'npm install jest-cli -g'


```
jest

```

### Selenium Testing

Automated GUI testing can be triggered by the following command

```
npm run selenium

```

Before you run this, make sure to have an instance of selenium standalone running

```
npm install selenium-standalone@latest -g
selenium-standalone install
selenium-standalone start

```

### DevTools
React Developer Tools
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
Redux DevTools
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
