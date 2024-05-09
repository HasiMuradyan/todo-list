import Api from './api'

class TaskApi extends Api {
  entityName = 'task'

  addNewTask(task) {
    return this.request('POST', '', task)
  }
  getTasks() {
    return this.request('GET')
  }
  getSingleTask(taskId) {
    return this.request('GET', taskId)
  }
  deleteTask(taskId) {
    return this.request('DELETE', taskId)
  }

  updateTask(task) {
    return this.request('PUT', task._id, task)
  }
}

export default TaskApi
