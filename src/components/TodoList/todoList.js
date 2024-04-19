import TaskModal from '../TaskModal/TaskModal.vue'
export default {
  components: {
    TaskModal
  },
  data() {
    return {
      isTaskModalOpen: false,
      isTitleEmpty: false,
      tasks: []
    }
  },
  methods: {
    toggleTaskModal() {
      this.isTaskModalOpen = !this.isTaskModalOpen
      this.isTitleEmpty = false
    },

    onTaskSave(task) {
      if (task.title.trim() !== '') {
        this.tasks.push(task)
        this.toggleTaskModal()
        this.isTaskModalOpen = false
      } else {
        this.isTitleEmpty = true
        this.isTaskModalOpen = true
      }

      console.log(this.tasks)
    }
  }
}
