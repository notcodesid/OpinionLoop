import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection : ConnectionObject = {}

async function dbConect():Promise<void> {
    if(connection.isConnected) {
        console.log("Already connected to Database")
        return
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || "" , {})

        connection.isConnected= db.connections[0].readyState
        console.log("DB Connected Successfully")
    }
    catch(error) {
        console.log("DB connection failed" , error)
        process.exit()

    }

}

export default dbConect;