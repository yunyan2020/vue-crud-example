<template>
  <n-button @click="showModal = true">
    Edit
  </n-button>
  <n-modal
    v-model:show="showModal" 
    preset="dialog"
    title="Edit Person Modal"
    positive-text="Submit"
    negative-text="Cancel"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
  >
    <template #header-extra>
    </template>
        <input class="input" type="text" placeholder="Name"  v-model="this.input">
        <input class="input" type="text" placeholder="Phone" v-model="this.input">  
        <h1>{{}}</h1>
    <template #footer>
      <button type="button" class="btn-confirm" @click="save">Save</button>
    </template>
  </n-modal>
</template>

<script>
import { ref } from "vue";
import { NCard,NModal } from "naive-ui";

export default {
  components: {
      NCard,NModal
    },  
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
};
</script>