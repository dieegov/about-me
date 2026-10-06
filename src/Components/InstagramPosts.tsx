import { defineComponent } from "vue";
export const InstagramPosts = defineComponent({
  name: "InstagramPosts",

  data: () => ({
    posts: [
      "C8IVxxCPars",
      "Cjywdceuit1",
      "CP_q6vkgO12",
      "C8LK7xNPFXC",
      "C_XjMOzR8ik",
      "Ca0hXOVgqWS",
    ],
  }),

  methods: {
    mountObject(postId: string) {
      return {
        url: `https://www.instagram.com/p/${postId}`,
        image: `/images/instagram/${postId}.jpg`,
      };
    },
  },

  render() {
    return (
      <div class="grid grid-cols-3 gap-4 align-middle">
        {this.posts.map(this.mountObject).map((post) => (
          <a href={post.url} target="_blank">
            <img src={post.image} alt={post.url} />
          </a>
        ))}
      </div>
    );
  },
});
