<template>    
  <n-data-table
    :columns="columns"
    :data="allPeople"
    :pagination="pagination"
    :bordered="false"
  /> 
</template>

<script>
import { h } from "vue";
import { NButton,NDataTable } from "naive-ui";
import EditPersonModal from "./EditPersonModal.vue";

const createColumns = ({
  edit
}) => {
  return [
    {
      title: "Id",
      key: "id"
    },
    {
      title: "Name",
      key: "name"
    },
    {
      title: "PhoneNr",
      key: "phoneNr"
    },
    {
      title: "City",
      key: "city"
    },
    {
      title: "Action",
      key: "actions",
      render(row) {        
        return h(EditPersonModal, {
            onPositiveClick: () => edit(row),
            onNegativeClick: () => edit(row),
          }, {
            trigger: h(NButton, null, {
              default: () => "Edit",
            }),
          })
        }
    }
  ];
};


export default {
  data(){
      return {
        showModal:false
      }
    },  
  components: { NButton, NDataTable, EditPersonModal },  
  computed:{
     allPeople() {  
        return this.$store.state.personList;
      }, 
  }, 
  methods:{
    toggleModal:function(){
      this.showModal = !this.showModal;
    },
  },
   setup() {
    return {
      columns: createColumns({
        edit(row) {
           console.log(row.name)
        }
      }),
      pagination: false
    };
  }
};
</script>