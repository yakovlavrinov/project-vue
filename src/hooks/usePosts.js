import axios from "axios";
import { onMounted, ref } from "vue";

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostsLoading = ref(true);
  const fetching = () => {
    try {
      setTimeout(async () => {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: 1,
              _limit: limit,
            },
          }
        );
        totalPages.value = Math.ceil(res.headers["x-total-count"] / limit);
        posts.value = res.data;
        isPostsLoading.value = false;
      }, 1000);
    } catch (error) {
      alert(`ошибка ${error}`);
    }
  };
  onMounted(fetching)

  return {posts, isPostsLoading, totalPages}
}
