<template>
  <div class="profile">
      <h1>Profile Page</h1>
    <left-side-bar />
    <right-side-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSideBar from '@/components/LeftSideBar.vue'
import RightSideBar from '@/components/RightSideBar.vue'

export default {
  name: 'Profile',
  components: {
    LeftSideBar,
    RightSideBar
  }
}
</script>