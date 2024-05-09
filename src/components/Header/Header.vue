<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>ToDo List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text-decoration-none><router-link to="/">Home</router-link></v-btn>
        <v-btn text-decoration-none><router-link to="/about">About</router-link></v-btn>
        <v-btn text-decoration-none><router-link to="/contact">Contact</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<style scoped>
header {
  .v-toolbar__title {
    font-weight: 600;
    text-transform: uppercase;
  }

  .v-toolbar__content {
    @media only screen and (max-width: 599px) {
      padding: 0;
    }
  }
}

.mainHeader {
  .v-toolbar__items {
    .v-btn__content {
      a {
        color: black;
      }
    }

    .v-btn {
      @media only screen and (max-width: 599px) {
        padding: 0 0 0 10px;
      }
    }
  }
}
</style>
