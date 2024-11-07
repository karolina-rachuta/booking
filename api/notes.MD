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
- creating account, cluster (ip address "0.0.0.0"- every ip adress, server adres after deploy)
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

- connect mongodb

```js
import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};
//listen on mongodb connection, and if disconnected it will try connect again
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});

//api server, no mongodb connection => no api request => then it will throw err
app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
```

6. Creating for request functions new directory routes for (CRUD)

- for each endpoint new file (auth.js, hotels.js, users.js, rooms.js)
- inside the file CRUD:

```js
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is auth endpoint!");
});

router.get("/register", (req, res) => {
  res.send("Hello, this is auth register endpoint!");
});

export default router;
```

7. To support the CRUD we need models (schema)

- for each endpoint we create files with schema (Room.js, User.js, Hotel.js)

8. Finished the route to create hotel (POST, PUT(:id), Get(:id) GET(All), DELETE(:id)) and test it on Postman (filled in the body all the needed data about the hotel), then it is visible in mongodb database
   //27min20

9. Creating Controllers directory with js script with all the functions (createHotel, updateHotel, deleteHotel, getHotel, getHotels) and using in routes only imported functions.

10. creating handle error middleware so then in

```js
catch(err) {next(err)}
```
to hit this middleware

11. Authorization- creating User model, and creating register endpoint with register function. (as post- user visible in db)

12. Encryption of password. We need to download new library:
```js
npm add bcryptjs
```