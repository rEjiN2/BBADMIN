import mongoose from "mongoose";
const { Schema } = mongoose;

const BookingSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    package:{
        type:String,
        required:true
    },
   link:{
    type:String,
   },
   aprroved:{
    type:Boolean,
    default:false
   },
   courseId:{
    type:String,
    required:true
   },
   userId:{
    type:String,
    required:true
   }
},


{timestamps:true})

export default mongoose.models.Bookings || mongoose.model('Bookings', BookingSchema);