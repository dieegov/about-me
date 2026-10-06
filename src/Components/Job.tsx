import { defineComponent } from "vue";

export const Job = defineComponent({
  name: "Job",
  props: {
    company: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
      default() {
        return "https://avatars.githubusercontent.com/u/3068561?v=4";
      },
    },
    companyLink: {
      type: String,
      default: "#",
    },
    role: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: false,
    },
  },

  computed: {
    calculatedPeriod() {
      const startDateFormated = this.formatDateString(this.startDate);

      if (!this.endDate) return `${startDateFormated} - Present`;

      const diff = this.calculateDateDifference(this.startDate, this.endDate);

      const endDateFormated = this.formatDateString(this.endDate);

      return `${startDateFormated} - ${endDateFormated} (${diff.years} years, ${diff.months} months)`;
    },
  },

  methods: {
    formatDateString(date: Date) {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
    },

    calculateDateDifference(startDate: Date, endDate: Date) {
      let years = endDate.getFullYear() - startDate.getFullYear();
      let months = endDate.getMonth() - startDate.getMonth();
      let days = endDate.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        days += new Date(
          endDate.getFullYear(),
          endDate.getMonth(),
          0
        ).getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      return { years, months, days };
    },
  },

  //   slots: {
  //     default: () => <div>-----</div>,
  //   },

  render() {
    return (
      <section class="tracking-normal">
        <div class="flex">
          <div class="flex-none h-12 float-right w-12 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-yellow-500 mt-2 mr-4">
            <img
              src={this.companyLogo}
              alt="company logo"
              class="absolute z-10 inset-0 w-12 h-12 object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 class="text-2xl font-bold">
              <a href={this.companyLink} target="_blank">
                {this.company}
              </a>
              <small class="text-lg block font-bold">
                {this.role}
                <span class="text-gray-400 block">{this.calculatedPeriod}</span>
              </small>
            </h3>

            <div class="text-lg">
              {this.$slots?.default && this.$slots?.default()}
            </div>
          </div>
        </div>
      </section>
    );
  },
});
