<script setup>
import { reactive, watch } from 'vue'
const numbers = reactive([])

watch(
  () => numbers[numbers.length - 1],
  (newValue, oldValue) =>
    console.log(
      'new number added: ',
      numbers[numbers.length - 1],
      'nouValor: ',
      newValue,
      'oldValue: ',
      oldValue,
    ),
  { deep: true },
)

const randomNum = () => numbers.push((Math.random() * 100).toFixed(0))
</script>
<template>
  <button @click="randomNum">Add Random Number</button>
</template>
