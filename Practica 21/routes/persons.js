
//inyección de dependencias 
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let Person = require("../models/persons");


//ROuteo por medio de /gente 
router.get("/gente", async (req, res) => {
  const Persons = await Person.find({});
  //En lugar de usar el res.json se utiliza render porque se renderizará un EJS
  res.render("index", {Persons}); 
});


//routeo para addItem
router.get("/addItem", (req,res) => {
  res.render("addItem");
});

//mongoDb Schema
router.post("/addItem", function(req, res){
  const newPerson= new Person({
      nombre: req.body.nombre,
      edad: req.body.edad, 
      tipoSangre: req.body.tipoSangre,
      nss: req.body.nss
  })
  newPerson.save().then(() => {res.redirect("/gente")}).catch((error) => {res.json({message:error})}); 
});

module.exports = router;