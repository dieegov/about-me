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
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
        {this.posts.map(this.mountObject).map((post) => (
          <a
            href={post.url}
            target="_blank"
            rel="noopener"
            class="group block overflow-hidden bg-white/5"
          >
            <img
              src={post.image}
              alt="Instagram"
              loading="lazy"
              class="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    );
  },
});
