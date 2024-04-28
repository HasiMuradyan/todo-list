class TaskApi {
  apiHost = 'http://localhost:3001'

  request(url, params) {
    return fetch(url, params).then(async (res) => {
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
    const url = `${this.apiHost}/task`
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    }
    return this.request(url, params)
  }
  getTasks() {
    const url = `${this.apiHost}/task`
    const params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return this.request(url, params)
  }
  getSingleTask() {}
  deleteTask() {}
}

export default TaskApi
