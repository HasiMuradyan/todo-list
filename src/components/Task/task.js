export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    createdAt() {
      return this.data.created_at.slice(0, 10)
    },
    dueDate() {
      return this.data.date?.slice(0, 10) || 'none'
    }
  },
  methods: {
    onEdit() {
      this.$emit('taskEdit', this.data)
    }
  }
}
