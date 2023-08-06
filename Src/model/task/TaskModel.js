import TaskSchema from './TaskSchema.js';

//insert 
export const insertTask = (taskObj) => {
    return TaskSchema(taskObj).save()
}
// select


//update


//delete
