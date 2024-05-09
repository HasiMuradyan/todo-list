<template>
  <v-layout>
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div>
        <v-btn
          class="py-1"
          v-for="socialIcon in socialIcons"
          :key="socialIcon"
          variant="text"
          density="comfortable"
        >
          <a class="active-link" :href="socialIcon.path" target="_blank">
            <v-icon>{{ socialIcon.icon }}</v-icon>
          </a>
        </v-btn>
      </div>
      <v-row justify="center" no-gutters>
        <v-btn
          class="py-1"
          v-for="nav in navBar"
          :key="nav.title"
          variant="text"
          density="comfortable"
        >
          <RouterLink :to="nav.path" class="text-decoration-none active-link"
            >{{ nav.title }}
          </RouterLink>
        </v-btn>
      </v-row>

      <div class="pt-0"></div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>ToDo List</strong></div>
    </v-footer>
  </v-layout>
</template>

<script src="./footer.js"></script>
