import mongoose from "mongoose";
const { Schema } = mongoose;

const SubscriberSchema = new Schema({
    name:{
        type:String,    
    },
    email:{
        type:String,
    },
    subscriptionType:{
        type:String,
    },
    price:{
        type:Number
    },
    package:{
        type:String
    },
    date:{
        type:Date
    },
    time:{
        type:String
    },
    link:{
        type:String
    }
},

{timestamps:true})

export default mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema);