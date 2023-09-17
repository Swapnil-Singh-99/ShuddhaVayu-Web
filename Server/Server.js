import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import cors from "cors"
import Logged from "./Routes/LoginHandler.js";


const app = express();
const port = 3000;

app.use(cors());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const ConnectionString =
  "mongodb+srv://Harsh2:dragonite1@forprojects.wjbiut0.mongodb.net/Shuddhavayu";

mongoose.connect(ConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", function () {
  console.log("Error Connecting");
});
db.on("open", function () {
  console.log("Successfull Connected to Database ");
});


app.use( Logged);

app.listen(port , ()=>{
    console.log("Server is running well at "+port)
});
