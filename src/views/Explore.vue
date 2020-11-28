<template>
  <div class="explore">
    <h1>Explore Page</h1>
    <left-side-bar />
    <right-side-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'

export default {
  name: 'Explore',
  components: {
    LeftSideBar,
    RightSideBar
  }
}
</script>