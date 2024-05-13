<template>
  <div class="pa-4 text-center">
    <v-dialog :modelValue="isOpen" @update:modelValue="onClose" max-width="600">
      <v-card prepend-icon="mdi-delete" :title="title">
        <v-card-text v-if="text">
          {{ text }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="warning" text="Close" variant="plain" @click="onClose"></v-btn>
          <v-btn color="success" text="Confirm" variant="tonal" @click="onConfirm"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./confirmDialog.js"></script>
