import TaskSchema from './TaskSchema.js';

//insert 
export const insertTask = (taskObj) => {
    return TaskSchema(taskObj).save()
}
// select
export const getTasks = () => {
    return TaskSchema.find();
}
export const getSingleTasks = (_id) => {
    return TaskSchema.findById(_id);
}
//update
export const updateTask = (_id, type) => {
    return TaskSchema.findByIdAndUpdate(_id, { type }, { new: true });
}

//delete Single or Many
export const deleteManyTask = (ids) => {
    return TaskSchema.deleteMany({
        "_id": { $in: ids }
    })
}
