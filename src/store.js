import { createStore } from 'vuex';

const state = {
  personList: [
    { name: 'Victoria', id: 1, phoneNr: 23428997 },
    { name: 'Erik', id: 2, phoneNr: 2342117 },
    { name: 'Stefon', id: 3, phoneNr: 234284597 },
    { name: 'Alice', id: 4, phoneNr: 70632590 },
    { name: 'Anna', id: 5, phoneNr: 70683290},
  ]

}
const mutations = {
  addPerson(state, person) {
    const ids = state.personList.map(p => { return p.id })
    let personMaxId = Math.max(...ids) + 1;
    state.personList.push({
      name: person.name,
      id: personMaxId,      
      phoneNr: person.phoneNr  
    })
  },
  deletePerson(state, id) {
    let newArray = state.personList.slice();
    let index = newArray.findIndex((p) => p.id === id)
    if (index !== -1) {
      newArray.splice(newArray.findIndex((p) => p.id === id), 1)
      state.personList = newArray;
    }
  },
  updatePerson(state, person) {
    let index = state.personList.findIndex((p) => p.id === person.id)
    if (index !== -1) {
      state.personList[index].name = person.name;
      state.personList[index].phoneNr = person.phoneNr;
    }
  }
}
const actions = {



}
export default createStore({ state, mutations, actions })