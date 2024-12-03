<script setup>
import { ref, computed } from 'vue'

const preuMinim = ref(0)
const productes = ref([
  { nom: 'Monitor', preu: 200 },
  { nom: 'Teclat', preu: 20 },
  { nom: 'Ratolí', preu: 10 },
  { nom: 'Auriculars', preu: 50 },
])
const productesFiltrats = computed(() => {
  return productes.value.filter(producte => producte.preu >= preuMinim.value)
})
</script>
<template>
  <input v-model.number="preuMinim" placeholder="Preu mínim" />
  <ul>
    <li v-for="producte in productesFiltrats" :key="producte.nom">
      {{ producte.nom }} - {{ producte.preu }} €
    </li>
  </ul>
</template>