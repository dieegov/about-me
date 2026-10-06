import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  name: "App",
  render() {
    return (
      <div class="container mx-auto">
        <RouterView />
      </div>
    );
  },
});
