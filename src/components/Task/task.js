export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    createdAt() {
      return this.data.created_at.slice(0, 10)
    },
    dueDate() {
      return this.data.date?.slice(0, 10) || 'none'
    },
    active() {
      return this.data.status === 'active'
    }
  },
  methods: {
    onEdit() {
      this.$emit('taskEdit')
    },
    onDelete() {
      this.$emit('taskDelete')
    },
    statusChange() {
      this.$emit('taskStatus')
    },
    onSelect() {
      this.$emit('taskSelect')
    }
  }
}
