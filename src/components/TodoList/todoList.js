import TaskModal from '../TaskModal/TaskModal.vue'
import Task from '../Task/Task.vue'
import TaskApi from '../../utils/taskApi.js'

const taskApi = new TaskApi()

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
  created() {
    this.getTasks()
  },
  methods: {
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
