require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db");
const userRouter = require("./route/route");
const homeRouter = require("./route/home-route");
const adminRouter = require("./route/admin-route");

connectDB();
const app = express();
// middlewares
app.use(express.json());

app.use("/api/userAuth", userRouter);
app.use("/api/home", homeRouter);
app.use("/api/admin", adminRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
