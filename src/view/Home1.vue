<template>
  <h1>Home Page</h1>
  <div class="container">
  <button  @click="toggleModal">Add Person </button>
  <Modal v-show="showModal" v-on:closeMe="closeMe"></Modal>  
  <PersonTable></PersonTable>  
</div>
</template>

<script>
import Modal from '../components/Modal.vue'
import PersonTable from '../components/PersonTable.vue'
export default {
  data() {
    return{
      showModal: false
    }
  },
  components:{ Modal,PersonTable},
  methods:{
    toggleModal:function(){
      this.showModal = !this.showModal;
    },
    closeMe:function(){
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>

</style>