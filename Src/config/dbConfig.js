import mongoose from 'mongoose';

export const dbConnect = () => {
    try {
        // const MONGO_CLIENT = "mongodb://localhost/aug_task_list";
        const conn = mongoose.connect(process.env.MONGO_CLIENT);
        conn && console.log('Mongo db connected');
    } catch (error) {
        console.log(error)
    }
}