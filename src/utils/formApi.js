import Api from './api'

class FormApi extends Api {
  entityName = 'form'
  sendForm(form) {
    return this.request('POST', '', form)
  }
}

export default FormApi
