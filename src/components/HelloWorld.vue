<template>
  <div @click="count = 2">Count: {{ count }}</div>
  <input v-model="text">
  <Foo @click="callMethodFromOutside()" ref="fooComp"/>
  <Baz />
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-facing-decorator";

import Foo from './Foo.vue'
import Baz from './Baz'
// import { mapState, mapMutations } from 'vuex'

@Component({
  'components': {
    Foo,
    Baz,
  }
})
export default class HelloWorld extends Vue {
  //This is a vue reactive property.
  text = "Example code";

  //This is a vue component method.
  method() {
    console.log(this.$store.state.count)
  }

  // Reference
  @Ref
  readonly fooComp!: Foo

  callMethodFromOutside() {
    console.log(this.fooComp.speak())
  }

  //This is a vue component lifecycle hook.
  mounted() {
    this.method();
  }

  // Mapping vuex to class get and setter
  get count() {
    return this.$store.state.count;
  }

  set count(amount) {
    this.$store.commit('increment', amount)
  }
}
</script>

<style></style>
