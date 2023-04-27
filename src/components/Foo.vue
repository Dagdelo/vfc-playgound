<template>
  <div>This is Foo Component!</div>
</template>
<script lang="ts">
//class component
import { Component, Vue } from "vue-facing-decorator";
@Component
export default class Foo extends Vue {
    speak() {
        alert("Alert from Foo!")
    }
}
</script>
<style></style>
