/** Conteúdo do portfólio. Edite seus links e dados aqui. */

export type Lang = 'pt' | 'en'
export type Localized = Record<Lang, string>
export type YearMonth = [number, number]

export interface Section {
  id: string
  label: Localized
}
export interface Layer {
  id: string
  name: Localized
  desc: Localized
}
export interface Tech {
  id: string
  name: string
  layer: string
  deepening?: boolean
  related?: string[]
  desc: Localized
  practice?: Localized
}
export interface Role {
  title: Localized
  short: Localized
  start: YearMonth
  end: YearMonth | null
  mode: Localized
  skills: string[]
}
export interface Project {
  id: string
  cover: string
  url: string
  name: Localized
  live?: boolean
  status?: Localized
  desc: Localized
  stack: string[]
  /** Prints reais do projeto (arquivos em public/). Sem prints, a prévia mostra "em desenvolvimento". */
  screens?: { src: string; title: Localized }[]
}

// Seus links
export const contact = {
  email: 'agpfdevfull1328@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrewgpsilva/',
  github: 'https://github.com/AndrewGPFranco',
  cv: '', // link do PDF; vazio = botões de currículo bloqueados
  photo: import.meta.env.BASE_URL + 'perfil-rosto.jpg', // recorte 4:5 (desktop)
  photoSquare: import.meta.env.BASE_URL + 'perfil-rosto-quadrado.jpg', // recorte quadrado (celular)
};

export const sections: Section[] = [
  { id: 'trajetoria', label: { pt: 'Trajetória', en: 'Career' } },
  { id: 'projetos',   label: { pt: 'Projetos',   en: 'Projects' } },
  { id: 'stack',      label: { pt: 'Stack',      en: 'Stack' } },
];

export const layers: Layer[] = [
  { id: 'ui',    name: { pt: 'Interface', en: 'Interface' },   desc: { pt: 'O que o usuário vê e usa.', en: 'What the user sees and uses.' } },
  { id: 'svc',   name: { pt: 'Serviços', en: 'Services' },     desc: { pt: 'APIs e regra de negócio. Java na maior parte, Go nos serviços menores.', en: 'APIs and business rules. Mostly Java, Go for the smaller services.' } },
  { id: 'msg',   name: { pt: 'Mensageria', en: 'Messaging' },  desc: { pt: 'Comunicação assíncrona entre serviços.', en: 'Async communication between services.' } },
  { id: 'cache', name: { pt: 'Cache', en: 'Caching' },         desc: { pt: 'Pra não ir no banco toda hora.', en: 'So you don’t hit the database every time.' } },
  { id: 'data',  name: { pt: 'Dados', en: 'Data' },            desc: { pt: 'Onde os dados ficam guardados.', en: 'Where the data is stored.' } },
  { id: 'plat',  name: { pt: 'Plataforma', en: 'Platform' },   desc: { pt: 'Build, deploy e onde as aplicações rodam.', en: 'Build, deploy and where the apps run.' } },
  { id: 'qa',    name: { pt: 'Automação', en: 'Automation' },  desc: { pt: 'Automação de processos no navegador e testes end-to-end.', en: 'Browser process automation and end-to-end tests.' } },
];

export const techs: Tech[] = [
  { id: 'vue', name: 'Vue.js', layer: 'ui', related: ['ts', 'nuxt', 'playwright'],
    desc: { pt: 'Meu framework de front. Uso com Composition API, quase sempre com backend em Spring.', en: 'My front-end framework. I use it with the Composition API, almost always with a Spring back end.' } },
  { id: 'ts', name: 'TypeScript', layer: 'ui', related: ['vue', 'nuxt'],
    desc: { pt: 'Uso junto com o Vue pra ter tipagem no front.', en: 'I use it with Vue to get types on the front end.' } },
  { id: 'nuxt', name: 'Nuxt', layer: 'ui', related: ['vue', 'ts'],
    desc: { pt: 'Quando o projeto em Vue precisa de SSR ou SEO.', en: 'For when a Vue project needs SSR or SEO.' } },
  { id: 'java', name: 'Java', layer: 'svc', related: ['spring', 'quarkus'],
    desc: { pt: 'Minha linguagem principal, é com ela que trabalho no dia a dia.', en: 'My main language. It’s what I work with every day.' } },
  { id: 'spring', name: 'Spring', layer: 'svc', related: ['java', 'postgres', 'kafka', 'redis'],
    desc: { pt: 'Uso em quase todo backend: APIs REST, segurança e acesso a banco.', en: 'I use it in almost every back end: REST APIs, security and database access.' },
    practice: { pt: 'Fiz a autenticação e o controle de sessão de uma plataforma de compliance.', en: 'I built the authentication and session handling for a compliance platform.' } },
  { id: 'quarkus', name: 'Quarkus', layer: 'svc', related: ['java', 'k8s', 'docker'],
    desc: { pt: 'Java com startup rápido e pouco consumo de memória. Uso quando a aplicação vai rodar em container.', en: 'Java with fast startup and low memory use. I go for it when the app runs in a container.' } },
  { id: 'go', name: 'Go', layer: 'svc', deepening: true, related: ['postgres', 'docker'],
    desc: { pt: 'Estou estudando. Curto o fato de gerar um binário só e pronto. Uso sqlx pra acessar o banco.', en: 'I’m studying it. I like that it builds into a single binary. I use sqlx for database access.' } },
  { id: 'rabbit', name: 'RabbitMQ', layer: 'msg', related: ['kafka', 'spring'],
    desc: { pt: 'Filas de mensagens entre serviços.', en: 'Message queues between services.' } },
  { id: 'kafka', name: 'Apache Kafka', layer: 'msg', related: ['rabbit', 'spring'],
    desc: { pt: 'Streaming de eventos quando o volume é alto.', en: 'Event streaming when the volume is high.' } },
  { id: 'redis', name: 'Redis', layer: 'cache', related: ['ignite', 'spring'],
    desc: { pt: 'Cache e sessão.', en: 'Caching and sessions.' } },
  { id: 'ignite', name: 'Apache Ignite', layer: 'cache', related: ['redis', 'arcadedb'],
    desc: { pt: 'Cache distribuído rodando em cluster.', en: 'Distributed cache running on a cluster.' },
    practice: { pt: 'Cuido de um cluster com 4 nós, desde diagnóstico e memória até reset quando dá problema.', en: 'I look after a 4-node cluster, from diagnostics and memory to resets when something breaks.' } },
  { id: 'postgres', name: 'PostgreSQL', layer: 'data', related: ['spring', 'arcadedb'],
    desc: { pt: 'Meu banco relacional padrão.', en: 'My go-to relational database.' } },
  { id: 'arcadedb', name: 'ArcadeDB', layer: 'data', related: ['ignite', 'postgres'],
    desc: { pt: 'Banco multimodelo (grafo, documento e chave-valor).', en: 'Multi-model database (graph, document and key-value).' },
    practice: { pt: 'Fiz um pipeline que leva dezenas de milhões de registros do ArcadeDB pro Ignite.', en: 'I built a pipeline that moves tens of millions of records from ArcadeDB to Ignite.' } },
  { id: 'docker', name: 'Docker', layer: 'plat', related: ['k8s', 'cicd'],
    desc: { pt: 'Tudo que eu subo roda em container.', en: 'Everything I ship runs in a container.' } },
  { id: 'k8s', name: 'Kubernetes', layer: 'plat', related: ['docker', 'minikube', 'cicd'],
    desc: { pt: 'Deploy e escala dos containers em produção.', en: 'Deploying and scaling containers in production.' } },
  { id: 'minikube', name: 'Minikube', layer: 'plat', related: ['k8s', 'docker'],
    desc: { pt: 'Kubernetes local pra testar antes de subir.', en: 'Local Kubernetes to test before deploying.' } },
  { id: 'cicd', name: 'CI/CD', layer: 'plat', related: ['docker', 'k8s', 'playwright'],
    desc: { pt: 'Pipeline de build, teste e deploy automático.', en: 'Automated build, test and deploy pipeline.' } },
  { id: 'playwright', name: 'Playwright', layer: 'qa', related: ['java', 'spring', 'cicd'],
    desc: { pt: 'Uso em Java, mais pra automatizar processos no navegador que antes eram feitos na mão. Também uso pra teste.', en: 'I use it with Java, mostly to automate browser processes that used to be done by hand. I also use it for testing.' },
    practice: { pt: 'Automatizei a emissão de certificados de conformidade. Tem máquina de estados pro fluxo, detecção de downloads em paralelo e controle de threads.', en: 'I automated the issuing of compliance certificates. It has a state machine for the flow, parallel download detection and thread control.' } },
];

export const roles: Role[] = [
  { title: { pt: 'Estágio, Desenvolvedor Full-stack', en: 'Full-stack Developer Intern' }, short: { pt: 'Estágio', en: 'Intern' }, start: [2024, 3], end: [2025, 1], mode: { pt: 'híbrido', en: 'hybrid' }, skills: ['java', 'vue'] },
  { title: { pt: 'Programador', en: 'Programmer' }, short: { pt: 'Programador', en: 'Programmer' }, start: [2025, 2], end: [2026, 1], mode: { pt: 'remoto', en: 'remote' }, skills: ['java', 'vue'] },
  { title: { pt: 'Analista de Sistemas Jr', en: 'Junior Systems Analyst' }, short: { pt: 'Analista Jr', en: 'Jr Analyst' }, start: [2026, 1], end: null, mode: { pt: 'remoto', en: 'remote' }, skills: ['java'] },
];

export const projects: Project[] = [
  { id: 'manga', cover: 'manga', url: 'leitor.app/biblioteca', name: { pt: 'Leitor de mangás', en: 'Manga reader' },
    desc: { pt: 'Um app pra ler mangá, capítulo por capítulo.', en: 'An app to read manga, chapter by chapter.' },
    stack: ['java', 'spring', 'vue', 'ts', 'tailwind', 'postgres', 'rabbit', 'flyway', 'docker'] },
  { id: 'finance', cover: 'finance', url: 'financehub.app/painel', name: { pt: 'FinanceHub', en: 'FinanceHub' }, live: true,
    status: { pt: 'Em produção', en: 'In production' },
    desc: { pt: 'Controle das minhas finanças pessoais. Já está rodando em produção.', en: 'Keeps track of my personal finances. It’s already running in production.' },
    stack: ['java', 'spring', 'thymeleaf', 'postgres', 'flyway', 'docker'] },
  { id: 'work', cover: 'work', url: 'workhub.app/semana', name: { pt: 'Workhub', en: 'Workhub' },
    status: { pt: 'Em evolução', en: 'In progress' },
    desc: { pt: 'Uso no dia a dia pra anotar coisas e organizar tarefas. A parte de planejamento ainda está em construção.', en: 'I use it every day to take notes and organize tasks. The planning part is still being built.' },
    stack: ['java', 'spring', 'vue', 'ts', 'primevue', 'postgres', 'redis', 'flyway', 'docker'] },
];


// Nomes de tecnologias usadas em projetos que não aparecem na seção Stack.
export const extraNames: Record<string, string> = {
  thymeleaf: 'Thymeleaf',
  tailwind: 'Tailwind CSS',
  primevue: 'PrimeVue',
  flyway: 'Flyway',
}
