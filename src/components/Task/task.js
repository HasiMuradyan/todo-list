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
    }
    // dueDate() {
    //   return this.data.updated_at.slice(0, 10)
    // }
  }
}
