import mongoose from "mongoose";
const { Schema } = mongoose;

const AdminSchema = new Schema({
    name:{
        type:String,
       
    },
    email:{
        type:String,
     
    },
   role : {
    type:String,
  
   }, 
   password:{
    type:String,
    
   }

},


{timestamps:true})

export default mongoose.models.Admins || mongoose.model('Admins', AdminSchema);