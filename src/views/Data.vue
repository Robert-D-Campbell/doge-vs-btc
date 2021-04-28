<template>
  <div class="Data">
    <p>testing home</p>
    <BitCoinData />
  </div>
</template>

<script>
// @ is an alias to /src
import BitCoinData from "@/components/BitCoinData.vue";

export default {
  name: "Data",
  components: {
    BitCoinData,
  },
};
</script>
