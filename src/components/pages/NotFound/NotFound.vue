<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <h2>Page not found</h2>
        <picture>
          <img class="imageNotFound" src="../../images/notFound.jpg" />
        </picture>
        <p align="center" justify="center">
          We're sorry, the page you requested could not be found.
        </p>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn variant="tonal" color="info" rounded="xl" size="x-large" block
          ><RouterLink class="text-decoration-none btnNotFoundPage" to="/"
            >Go to homepage</RouterLink
          ></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.btnNotFoundPage {
  color: black;
  font-weight: 600;
}
.imageNotFound {
  max-width: 700px;
  margin: 0 auto;
}
</style>
