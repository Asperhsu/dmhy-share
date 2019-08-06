<template>
  <div id="app">
      <table>
          <tr v-for="(user, index) in users" :key="index">
              <td>{{ user.first }} {{ user.last }}</td>
              <td>{{ user.born }}</td>
              <td><span style="margin:.3rem;" v-for="tag in user.tags" :key="tag" v-text="tag"></span></td>
          </tr>
      </table>
  </div>
</template>

<script>
    import {db} from '@/db.js';

    export default {
        name: 'app',

        data () {
            return {
                users: [],
            };
        },

        firestore: {
            users: db.collection('users').where("tags", "array-contains", "xyz"),
        },
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
