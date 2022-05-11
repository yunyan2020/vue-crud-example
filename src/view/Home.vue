<template>
  <h1>Home Page</h1>
  <div class="container">
    <button @click="toggleModal">Add Person</button>
    <div
      class="context"
      v-for="(person, index) in allPeople"
      v-bind:key="index"
    >
      <p>
        Name:{{ person.name }}, PhoneNr:{{ person.phoneNr }},City:{{person.city}}
        <button @click="deletePerson(person.id)">❌</button>
        <button @click="toggleModal(person.id)">✏️</button>                
      </p>
    </div>
  </div>  
  <Modal :personId=personId  v-show="showModal" v-on:closeMe="closeMe"></Modal>  
</template>

<script>
import Modal from '../components/Modal.vue';
export default {
  data() {
    return {
      showModal: false,
      personId:0,
    };
  },
  computed: {
    allPeople() {
      return this.$store.state.personList;
    },
  },
  methods: {
    deletePerson(id) {
      this.$store.commit("deletePerson", id);
    },
     toggleModal(id){
       this.personId = id;
      this.showModal = !this.showModal;
    },
    closeMe:function(){
      this.showModal = !this.showModal;
    }
  },
  components: {Modal},
};
</script>

<style scoped>
.context {
  margin-left: 50px;
  text-align: left;
}

.span.button:hover {
  cursor: pointer;
}
</style>