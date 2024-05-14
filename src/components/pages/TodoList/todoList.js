import { mapMutations } from 'vuex'
import './todoList.css'
import TaskModal from '../../TaskModal/TaskModal.vue'
import ConfirmDialog from '../../ConfirmDialog/ConfirmDialog.vue'
import Task from '../../Task/Task.vue'
import TaskApi from '../../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal,
    Task,
    ConfirmDialog
  },
  data() {
    return {
      isTaskModalOpen: false,
      tasks: [],
      editingTask: null,
      selectedTasks: new Set(),
      isDeleteDialogOpen: false
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
  computed: {
    isDeleteSelectedBtnDisabled() {
      return !this.selectedTasks.size
    },
    confirmDialogText() {
      return `You are going to delete ${this.selectedTasks.size} task(s), are you sure?`
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
      const updatedTask = {
        ...task,
        status: task.status === 'active' ? 'done' : 'active'
      }
      this.toggleLoading()
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
    toggleDeleteDialog() {
      this.isDeleteDialogOpen = !this.isDeleteDialogOpen
      if (!this.isDeleteDialogOpen) {
        this.selectedTasks.clear()
        this.$router.go(0)
      }
    },
    onSelectedTasksDelete() {
      this.toggleLoading()
      taskApi
        .deleteTasks([...this.selectedTasks])
        .then(() => {
          this.tasks = this.tasks.filter((t) => !this.selectedTasks.has(t._id))
          this.selectedTasks.clear()
          this.$toast.success('The selected tasks have been deleted successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
          this.toggleDeleteDialog()
        })
    },
    toggleTaskId(taskId) {
      if (this.selectedTasks.has(taskId)) {
        this.selectedTasks.delete(taskId)
      } else {
        this.selectedTasks.add(taskId)
      }
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
