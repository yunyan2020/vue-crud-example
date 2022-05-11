<template>
    <div class="container">
        <button @click="goToHome">Go Back to Home</button>
        <div class="body">
            <input class="input" type="text" placeholder="Name"  v-model="name">
            <input class="input" type="text" placeholder="Phone" v-model="phoneNr">
        </div>
        <div class="footer">
            <button type="button" class="btn-confirm" @click="save">Save</button>
        </div>
    </div>
</template>

<script>

export default {  
  name: 'AddPerson',
  data() {
    return {       
    }
  }, 
  methods: { 
    goToHome(){
      this.$router.push({ path: `/` });
    },
    save(){      
      let person = {
        name:this.name,
        phoneNr:this.phoneNr
      }
      this.$store.commit("addPerson", person)
      this.$router.push({ path: `/` });
    }
  }
}
</script>

<style scoped>
 .input{
    margin:20px;
    font-size: 14px;
    gap: 1em;
    font-weight: 900; 
    width: 60%;
    padding: 12px 6px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: rgba(196, 196, 196, 0.1);
    border: 3px solid transparent;
    box-sizing: border-box;
 }
 
</style>