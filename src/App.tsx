import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  name: "App",
  render() {
    return (
      <div class="container mx-auto px-4 ">
        <RouterView />
      </div>
    );
  },
});
