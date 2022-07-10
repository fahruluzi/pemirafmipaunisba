import { Schema, model, models } from 'mongoose';

const usersSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    npm: {
        type : String,
        required: true
    },
    major: {
        type : String,
        required: true,
        lowercase: true,
        trim: true
    },
    year: {
        type : String,
        required: true
    },
    class: {
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type : Number,
        required: true,
        unique: true
    },
    used_token : {
        type: Boolean,
        required: true,
        default: false
    },
    candidate_bem : {
        lead_name : String,
        lead_npm : String,
        co_lead_name : String,
        co_lead_npm : String,
        number : Number
    },
    candidate : {
        name : String,
        npm : String,
        major : String,
        number : Number
    },
    login_at : Date,
});

const User = models.User || model('User', usersSchema);

export default User;