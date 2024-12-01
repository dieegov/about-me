import { defineComponent } from "vue";

export const Skills = defineComponent({
  name: "Skills",
  setup() {
    return () => (
      <section>
        <h3 class="text-2xl font-bold">Skills</h3>
        <ul class="list-disc list-inside">
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>CI/CD</li>
          <li>Agile</li>
        </ul>
      </section>
    );
  },
});
