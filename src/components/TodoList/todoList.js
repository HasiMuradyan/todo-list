import TaskModal from '../TaskModal/TaskModal.vue'
export default {
  components: {
    TaskModal
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
      this.tasks.push(task)
      this.toggleTaskModal()
    }
  }
}
