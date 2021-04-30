<template>
  <div class="Data">
    <p>testing Doge</p>
    <DogeData />
  </div>
</template>

<script>
// @ is an alias to /src
import DogeData from '@/components/DogeData.vue';

export default {
  name: 'Data',
  components: {
    DogeData,
  },
};
</script>
