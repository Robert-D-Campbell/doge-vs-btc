<template>
  <div class="dataWrapper"><p>placehodler for tha' DOGE</p></div>
</template>

<script>
import DogeService from '@/services/DogeService.js';

export default {
  name: 'DogeData',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    apiUrl: {
      type: String,
      default: process.env.VUE_APP_CRYPTO_API_URL,
    },
  },
  data() {
    return {
      data: null,
      error: null,
    };
  },
  created() {
    DogeService.getDogeData()
      .then((res) => console.log(res))
      .catch((err) => (this.err = err.err));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
