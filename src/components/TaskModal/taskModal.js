import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: {
    Datepicker
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    editingTask: Object
  },
  data() {
    return {
      title: '',
      description: '',
      dueDate: ''
    }
  },
  created() {
    if (this.editingTask) {
      this.title = this.editingTask.title
      this.description = this.editingTask.description
      this.dueDate = new Date(this.editingTask.date)
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onSave() {
      const task = {
        title: this.title.trim(),
        description: this.description
      }
      if (this.dueDate) {
        task.date = this.dueDate.toISOString().slice(0, 10)
      }

      if (this.editingTask) {
        this.$emit('taskSave', {
          ...this.editingTask,
          ...task
        })
        return
      }

      this.$emit('taskAdd', task)
    },
    onTitleInput(event) {
      this.title = event.target.value
    }
  },
  computed: {
    isTitleValid() {
      return !!this.title.trim()
    },
    modalTitle() {
      if (this.editingTask) {
        return 'Edit task'
      }
      return 'Add new task'
    }
  }
}
