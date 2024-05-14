<template>
  <v-container>
    <v-card-title class="text-h6 text-md-h5 text-lg-h4" align="center" justify="center"
      >Contact Us</v-card-title
    >
    <v-row align="center" justify="center">
      <v-col cols="12" lg="6" md="6" sm="8" xs="12">
        <v-sheet class="mx-auto">
          <v-form ref="form">
            <v-text-field
              v-model.trim="name"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
              type="email"
            ></v-text-field>
            <v-textarea label="Message" v-model.trim="message"></v-textarea>

            <div class="d-flex flex-column">
              <v-btn
                class="mt-4 form-buttons-for-contact"
                min-width="130"
                elevation="10"
                rounded="xl"
                color="success"
                @click="sendForm"
              >
                Send
              </v-btn>

              <v-btn
                class="mt-4 form-buttons-for-contact"
                elevation="10"
                min-width="130"
                color="error"
                rounded="xl"
                @click="reset"
              >
                Reset Form
              </v-btn>
            </div>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./contact.js"></script>
<style scoped>
.form-buttons-for-contact {
  margin: auto;
}
</style>
