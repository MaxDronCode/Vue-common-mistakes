<script setup>
import { ref, computed } from 'vue';

const nom = ref('');
const cognom = ref('');

const nomComplet = computed(() => `${nom.value} ${cognom.value}`);
</script>
<template>
  <div>
    <p>Nom complet: {{ nomComplet }}</p>
    <input v-model="nom" placeholder="Nom" />
    <input v-model="cognom" placeholder="Cognom" />
  </div>
</template>