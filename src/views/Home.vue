<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import { getAssets } from "@/Api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",

  components: { PxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  async created() {
    this.isLoading = true;
    try {
      const assets = await getAssets(20);
      this.assets = assets;
      return this.assets;
    } catch (err) {
      console.error(err);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
