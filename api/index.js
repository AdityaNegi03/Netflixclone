const express= require("express");
const mongoose = require ("mongoose");
const app = express();
const dotenv= require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");

dotenv.config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(()=> console.log("DB connection successful"));
}
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.listen(8800, ()=>
{
  console.log("Backend server is running");

});

