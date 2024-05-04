class TaskApi {
  apiHost = import.meta.env.VITE_API_HOST

  request(method, url = '', body) {
    const params = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    if (body) {
      params.body = JSON.stringify(body)
    }
    const host = `${this.apiHost}/task/${url}`
    return fetch(host, params).then(async (res) => {
      if (res.status >= 500) {
        throw new Error('Something went wrong, please, try again later!')
      }

      const result = await res.json()
      if (res.status >= 300 && result.error) {
        throw new Error(result.error.message)
      }
      return result
    })
  }
  addNewTask(task) {
    return this.request('POST', '', task)
  }
  getTasks() {
    return this.request('GET')
  }
  getSingleTask() {}
  deleteTask(taskId) {
    return this.request('DELETE', taskId)
  }

  updateTask(task) {
    return this.request('PUT', task._id, task)
  }
}

export default TaskApi
