<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="showDialog">Создать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list v-if="!isPostsLoading" :posts="posts" @remove="removePost" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [
        
      ],
      dialogVisible: false,
      isPostsLoading: false
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      this.isPostsLoading = true
      try {
        setTimeout(async()=>{
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = res.data
          this.isPostsLoading = false
        },1000)
      } catch(error) {
        alert(`ошибка ${error}`)
      } 
    },
  },
  mounted () {
    this.fetchPosts()
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
