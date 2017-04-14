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

#### Configure settings

- Duplicate the `.env.example` file and rename it to `.env`
- Remplace the database configuration values into your `.env` file by your database values
- Remplace the request configuration value into your `.env` file by your SQL request

This is an example configuration :

```bash
# DATABASE CONFIGURATION

DB_HOST="localhost"
DB_USER="pepito"
DB_PASSWORD="#P3pit0"
DB_NAME="aye"


# REQUEST

REQUEST="SELECT * FROM `biscuits` LIMIT 100"
```

#### Run your SQL request

```bash
$ npm run sql
```

## 🛠 Prior installation

You have to download [Node.js](https://nodejs.org/en/download/)
