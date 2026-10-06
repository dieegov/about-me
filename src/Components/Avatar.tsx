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
      <div class="relative aspect-square w-28 shrink-0 before:absolute before:left-2 before:top-2 before:h-full before:w-full before:bg-yellow-400 sm:w-64 sm:before:left-3 sm:before:top-3 lg:w-80">
        <img
          src={this.src}
          alt="Diego Vieira"
          class="absolute inset-0 h-full w-full object-cover"
          width="320"
          height="320"
        />
      </div>
    );
  },
});
