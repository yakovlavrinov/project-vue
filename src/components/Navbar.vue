<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue3</div>
    <div class="navbar__btn">
      <!-- <router-link to="/posts">Посты</router-link>
      <router-link to="/about">О нас</router-link> -->
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О нас</my-button>
      <my-button @click="$router.push('/store')">Стор</my-button>
      <my-button @click="$router.push('/composition')">Композишн</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: rgb(57, 57, 57);
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btn {
  margin-left: auto;
}
</style>
