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
export const updateTask = (_id, updatedTaskObj) => {
    return TaskSchema.findByIdAndUpdate(_id, updatedTaskObj, { new: true });
}

//delete
export const deleteTask = (_id) => {
    return TaskSchema.findByIdAndRemove(_id)
}
