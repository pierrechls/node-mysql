[![version](https://img.shields.io/badge/version-1.0.0-green.svg?style=flat-square)](https://github.com/pierrechls/emogit-cli) [![js-standard-style](https://img.shields.io/badge/code_style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)

# node-mysql

> A NodeJS project for testing SQL request

## 🚀 How to use it

#### Clone the project

```bash
$ git clone git@github.com:pierrechls/node-mysql.git
```

#### Install dependencies

```bash
$ npm i            # or `yarn`
```

#### Configure MySQL settings

Go to the `settings` folder and set the default MySQL configuration into the  `mysql.json` file :

```bash
{
  "host": "<YOUR_HOST>",
  "user": "<YOUR_USER>",
  "password": "<YOUR_PASSWORD>",
  "database": "<YOUR_DATABASE>"
}
```

#### Configure your SQL request

Edit the `request.js` file with your custom request, for example :

```bash
module.exports = "SELECT Beer, Mojito FROM Drinks"
```

#### Run your SQL request

```bash
$ npm run sql
```

## 🛠 Prior installation

You have to download [Node.js](https://nodejs.org/en/download/)
