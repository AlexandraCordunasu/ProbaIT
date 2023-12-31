import mongoose from 'mongoose'

const pollSchema =  new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    options:{
        type: [String],
        required: true
    }
});

const Poll = mongoose.model("Poll", pollSchema);
export default Poll;