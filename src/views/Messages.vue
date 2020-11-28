<template>
  <div class="messages">
      <h1>Messages Page</h1>
    <left-side-bar />
    <right-side-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'

export default {
  name: 'Messages',
  components: {
    LeftSideBar,
    RightSideBar
  }
}
</script>