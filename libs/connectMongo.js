import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect("mongodb://root:B3st4irPlanE@139.59.229.25:27017/pemiradb?authSource=admin");

export default connectMongo;
