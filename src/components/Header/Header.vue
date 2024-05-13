<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>ToDo List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          ><router-link class="text-decoration-none btnsForHeader" to="/">Home</router-link></v-btn
        >
        <v-btn
          ><router-link class="text-decoration-none btnsForHeader" to="/about"
            >About</router-link
          ></v-btn
        >
        <v-btn
          ><router-link class="text-decoration-none btnsForHeader" to="/contact-us"
            >Contact</router-link
          ></v-btn
        >
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
  .btnsForHeader {
    color: black;
    font-size: larger;
  }

  .v-toolbar__content {
    @media only screen and (max-width: 599px) {
      padding: 0;
    }
  }
}
.v-container {
  flex: 0 0 auto;
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
