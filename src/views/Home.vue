<template>
  <div>
    <px-assets-table :assets="assets" />
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
      assets: [],
    };
  },

  async created() {
    const assets = await getAssets(100);
    this.assets = assets;
    return this.assets;
  },
};
</script>
