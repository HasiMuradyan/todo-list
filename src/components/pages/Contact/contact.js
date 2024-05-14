import { mapMutations } from 'vuex'
import FormApi from '../../../utils/formApi.js'

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const formApi = new FormApi()

export default {
  data: () => ({
    name: '',
    email: '',
    message: '',
    nameRules: [(v) => !!v || 'Name is required'],
    emailRules: [(v) => !!v || 'Email is required', (v) => emailRegex.test(v) || 'Invalid email']
  }),

  methods: {
    ...mapMutations(['toggleLoading']),
    async sendForm() {
      const isValid = await this.validate()
      if (!isValid) {
        return
      }
      const form = {
        name: this.name,
        email: this.email,
        message: this.message ? this.message : ''
      }
      this.toggleLoading()
      formApi
        .sendForm(form)
        .then(() => {
          this.reset()
          this.$toast.success('Thank you for contacting us, the form has been sent!')
        })

        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    async validate() {
      const { valid } = await this.$refs.form.validate()
      return valid
    },
    reset() {
      this.$refs.form.reset()
    },
    handleError(error) {
      this.$toast.error(error.message)
    }
  }
}
