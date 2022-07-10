import { Schema, model, models } from 'mongoose';

const candidateSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    major: {
        type : String,
        required: true,
        lowercase: true
    },
    number : {
        type : Number,
        required : true
    },
    count : {
        type : Number,
        required : true,
        default : 0,
    }
});

const Candidate = models.Candidate || model('Candidate', candidateSchema);

export default Candidate;