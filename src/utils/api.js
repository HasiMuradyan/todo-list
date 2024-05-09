class Api {
  apiHost = import.meta.env.VITE_API_HOST

  request(method, url = '', body) {
    const params = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    if (body) {
      params.body = JSON.stringify(body)
    }

    const host = `${this.apiHost}/${this.entityName}/${url}`
    return fetch(host, params).then(async (res) => {
      if (res.status >= 500) {
        throw new Error('Something went wrong, please, try again later!')
      }

      const result = await res.json()
      if (res.status >= 300 && result.error) {
        throw new Error(result.error.message)
      }
      return result
    })
  }
}

export default Api
