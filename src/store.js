import { createStore } from 'vuex';

const state = {
  personList: [
    { name: 'Victoria', id: 1, phoneNr: 23428997, city: 'LUND' },
    { name: 'Erik', id: 2, phoneNr: 2342117, city: 'MALMÖ' },
    { name: 'Stefon', id: 3, phoneNr: 234284597, city: 'STOCKHOLM' },
    { name: 'Alice', id: 4, phoneNr: 70632590, city: 'ESLÖV' },
    { name: 'Anna', id: 5, phoneNr: 70683290, city: 'GOTHENBURG' },
  ]

}
const mutations = {
  deletePerson(state, id) {
    let newArray = state.personList.slice();
    let index = newArray.findIndex((p) => p.id === id)
    if (index !== -1) {
      newArray.splice(newArray.findIndex((p) => p.id === id), 1)
      state.personList = newArray;
    }
  }
}
const actions = {



}
export default createStore({ state, mutations, actions })