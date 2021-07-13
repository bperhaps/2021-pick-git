export const PAGE_URL = {
  HOME: "/",
  LOGIN: "/login",
  PROFILE: "/profile",
  ADD_POST: "/add-post",
  EDIT_POST: "/edit-post",
  SEARCH: "/search",
};

export const API_URL = {
  POSTS: "/posts",
  POSTS_LIKES: (postId: string) => `/posts/${postId}/likes`,
  SELF_PROFILE: "/profiles/me",
};
