import TaskModal from '../TaskModal/TaskModal.vue'
import Task from '../Task/Task.vue'

export default {
  components: {
    TaskModal,
    Task
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: []
    }
  },
  methods: {
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
    },

    onTaskSave(task) {
      const url = 'http://localhost:3001/task'
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      }
      fetch(url, params)
        .then(async (res) => {
          if (res.status >= 500) {
            throw new Error('Something went wrong, please, try again later!')
          }
          const result = await res.json()
          if (res.status >= 300 && result.error) {
            throw new Error(result.error.message)
          }
          return result
        })
        .then((newTask) => {
          this.tasks.push(newTask)
          this.toggleTaskModal()
        })
        .catch((err) => {
          console.log('err', err)
        })
      // send the task to backend
    }
  }
}
