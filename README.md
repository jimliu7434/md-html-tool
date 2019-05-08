# md-html-tool

concat multiple md files together and convert it to a standalone html file

## Install

using npm as a *devDependency*

  ```sh
  npm install --save-dev md-html-tool
  ```

or using yarn as a *devDependency*

  ```sh
  yarn add --dev md-html-tool
  ```

## How to use

1. add setting to your package.json

  ![package-setting.png](./readme/package-setting.png)

  ```js
  "md-html-tool": [
      "mdfiles": [
          // all your markdown files' paths
          // beware the orders of all md files
      ],
      "target": "" // the converted html file path
  ]
  ```

2. write code like this

  ```js
    const mdhtml = require('md-html-tool');

    (async () => {
        await mdhtml.convert();
        console.log(`completed`);
    })();
  ```

## API functions

| func    | description |
| :---    | :--- |
| convert | concat all md files and convert them to one html file |
| getconf | get all configuration from package.json |