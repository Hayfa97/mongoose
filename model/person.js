const mongoose=require ("mongoose")
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
},
    age: Number,
    favoriteFoods: [{type:String}]
 
})
const person =mongoose.model ("person",personSchema)
module.exports=person