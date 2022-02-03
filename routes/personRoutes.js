const express=require ("express")
const res = require("express/lib/response")
const { updateOne } = require("../model/person.js")
const person=require ("../model/person.js")
const router =express.Router()
//add a person
//Post
router.post("/", async (req,res)=>{
    try {
        const newPerson = new person(req.body)
        await newPerson.save()
        res.send(newPerson)

    } catch (error) {
        res.status(400).send(error.message)
    }
})
//find all
//get
router.get("/findAll",async (req,res)=>{
    try {
        const allPerson = await person.find()
        res.send(allPerson)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//detele many
//delete
router.delete("/deleteMany",async (req,res)=>{
    try {
      const deletedPerson = await person.deleteMany({ name: "haifa"}); 
       res.send(deletedPerson) 
    } catch (error) {
       res.status(400).send(error.message) 
    }
})
//FIND BY ID AND REMOVE
router.delete("/deleteById/:id", async (req,res)=>{
    try {
        const fndPersonByIdRmv= await person.findByIdAndRemove({ _id: req.params.id });
        res.status(200).send({fndPersonByIdRmv,msg:"delted with scces"})
    } catch (error) {
        res.status(400).send({error:"person is not found"});
        
    }
});
//find by Id
//get
router.get("/findById/:id" ,async (req,res)=>{
    try {
        const findBYID = await person.findById({ _id: req.params.id }).exec()
        res.send(findBYID)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//find update save
router.get("/findUpdateSave/:id" ,async (req,res)=>{
    try {
       /* const findOne= await person.findById({ _id: req.params.id }).exec()
        findOne.favoriteFoods.push("humberger")
        findOne.save()
        res.send(findOne)*/
        const updateone=await person.update({ _id: req.params.id }, {$push: {favoriteFoods: "pizza"}});
        res.send(updateone)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//findone and update
router.put("/findOneAndUpdate/:name" ,async (req,res)=>{
    try {
        const findOneToUpdate= await person.findOneAndUpdate({name:req.params.name}, { $set: { age:20 }})
res.send(findOneToUpdate)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//find one by food
router.get("/fiiinnddd" ,async (req,res)=>{
    try {
        const findMekla= await  person.find({favoriteFoods:"humberger"})
        res.send(findMekla)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports=router