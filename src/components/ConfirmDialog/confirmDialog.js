export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: 'Are you sure?'
    },
    text: {
      type: String
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onConfirm() {
      this.$emit('confirm')
    }
  }
}
