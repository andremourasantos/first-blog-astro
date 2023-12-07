<template>
  <div @click="changeGreeting">
    <p>{{greetingText}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const greetingText = ref<'Hi!' | 'Hello!'>('Hi!');

    const changeGreeting = ():void => {
      if(greetingText.value === 'Hi!'){
        greetingText.value = 'Hello!';
      } else {
        greetingText.value = 'Hi!';
      }
    }

    return {
      greetingText,
      changeGreeting
    }
  }
})
</script>

<style scoped>
  div {
    background: white;
    width: fit-content;
    box-shadow: 0px 0px 10px #00000010;
    border-radius: 16px;
    padding: 16px;
    cursor: pointer;
  }
</style>