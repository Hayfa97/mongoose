const mongoose =require ("mongoose")
const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb+srv://Haifa123:Haifa123456@cluster0.ekxgk.mongodb.net/checkpointDatabase?retryWrites=true&w=majority')
        console.log("DB is connected");
    } catch (err) {
        console.log(err);
    }
}
module.exports=connectDb