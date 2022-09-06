
const express = require ("express");
const app = express();
const userRouter = require("./routes/users.route");
const {globalMiddleware} = require("./middleware/globalMiddleware");

app.use(globalMiddleware);

/* app.get("/", (req, res) => {
    res.status(200).send("Welcome to my server");
  });
  
  app.post("/", (req, res) => {
    res.status(201).send("Your data has been saved.");
  });
  
  app.put("/", (req, res) => {
    res.status(200).send("Your data has been replaced");
  });
  
  app.patch("/", (req, res) => {
    res.status(200).send("Your data has been updated");
  });
  
  app.delete("/", (req, res) => {
    res.status(200).send("Your data has been deleted");
  }); */
  
  app.get("/", (req, res)=>{
    res.status(200).send("Welcome to my server. Pleae use /user to get all users");
  });

  app.use("/users", userRouter);

  app.listen(4000, (err) => {
    console.log("Server running on http://localhost:4000");
  });