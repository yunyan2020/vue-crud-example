<template>
  <div class="modal-backdrop">
    <div class="modal">
        <div class="modal-header">
          <h3>Person Maintenance</h3>
        </div>
        <div class="modal-body">
            <input class="input" type="text" placeholder="Name"  v-model="this.input">
            <input class="input" type="text" placeholder="Phone" v-model="this.input">
        </div>
        <div class="modal-footer">
            <button type="button" class="btn-close"  @click="closeSelf">Close</button>
            <button type="button" class="btn-confirm" @click="save">Save</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: ['personId'],
  data() {
    return {       
    }
  }, 
  methods: {    
    closeSelf() {
        this.$emit("closeMe");      
    },
    save(){
      console.log("personId",this.personId)

    }
  }
}
</script>

<style>
.modal-backdrop { 
    position: fixed; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    background-color: rgba(0,0,0,.3); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
}
.modal { 
    background-color: #fff; 
    box-shadow: 2px 2px 20px 1px; 
    overflow-x:auto; 
    display: flex; 
    flex-direction: column;
    border-radius: 16px;
    width: 700px;
} 
.modal-header { 
    border-bottom: 1px solid #eee; 
    color: #313131; 
    justify-content: space-between;
    padding: 15px; 
    display: flex; 
} 
.modal-footer { 
    border-top: 1px solid #eee; 
    justify-content: flex-end;
    padding: 15px; 
    display: flex; 
} 
.modal-body { 
    position: relative; 
    padding: 20px 10px; 
    margin-top:2rem;
    font-size: 40px;
    margin-bottom:2rem;
}
.btn-close, .btn-confirm {    
    border-radius: 8px;
    margin-left:16px;
    width:56px;
    height: 36px;
    border:none;
    cursor: pointer;
}
.btn-close {
    color: #313131;
    background-color:transparent;
}
.btn-confirm {
    color: #fff; 
    background-color: #2d8cf0;
}
 .input{
   color: white;
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