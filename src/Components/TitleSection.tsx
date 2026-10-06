import { defineComponent } from "vue";

export const TitleSection = defineComponent({
  name: "TitleSection",
  props: {
    text: {
      type: String,
      required: true,
    },

    index: {
      type: String,
      required: true,
    },
  },

  render() {
    return (
      <h2 class="flex items-baseline gap-3 text-3xl font-bold uppercase tracking-tight sm:text-5xl">
        <span class="text-base font-semibold text-yellow-400 sm:text-lg">
          {this.index}
        </span>
        {this.text}
      </h2>
    );
  },
});
