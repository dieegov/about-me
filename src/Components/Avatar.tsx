import { defineComponent } from "vue";

export const Avatar = defineComponent({
  name: "Avatar",
  props: {
    src: {
      type: String,
      default() {
        return "https://avatars.githubusercontent.com/u/3068561?v=4";
      },
    },
  },

  render() {
    return (
      <div class="sm:w-96 sm:h-96 h-32 w-32 relative z-10 before:absolute before:top-2 before:left-2 before:w-full before:h-full before:bg-yellow-500">
        <img
          src={this.src}
          alt="user profile image"
          class="absolute z-10 inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  },
});
