<script setup>
import KeyForSample from '@/components/KeyForSample.vue'
import WatchExample from '@/components/WatchExample.vue'
import ComputedExample from './components/ComputedExample.vue';
import ComputedExample2 from './components/ComputedExample2.vue';
</script>

<template>
  <KeyForSample />
  <br>
  <WatchExample />
  <br>
  <ComputedExample />
  <br>
  <ComputedExample2 />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
