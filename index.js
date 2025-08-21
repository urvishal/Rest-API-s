const express = require("express");
const {connectMongoDb} = require("./connection");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

const {logReqRes} = require("./middleware");
//connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//Routes
<<<<<<< HEAD
app.use("/api/users", userRouter);
=======
app.use("/user", userRouter);
>>>>>>> 63f0a953404fdfdc2b2a842132ff9911e191202d

app.listen(PORT, console.log(`Server started at PORT ${PORT}`));
