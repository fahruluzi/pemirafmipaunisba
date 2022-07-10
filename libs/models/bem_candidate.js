import { Schema, model, models } from 'mongoose';

const candidateBemSchema = new Schema({
    lead_name: {
        type : String,
        required: true
    },
    co_lead_name: {
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

const CandidateBem = models.CandidateBem || model('CandidateBem', candidateBemSchema);

export default CandidateBem;