require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const authRoute = require("./src/Routes/auth");
const appointmentRoute = require("./src/Routes/appointments");
const connectDB = require("./src/db/connect");
const notFoundMiddleware = require("./src/middleware/not-found");
const errorHandlerMiddleware = require("./src/middleware/error-handler");

app.use(express.json());

//route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/appointment", appointmentRoute);

//middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

port = process.env.PORT || 3001;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is live on PORT: ${port} ..`));
  } catch (error) {
    console.log(error);
  }
};
start();
