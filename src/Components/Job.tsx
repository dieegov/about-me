import { defineComponent, PropType } from "vue";
import { period, tr } from "../i18n";
import type { Company } from "../content";

export const Job = defineComponent({
  name: "Job",
  props: {
    company: {
      type: Object as PropType<Company>,
      required: true,
    },
  },

  render() {
    const { name, link, roles } = this.company;
    const current = roles.some((role) => !role.end);

    return (
      <article class="border-t border-white/10 py-6 sm:grid sm:grid-cols-[14rem_1fr] sm:gap-8">
        <h3 class="text-2xl font-bold leading-tight">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener"
              class="underline-offset-4 decoration-yellow-400 hover:underline"
            >
              {name}
            </a>
          ) : (
            name
          )}
          {current && (
            <span class="ml-2 inline-flex items-center gap-1 align-middle text-sm font-semibold uppercase tracking-wider text-yellow-400">
              <span class="h-2 w-2 rounded-full bg-yellow-400" aria-hidden="true" />
              {tr({ en: "Now", pt: "Agora" })}
            </span>
          )}
        </h3>

        <div class="mt-2 space-y-5 sm:mt-0">
          {roles.map((role) => (
            <div key={role.start}>
              <p class="text-xl font-semibold leading-tight">{tr(role.title)}</p>
              <p class="text-base text-white/50">{period(role.start, role.end)}</p>
              {role.body && (
                <p class="mt-2 max-w-prose text-white/80">{tr(role.body)}</p>
              )}
            </div>
          ))}
        </div>
      </article>
    );
  },
});
