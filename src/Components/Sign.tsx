import { defineComponent } from "vue";

export const Sign = defineComponent({
  name: "Sign",
  props: {
    name: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },
  },

  computed: {
    signName() {
      return this.name.toLocaleUpperCase();
    },
  },

  render() {
    return (
      <div class="font-bold">
        <h1 class="sm:text-9xl text-4xl">{this.signName}</h1>
        <h2 class="sm:text-6xl text-2xl">{this.role}</h2>
      </div>
    );
  },
});
