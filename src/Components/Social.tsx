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
      default: "currentColor",
    },

    label: {
      type: String,
      required: true,
    },
  },

  render() {
    var iconComponent = this.icon;

    return (
      <a
        href={this.link}
        target="_blank"
        rel="noopener"
        aria-label={this.label}
        class="inline-flex h-11 w-11 items-center justify-center text-white/70 transition-colors hover:text-yellow-400"
      >
        <Icon size={this.size} color={this.color}>
          <iconComponent />
        </Icon>
      </a>
    );
  },
});
