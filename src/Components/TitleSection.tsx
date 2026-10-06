import { defineComponent } from "vue";

export const TitleSection = defineComponent({
  name: "TitleSection",
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  render() {
    return (
      <h2 class="sm:text-4xl text-2xl border-b-4 border-b-yellow-500">
        {this.text}
      </h2>
    );
  },
});
