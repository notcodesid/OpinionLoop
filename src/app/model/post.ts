import mongoose from "mongoose";

const schema = new mongoose.Schema({ 
    content: String 
});
const QsnModel = mongoose.model('QsnModel', schema);

export default QsnModel;