<template>
  <div class="home">
    <h1>Home Page</h1>
    <left-side-bar />
    <right-side-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'

export default {
  name: 'Home',
  components: {
    LeftSideBar,
    RightSideBar
  }
}
</script>