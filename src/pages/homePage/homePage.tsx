import { defineComponent } from "vue";
import { Avatar } from "../../Components/Avatar";
import { Job } from "../../Components/Job";
import { Social } from "../../Components/Social";

import { GithubAlt, Linkedin, Instagram } from "@vicons/fa";
import { TitleSection } from "../../Components/TitleSection";
import { InstagramPosts } from "../../Components/InstagramPosts";
import { locale, tr, type Locale } from "../../i18n";
import {
  about,
  education,
  experience,
  hero,
  offTheClock,
  skills,
  studio,
} from "../../content";

const LOCALES: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "pt", label: "PT" },
];

export const HomePage = defineComponent({
  name: "HomePage",
  setup() {
    return () => (
      <div class="text-xl leading-snug">
        <header class="flex items-center justify-between py-4">
          <span class="text-lg font-bold tracking-wide text-white/60">
            diegovieira.dev
          </span>
          <div
            class="flex border border-white/20 text-base font-bold"
            role="group"
            aria-label={tr({ en: "Language", pt: "Idioma" })}
          >
            {LOCALES.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={locale.value === value}
                onClick={() => (locale.value = value)}
                class={[
                  "min-h-11 min-w-11 px-3 transition-colors",
                  locale.value === value
                    ? "bg-yellow-400 text-black"
                    : "text-white/60 hover:text-white",
                ]}
              >
                {label}
              </button>
            ))}
          </div>
        </header>

        <section class="flex flex-col-reverse gap-8 pb-16 pt-8 sm:flex-row sm:items-end sm:justify-between sm:pb-24 sm:pt-16">
          <div>
            <h1 class="text-6xl font-black uppercase tracking-tight sm:text-8xl lg:text-9xl" style={{ lineHeight: "0.85" }}>
              Diego
              <br />
              Vieira
            </h1>
            <p class="mt-5 text-2xl font-bold text-yellow-400 sm:text-4xl">
              {tr(hero.role)}
            </p>
            <p class="mt-3 max-w-xl text-white/80">{tr(hero.tagline)}</p>
            <p class="mt-2 text-base text-white/50">{tr(hero.location)}</p>
            <div class="-ml-3 mt-4 flex">
              <Social link="https://github.com/dieegov" icon={GithubAlt} label="GitHub" size={26} />
              <Social link="https://www.linkedin.com/in/dieegov" icon={Linkedin} label="LinkedIn" size={26} />
              <Social link="https://instagram.com/dieegov" icon={Instagram} label="Instagram" size={26} />
            </div>
          </div>
          <Avatar src="/images/me.jpeg" />
        </section>

        <section class="grid gap-6 border-t-4 border-yellow-400 pt-8 sm:grid-cols-[14rem_1fr] sm:gap-8">
          <TitleSection index="01" text={tr({ en: "About", pt: "Sobre" })} />
          <div class="space-y-4 text-white/80">
            {about.map((paragraph) => (
              <p class="max-w-prose">{tr(paragraph)}</p>
            ))}
            <ul class="flex flex-wrap gap-2 pt-2" aria-label="Stack">
              {skills.map((skill) => (
                <li class="border border-white/15 px-2 py-0.5 text-base text-white/70">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section class="mt-20">
          <TitleSection index="02" text={tr({ en: "Experience", pt: "Experiência" })} />
          <div class="mt-6">
            {experience.map((company) => (
              <Job key={company.name} company={company} />
            ))}
            <p class="border-t border-white/10 pt-6 text-base text-white/50">
              {tr(education)}
            </p>
          </div>
        </section>

        <section class="-mx-4 mt-20 bg-yellow-400 px-4 py-12 text-black sm:mx-0 sm:px-10 sm:py-14">
          <div class="flex items-baseline gap-3">
            <span class="text-base font-semibold sm:text-lg">03</span>
            <h2 class="text-4xl font-black uppercase tracking-tight sm:text-6xl">
              Blackstudio
            </h2>
          </div>
          <p class="mt-3 max-w-xl">{tr(studio.intro)}</p>
          <a
            href={studio.link}
            target="_blank"
            rel="noopener"
            class="mt-2 inline-block font-bold underline underline-offset-4"
          >
            blackstudio.dev →
          </a>

          <ul class="mt-8 grid gap-4 sm:grid-cols-3">
            {studio.games.map((game) => (
              <li key={game.name}>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener"
                  class="flex h-full flex-col bg-black p-5 text-white transition-transform hover:-translate-y-1"
                >
                  <div class="flex h-20 items-center">
                    <img
                      src={game.logo}
                      alt={game.name}
                      loading="lazy"
                      class="max-h-full max-w-[70%] object-contain"
                    />
                  </div>
                  <h3 class="mt-4 text-2xl font-bold">{game.name}</h3>
                  <p class="mt-1 text-lg text-white/70">{tr(game.body)}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section class="mt-20 grid gap-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
          <TitleSection index="04" text={tr({ en: "Off hours", pt: "Fora do código" })} />
          <div class="space-y-4 text-white/80">
            {offTheClock.map((paragraph) => (
              <p class="max-w-prose">{tr(paragraph)}</p>
            ))}
          </div>
        </section>

        <div class="mt-8">
          <InstagramPosts />
        </div>

        <footer class="mt-16 flex flex-col gap-2 border-t border-white/10 py-8 text-base text-white/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Diego Vieira</span>
          <a
            href="https://github.com/dieegov/about-me"
            target="_blank"
            rel="noopener"
            class="hover:text-yellow-400"
          >
            {tr({ en: "Built with Vue · source on GitHub", pt: "Feito com Vue · código no GitHub" })}
          </a>
        </footer>
      </div>
    );
  },
});

export default HomePage;
