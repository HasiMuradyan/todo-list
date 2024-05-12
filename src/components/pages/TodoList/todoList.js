import { mapMutations } from 'vuex'
import TaskModal from '../../TaskModal/TaskModal.vue'
import Task from '../../Task/Task.vue'
import TaskApi from '../../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal,
    Task
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: [],
      editingTask: null
    }
  },
  created() {
    this.getTasks()
  },
  watch: {
    editingTask(newValue) {
      if (newValue) {
        this.isTaskModalOpen = true
      }
    },
    isTaskModalOpen(isOpen) {
      if (!isOpen && this.editingTask) {
        this.editingTask = null
      }
    }
  },
  methods: {
    ...mapMutations(['toggleLoading']),
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
    },
    getTasks() {
      this.toggleLoading()
      taskApi
        .getTasks()
        .then((tasks) => {
          this.tasks = tasks
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    onTaskAdd(task) {
      this.toggleLoading()
      taskApi
        .addNewTask(task)
        .then((newTask) => {
          this.tasks.push(newTask)
          this.toggleTaskModal()
          this.$toast.success('The task have been created successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },

    onTaskStatusChange(task) {
      this.toggleLoading()
      const updatedTask = {
        ...task,
        status: task.status === 'active' ? 'done' : 'active'
      }
      taskApi
        .updateTask(updatedTask)
        .then((updatedTask) => {
          this.findAndReplaceTask(updatedTask)
          let message
          if (updatedTask.status === 'done') {
            message = 'The task is Done successfully!'
          } else {
            message = 'The task is restored successfully!'
          }
          this.$toast.success(message)
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    onTaskSave(editedTask) {
      this.toggleLoading()
      taskApi
        .updateTask(editedTask)
        .then((updatedTask) => {
          this.findAndReplaceTask(updatedTask)
          this.isTaskModalOpen = false
          this.$toast.success('The task has been updated successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    findAndReplaceTask(updatedTask) {
      const index = this.tasks.findIndex((t) => t._id === updatedTask._id)
      this.tasks[index] = updatedTask
    },
    onTaskEdit(editingTask) {
      this.editingTask = editingTask
    },
    onTaskDelete(taskId) {
      this.toggleLoading()
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.tasks = this.tasks.filter((t) => t._id !== taskId)
          this.$toast.success('The task have been deleted successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },

    handleError(error) {
      this.$toast.error(error.message)
    }
  }
}
