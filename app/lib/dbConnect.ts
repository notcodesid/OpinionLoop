import mongoose from "mongoose";

export async function connect() {
try {
    mongoose.connect(process.env.MONGODB_URI!)
    const connection = mongoose.connection

    connection.on('connected' , ()=> {
        console.log('MongoDB has connected')
    })

    connection.on('error' , (err) => {
        console.log('Make sure MonDB running' , err)
        process.exit
    })

}
catch(error) {
    console.log("Something goes wrong with MongoDB")
    console.log(error)
}
}