<template>
  <h1>Home Page</h1>
  <div class="container">
    <router-link :to="'/addPerson'"> Add Person</router-link>
    <div
      class="context" 
      v-for="(person, index) in allPeople"
      v-bind:key="index"
    >
      <p >
        Name:{{ person.name }}, PhoneNr:{{ person.phoneNr }}         
       <button class="btn" @click="deletePerson(person.id)">❌</button>
       <button class="btn" @click="editPerson(person.id)">✏️</button>                             
      </p> 
      
    </div>
  </div>  
  <EditPerson :personId=personId  v-show="showModal" v-on:closeMe="closeMe"></EditPerson>  
</template>

<script>
import EditPerson from '../components/EditPerson.vue';
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
     editPerson(id){
      this.personId = id;
      this.showModal = !this.showModal;
    },
    closeMe:function(){
      this.showModal = !this.showModal;
    }
  },
  components: {EditPerson},
};
</script>

<style scoped>
.context {
  margin-left: 50px;
  text-align: left;
}

.btn {
  cursor: pointer;
}
</style>