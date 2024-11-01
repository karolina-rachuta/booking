# Notes to Booking App

## Commands and steps

1.

```js
npm init -y
npm add express
```

adding dir app
adding file index.js => adding express + adding script in package.json

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

2.

```js
npm add nodemone
//to watch changes for backend
```

````json
{
    "scripts": {
        "start": "nodemon index.js" //change
    }
}

3. MongoDb
- go to mongoDb (cloud mongodb)
- creating account, cluster (ip address 0.0.0.0 - every ip adress, server adres after deploy)
- connect with account

```js
npm install mongodb
````

- creating .env and paste link from mongoDb url (secret key) with <password> of the user and db name (booking)

4. adding env library

```js
npm dotenv
```

- w pliku index.js

```js
import dotenv from "dotenv";
dotenv.config();
//to use:: process.env.MONGO

```

5. Adding moongoose (odm) - object modeling

```js
npm add mongoose
```
