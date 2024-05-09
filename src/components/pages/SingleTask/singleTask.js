import { mapMutations } from 'vuex'
import TaskModal from '../../TaskModal/TaskModal.vue'
import TaskApi from '../../../utils/taskApi.js'
import NotFound from '../NotFound/NotFound.vue'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal,
    NotFound
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
      return this.data.status === 'active'
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
      this.task.status === 'active' ? (this.task.status = 'done') : (this.task.status = 'active')
      this.toggleLoading()
      taskApi
        .updateTask(this.task)
        .then((updatedTask) => {
          const message =
            updatedTask.status === 'done'
              ? 'Congratulations, the task is done!'
              : 'You have successfully restored the task!'
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
