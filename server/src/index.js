import express from "express";
import cors from "cors";
import cookie from "cookie-parser";
import {userRouter} from "./routes/users/user.js";
import {DashboardRouter} from "./routes/dashboards.js";
const app = express();

//For getting data from the frontend as json format 
app.use(express.json());

//trying to make api request from front end
app.use(cors());

//all users routers
app.use("/auth/user", userRouter);
app.use("/auth/dashboard", DashboardRouter);

app.use(cookie());

app.listen(3001,()=> console.log("SERVER STARTED"));

//to start the app run {npm start}