import { connect } from 'mongoose';
const mongoURI = "mongodb://as920078kaushikmullick:Kw6yns5jR3K8UVJ@ac-ijcf2v5-shard-00-00.tkpatth.mongodb.net:27017,ac-ijcf2v5-shard-00-01.tkpatth.mongodb.net:27017,ac-ijcf2v5-shard-00-02.tkpatth.mongodb.net:27017/?ssl=true&replicaSet=atlas-6cvkvr-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectToMongo =async ()=>{
    //console.log("Ghusa hu");
    try{
        await connect(mongoURI);
        console.log("Connected to db");
    }catch(error){
        console.log(error);
    }
}

export default connectToMongo;
//  mongodb+srv://as920078kaushikmullick:Kw6yns5jR3K8UVJ@cluster0.tkpatth.mongodb.net/?retryWrites=true&w=majority