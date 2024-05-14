<script>
import { mapGetters } from 'vuex'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Loader from './components/Loader/Loader.vue'

export default {
  components: {
    HeaderComponent: Header,
    FooterComponent: Footer,
    Loader
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<template>
  <div class="wrapper">
    <Loader v-if="isLoading" />
    <HeaderComponent />
    <main class="mainContainer">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>
