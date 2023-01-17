const mongoose=require("mongoose");
const env=require("dotenv");
env.config();
async function conn(){
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
}
module.exports=conn;