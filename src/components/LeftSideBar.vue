<template>
  <div class="left">
      <h1 class="columnHeading">Twitter</h1>
      <ul>
          <router-link to="/">
            <div class="router-link">
                <h2>home</h2>
            </div>
          </router-link>
          <router-link to="/explore">
            <div class="router-link">
                <h2>explore</h2>
            </div>
          </router-link>
          <router-link to="/notifications">
            <div class="router-link">
                <h2>notifications</h2>
            </div>
          </router-link>
          <router-link to="/messages">
            <div class="router-link">
                <h2>messages</h2>
            </div>
          </router-link>
          <router-link to="/profile">
            <div class="router-link">
                <h2>profile</h2>
            </div>
          </router-link>
          <router-link to="/settings">
            <div class="router-link">
                <h2>settings</h2>
            </div>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'LeftSideBar'
}
</script>

<style>
.columnHeading {
    color: #1D8DEE;
}

.router-link {
    margin: 10px;
    width: 8vw;
    border-color: rgba(211, 211, 211, 0.0);
    border-width: 2px;
    border-style: solid;
    border-radius: 25px;
}

.router-link:hover {
    color: #1D8DEE;
    background: rgba(29,141,238, 0.4);
}

.left a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

/* .left a:hover {
  color: #1D8DEE;
} */

.left a.router-link-exact-active {
  color: #1D8DEE;
}
</style>