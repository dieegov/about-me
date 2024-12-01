import { defineComponent } from "vue";
import { Sign } from "../../Components/Sign";
import { Avatar } from "../../Components/Avatar";
import { Job } from "../../Components/Job";

export const HomePage = defineComponent({
  name: "HomePage",
  setup() {
    return () => (
      <section>
        <div class="grid grid-cols-2 gap-4">
          <Sign name="Diego Vieira" role="Software Engineer" />
          <Avatar src="/images/me.jpeg" />
        </div>

        <div class="grid grid-cols-1 sm:w-8/12 gap-8 mt-8">
          <Job
            company="QuintoAndar"
            role="Software Engineer Leader"
            companyLogo="https://media.licdn.com/dms/image/v2/C4D0BAQHUCtTCGeeAxQ/company-logo_100_100/company-logo_100_100/0/1655840826255/quintoandar_com_br_logo?e=1741219200&v=beta&t=6WOi-G1k_K-K1sBhY_Ph633nu3SFMyD_de2sCizbGzc"
            companyLink="https://quintoandar.com.br"
            startDate={new Date("2022-6-1")}
          >
            <p class="py-2">
              Currently, I lead software engineering teams, fostering effective
              collaboration between stakeholders and engineers.
            </p>
          </Job>
          <Job
            company="ATTA"
            role="Software Engineer Leader"
            companyLogo="https://media.licdn.com/dms/image/v2/C560BAQFVAbiYr8zlsQ/company-logo_100_100/company-logo_100_100/0/1654721488853/attafranchising_logo?e=1741219200&v=beta&t=aeRqpQHY1XunRVZmu1NRbqMhD_U9tEcmoXjEZ5OQH00"
            companyLink="https://atta.com.vc"
            startDate={new Date("2022-6-1")}
          >
            <p>
              Currently working at QuintoAndar, ATTA is now part of QuintoAndar
              Group after the acquisition, I focus on ensuring a smooth
              understanding of the platform while facilitating the migration to
              QuintoAndar's internal technology stack. My role also involves
              sharing in-depth expertise in real estate credit, including
              integrations with financial institutions and related processes.
            </p>
          </Job>
          <Job
            company="ATTA"
            role="Software Engineer"
            companyLogo="https://media.licdn.com/dms/image/v2/C560BAQFVAbiYr8zlsQ/company-logo_100_100/company-logo_100_100/0/1654721488853/attafranchising_logo?e=1741219200&v=beta&t=aeRqpQHY1XunRVZmu1NRbqMhD_U9tEcmoXjEZ5OQH00"
            companyLink="https://atta.com.vc"
            startDate={new Date("2020-5-1")}
            endDate={new Date("2022-6-1")}
          >
            <p>
              When I joined Atta, I led the migration from a legacy stack to a
              modernized architecture, utilizing .NET and Vue.js. I implemented
              robust CI/CD pipelines, collaborative coding practices, effective
              pull request guidelines, and thorough code analysis standards.
              Additionally, I trained and upskilled a team of over 13
              developers, ensuring their proficiency in the new technologies and
              fostering a culture of continuous improvement.
            </p>
          </Job>
          <Job
            company="ProRadis"
            role="Fullstack Web Developer"
            companyLogo="https://media.licdn.com/dms/image/v2/C4D0BAQFfZGGIXe-m6w/company-logo_100_100/company-logo_100_100/0/1651067291378/proradis_logo?e=1741219200&v=beta&t=l-hQBZGaNCAQG9MMKG6GMOMg-PocNZAMBMBS_KqfeCw"
            companyLink="https://www.proradis.com.br"
            startDate={new Date("2018-5-1")}
            endDate={new Date("2020-1-1")}
          >
            <p class="py-2">
              Projects and Systems Development for Medical and Dental Clinics
            </p>

            <p class="py-2">Technologies: PHP, MySQL, Python, C#, Javascript</p>

            <p class="py-2">
              Featured Project: Development of the telerradiologia.co system
              using .Net Core, VUE.JS and MySQL
            </p>

            <h4 class="font-bold">Main Activities:</h4>

            <ul class="list-disc list-inside">
              <li>Analysis and Development</li>
              <li>Requirements Gathering</li>
              <li>UI and UX Interface Design</li>
              <li>Data Modeling</li>
              <li>Microservices</li>
              <li>Integrations</li>
            </ul>
          </Job>

          <Job
            company="epico.digital"
            role="Fullstack Web Developer"
            startDate={new Date("2017-10-1")}
            endDate={new Date("2018-5-1")}
          >
            <p class="py-2">
              Epico is a digital studio focused on developing high-quality
              solutions for advertising agencies and major brands.
            </p>

            <p class="py-2">Development with Node.JS, Angular and Oracle.</p>

            <p class="py-2">
              <h4 class="font-bold">Main activities:</h4>

              <ul class="list-disc list-inside">
                <li>Bug fixes</li>
                <li>New feature development</li>
                <li>Data development and modeling</li>
                <li>Interface development</li>
                <li>Integrations</li>
              </ul>
            </p>
          </Job>
          <Job
            company="Universidade Santa Cecília"
            companyLogo="https://media.licdn.com/dms/image/v2/C4D0BAQEikoM13rO6tA/company-logo_100_100/company-logo_100_100/0/1641390371374/universidade_santa_ceclia_logo?e=1741219200&v=beta&t=5bOb--WvWjq-DZIBDs59oL5qV4YqSOwYmLuV5spXyrk"
            companyLink="https://www.unisanta.br/"
            role="Fullstack Developer"
            startDate={new Date("2009-7-1")}
            endDate={new Date("2017-9-1")}
          >
            <p class="py-2">
              Santa Cecilia University is a Brazilian higher education
              institution located in the city of Santos. It is also part of the
              Santa Cecilia Educational Complex, which includes Santa Cecilia
              College, Santa Cecilia TV, and Santa Cecilia FM.
            </p>

            <p class="py-2">
              Development of institutional systems using technologies such as C#
              and Angular.
            </p>

            <p class="py-2">
              <h4 class="font-bold">Main activities:</h4>
              <ul class="list-disc list-inside">
                <li>
                  Development of new tools and applications for sectors and
                  third parties of the institution
                </li>
                <li>Analysis and computerization of processes</li>
                <li>Restructuring of the Institutional Portal</li>
                <li>Restructuring of the Events Portals (COBRIC)</li>
                <li>
                  Restructuring of the University Games System (UNISANTA Games)
                </li>
                <li>Project management and monitoring</li>
                <li>
                  Integration with Itaú Bank (Automation of invoice processing)
                </li>
                <li>Integration with TOTVS ERP (RM Sistemas)</li>
                <li>Development of the system for NPH Unisanta</li>
                <li>Integrations with Wordpress</li>
              </ul>
            </p>
          </Job>
        </div>
      </section>
    );
  },
});

export default HomePage;
