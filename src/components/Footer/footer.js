export default {
  data() {
    return {
      navBar: [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Contact Us', path: '/contact-us' }
      ],
      socialIcons: [
        { icon: 'mdi-facebook', path: 'https://www.facebook.com' },
        { icon: 'mdi-linkedin', path: 'https://www.linkedin.com/in/hasmik-muradyan-75b40b1ba/' },
        { icon: 'mdi-instagram', path: 'https://www.instagram.com' },
        { icon: 'mdi-twitter', path: 'https://www.twitter.com' },
        { icon: 'mdi-github', path: 'https://github.com/HasiMuradyan' }
      ]
    }
  },
  computed: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
