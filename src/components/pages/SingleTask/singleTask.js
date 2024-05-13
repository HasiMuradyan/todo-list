import { mapMutations } from 'vuex'
import TaskModal from '../../TaskModal/TaskModal.vue'
import TaskApi from '../../../utils/taskApi.js'
const taskApi = new TaskApi()

export default {
  components: {
    TaskModal
  },
  data() {
    return {
      task: null,
      isEditModalOpen: false
    }
  },
  created() {
    this.getTask()
  },
  computed: {
    createdAt() {
      return this.task.created_at.slice(0, 10)
    },
    dueDate() {
      return this.task.date?.slice(0, 10) || 'none'
    },
    active() {
      return this.task.status === 'active'
    }
  },

  methods: {
    ...mapMutations(['toggleLoading']),
    toggleTaskModal() {
      this.isEditModalOpen = !this.isEditModalOpen
    },
    getTask() {
      this.toggleLoading()
      const taskId = this.$route.params.taskId
      taskApi
        .getSingleTask(taskId)
        .then((task) => {
          this.task = task
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },

    onSave(updatedTask) {
      this.toggleLoading()
      taskApi
        .updateTask(updatedTask)
        .then(() => {
          this.task = updatedTask
          this.isEditModalOpen = false
          this.$toast.success('The task have been updated successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    statusChange() {
      this.toggleLoading()
      const editedTask = {
        ...this.task,
        status: this.active ? 'done' : 'active'
      }
      taskApi
        .updateTask(editedTask)
        .then((updatedTask) => {
          this.task = updatedTask
          let message
          if (this.updatedTask.status === 'done') {
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
    onDelete() {
      this.toggleLoading()
      const taskId = this.task._id
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.$router.push('/')
          this.$toast.success('The task have been deleted successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },

    handleError(err) {
      this.$toast.error(err.message)
    }
  }
}
