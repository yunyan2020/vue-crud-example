<template>
  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="Modal"
    :bordered="false"
    size="huge"
    :segmented="segmented"
  >
    <template #header-extra>
      Person Maintenance
    </template>
       <input class="input" type="text" placeholder="Name"  v-model="this.input">
        <input class="input" type="text" placeholder="Phone" v-model="this.input">
    <template #footer>
      <button type="button" class="btn-close"  @click="closeSelf">Close</button>
      <button type="button" class="btn-confirm" @click="save">Save</button>
    </template>
  </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      bodyStyle: {
        width: "600px"
      },
      segmented: {
        content: "soft",
        footer: "soft"
      },
      showModal: ref(false)
    };
  }
});
</script>