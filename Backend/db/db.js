import mongoose from 'mongoose'

async function connectDB(){
    try {
       await mongoose.connect(`${process.env.DB_Connect}`)
        .then(() => {
            console.log('Connect to DB');        
        })
        .catch((err) => {
            console.log(err, 'Error connecting to in catch box');         
        })

    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB