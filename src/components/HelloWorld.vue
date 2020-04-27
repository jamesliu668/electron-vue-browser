<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Hello {{userName}}, from {{ip}}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  computed: {
    ...mapState({
      userName: state => state.user.userName,
      ip: state => state.user.ip,
    }),
  },

  methods: {
    ...mapActions('user/', ['init'])
  },

  created() {
    console.log('home init...')
    this.init()
    console.log('home init finished')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
