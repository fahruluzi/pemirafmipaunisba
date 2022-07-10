import { Schema, model, models } from 'mongoose';

const helperSchema = new Schema({
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

const Helper = models.Helper || model('Helper', helperSchema);

export default Helper;