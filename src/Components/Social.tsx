import { defineComponent, Component, PropType } from "vue";
import { Icon } from "@vicons/utils";

export const Social = defineComponent({
  name: "Social",
  props: {
    link: {
      type: String,
      required: true,
    },

    icon: {
      type: Object as PropType<Component>,
      required: true,
    },

    size: {
      type: Number,
      default: 32,
    },

    color: {
      type: String,
      default: "white",
    },
  },

  render() {
    var iconComponent = this.icon;

    return (
      <a href={this.link} target="_blank" class="text-2xl mr-4">
        <Icon size={this.size} color={this.color}>
          <iconComponent />
        </Icon>
      </a>
    );
  },
});
