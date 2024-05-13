<template>
  <v-layout>
    <v-footer class="bg-blue-grey-lighten-5 text-center font-weight-bold d-flex flex-column">
      <v-row justify="center" no-gutters class="pa-1 mb-1">
        <v-btn
          class="py-1 grey-darken-4"
          size="large"
          bg-color="grey-darken-4"
          v-for="socialIcon in socialIcons"
          :key="socialIcon"
          variant="plain"
          density="comfortable"
        >
          <a class="active-link" :href="socialIcon.path" target="_blank">
            <v-icon class="iconsForFooter">{{ socialIcon.icon }}</v-icon>
          </a>
        </v-btn>
      </v-row>

      <v-row justify="center" no-gutters>
        <v-btn
          class="y-2 grey-darken-4"
          v-for="nav in navBar"
          :key="nav.title"
          variant="text"
          density="comfortable"
        >
          <RouterLink :to="nav.path" class="text-decoration-none text-h6 active-link btnsForFooter"
            >{{ nav.title }}
          </RouterLink>
        </v-btn>
      </v-row>
      <v-spacer></v-spacer>
      <div class="pt-0"></div>

      <div class="text-overline font-weight-medium">{{ getYear }} <strong>ToDo List</strong></div>
    </v-footer>
  </v-layout>
</template>

<script src="./footer.js"></script>

<style>
.v-layout {
  flex: 0 0 auto;
}
.iconsForFooter {
  color: black;
}
.btnsForFooter {
  color: black;
}
</style>
