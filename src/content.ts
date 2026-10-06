import type { Text } from "./i18n";

export type Role = {
  title: Text;
  start: string;
  end?: string;
  body?: Text;
};

export type Company = {
  name: string;
  link?: string;
  roles: Role[];
};

export const hero = {
  role: { en: "Tech Lead at 77Sol", pt: "Tech Lead na 77Sol" },
  tagline: {
    en: "15+ years building distributed systems, banking integrations and the teams behind them. After hours, I make games at Blackstudio.",
    pt: "15+ anos construindo sistemas distribuídos, integrações bancárias e os times por trás deles. Fora do expediente, faço jogos na Blackstudio.",
  },
  location: { en: "São Paulo, Brazil", pt: "São Paulo, Brasil" },
};

export const about: Text[] = [
  {
    en: "Born in Guarujá, São Paulo, in 1994. I started coding at 14 with PHP and SQL Server, taught myself HTML and CSS through side projects, and had my first job at 15.",
    pt: "Nasci em Guarujá, São Paulo, em 1994. Comecei a programar aos 14 com PHP e SQL Server, aprendi HTML e CSS sozinho em projetos pessoais e tive o primeiro emprego aos 15.",
  },
  {
    en: "Today I work across .NET, Node.js, TypeScript, Vue and React on AWS: microservices, messaging, and credit integrations with Brazil's largest banks. Most of my recent years were spent leading engineers, setting architecture, and keeping business and tech pointed the same way.",
    pt: "Hoje trabalho com .NET, Node.js, TypeScript, Vue e React na AWS: microsserviços, mensageria e integrações de crédito com os maiores bancos do país. Passei boa parte dos últimos anos liderando engenheiros, definindo arquitetura e mantendo negócio e tecnologia apontando para o mesmo lado.",
  },
];

export const skills = [
  ".NET",
  "Node.js",
  "TypeScript",
  "Vue",
  "React",
  "AWS",
  "RabbitMQ",
  "SQS",
  "Microservices",
  "SQL Server",
  "MySQL",
  "Three.js",
];

export const experience: Company[] = [
  {
    name: "77Sol",
    link: "https://77sol.com.br",
    roles: [
      {
        title: {
          en: "Senior Software Engineer, Team Lead",
          pt: "Senior Software Engineer, Team Lead",
        },
        start: "2026-06",
      },
    ],
  },
  {
    name: "Almada Capital",
    roles: [
      {
        title: {
          en: "Senior Staff Software Engineer",
          pt: "Senior Staff Software Engineer",
        },
        start: "2023-12",
        end: "2026-04",
        body: {
          en: "Led strategic technical decisions and kept technology aligned with business goals. Owned the system architecture and its evolution, with a focus on scalability, resilience and operational efficiency.",
          pt: "Liderei decisões técnicas estratégicas e mantive a tecnologia alinhada aos objetivos do negócio. Responsável por definir e evoluir a arquitetura, com foco em escalabilidade, resiliência e eficiência operacional.",
        },
      },
    ],
  },
  {
    name: "Tivita",
    roles: [
      {
        title: {
          en: "Senior Software Engineer",
          pt: "Engenheiro de Software Sênior",
        },
        start: "2025-03",
        end: "2025-12",
        body: {
          en: "Stepped back from management to ship features that unlocked new customers. Refactored critical modules for scale and unblocked other teams to build faster and safer.",
          pt: "Saí da gestão para entregar features que destravaram novos clientes. Refatorei módulos críticos para escalar a plataforma e destravei outros times para avançar com mais segurança e velocidade.",
        },
      },
    ],
  },
  {
    name: "QuintoAndar",
    link: "https://quintoandar.com.br",
    roles: [
      {
        title: { en: "Software Engineer Lead", pt: "Software Engineer Lead" },
        start: "2022-06",
        end: "2025-03",
        body: {
          en: "After QuintoAndar acquired ATTA, I took on management while still working hands-on with Santander, Itaú and Bradesco on the mortgage credit integrations.",
          pt: "Depois que o QuintoAndar adquiriu a ATTA, assumi gestão e continuei atuando direto com Santander, Itaú e Bradesco nas integrações de crédito imobiliário.",
        },
      },
    ],
  },
  {
    name: "ATTA",
    link: "https://atta.com.vc",
    roles: [
      {
        title: { en: "Engineering Lead", pt: "Engineering Lead" },
        start: "2022-06",
        end: "2025-02",
        body: {
          en: "Promoted to lead after the modernization below.",
          pt: "Promovido a lead depois da modernização abaixo.",
        },
      },
      {
        title: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
        start: "2020-01",
        end: "2022-07",
        body: {
          en: "Broke an ASP.NET MVC monolith into microservices on .NET Core with a Vue SPA. Set up CI/CD, Git Flow and engineering standards, brought in AWS SQS for async processing, and trained a team of 13+ developers on the new stack.",
          pt: "Quebrei um monolito ASP.NET MVC em microsserviços com .NET Core e SPA em Vue. Montei CI/CD, Git Flow e padrões de engenharia, trouxe AWS SQS para processamento assíncrono e treinei um time de 13+ devs na nova stack.",
        },
      },
    ],
  },
  {
    name: "ProRadis",
    link: "https://www.proradis.com.br",
    roles: [
      {
        title: {
          en: "Senior Developer Analyst",
          pt: "Analista Desenvolvedor Sênior",
        },
        start: "2018-05",
        end: "2020-01",
        body: {
          en: "Systems for medical and dental clinics. Built telerradiologia.co on .NET Core, Vue and MySQL.",
          pt: "Sistemas para clínicas médicas e odontológicas. Desenvolvi o telerradiologia.co em .NET Core, Vue e MySQL.",
        },
      },
    ],
  },
  {
    name: "epico.digital",
    roles: [
      {
        title: { en: "Web Developer", pt: "Desenvolvedor Web" },
        start: "2017-10",
        end: "2018-05",
        body: {
          en: "Digital studio for ad agencies and major brands. Node.js, Angular and Oracle.",
          pt: "Estúdio digital para agências e grandes marcas. Node.js, Angular e Oracle.",
        },
      },
    ],
  },
  {
    name: "Universidade Santa Cecília",
    link: "https://www.unisanta.br",
    roles: [
      {
        title: { en: "Web Developer Analyst", pt: "Analista Desenvolvedor Web" },
        start: "2009-07",
        end: "2017-10",
        body: {
          en: "Institutional systems in C# and Angular: the university portal, event portals, the UNISANTA Games system, Itaú boleto automation and TOTVS ERP integration.",
          pt: "Sistemas institucionais em C# e Angular: portal da universidade, portais de eventos, sistema dos Jogos UNISANTA, automação de boletos com o Itaú e integração com o ERP TOTVS.",
        },
      },
    ],
  },
];

export const education = {
  en: "B.Sc. Information Systems, Universidade Santa Cecília (2012–2015)",
  pt: "Sistemas de Informação, Universidade Santa Cecília (2012–2015)",
};

export const studio = {
  link: "https://blackstudio.dev",
  intro: {
    en: "My independent game studio. Small, original games for web, iOS and Android, made in Brazil.",
    pt: "Meu estúdio independente de jogos. Jogos originais e pequenos para web, iOS e Android, feitos no Brasil.",
  },
  games: [
    {
      name: "Ignite",
      link: "https://playignite.gg",
      logo: "/images/blackstudio/ignite-logo.png",
      body: {
        en: "Four players, one grid, three minutes. Drop a bomb, crack the bricks open, grab what falls out, be the one still standing.",
        pt: "Quatro jogadores, uma grade, três minutos. Solta a bomba, abre o tijolo, pega o que cai e seja o único de pé.",
      },
    },
    {
      name: "OrbitWars",
      link: "https://blackstudio.dev/orbitwars/",
      logo: "/images/blackstudio/orbitwars-logo.svg",
      body: {
        en: "Asynchronous space strategy. Claim systems, mine deuterium, send fleets that keep flying while you sleep. Same name as my 2012 game.",
        pt: "Estratégia espacial assíncrona. Ocupe sistemas, minere deutério, mande frota que voa enquanto você dorme. Mesmo nome do meu jogo de 2012.",
      },
    },
    {
      name: "Cucarank",
      link: "https://blackstudio.dev/cucarank/",
      logo: "/images/blackstudio/cucarank-logo.svg",
      body: {
        en: "A hub of quick logic games with daily rounds and weekly rankings.",
        pt: "Um hub de jogos de lógica rápidos, com rodadas diárias e ranking semanal.",
      },
    },
  ],
};

export const offTheClock: Text[] = [
  {
    en: "My first project was Gamenix, one account across several games. Then I made mods and hotfixes for 2moons, an open-source OGame clone, and built my own: OrbitWars peaked at 52 players online and 1,000+ accounts before it closed in 2012.",
    pt: "Meu primeiro projeto foi o Gamenix, uma conta para vários jogos. Depois fiz mods e hotfixes no 2moons, um clone open source do OGame, e criei o meu: o OrbitWars chegou a 52 jogadores online e mais de 1.000 contas antes de fechar em 2012.",
  },
  {
    en: "Away from the keyboard: certified diver, photographer, and a sim fan, mostly racing and flight.",
    pt: "Longe do teclado: mergulhador certificado, fotógrafo e fã de simulador, principalmente corrida e aviação.",
  },
];
