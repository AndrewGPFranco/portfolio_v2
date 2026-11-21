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
  /** Por que o projeto existe, em uma ou duas frases. */
  context: Localized
  /** Números/fatos curtos que aparecem como chips no topo da prévia. */
  facts: Localized[]
  /** Fluxos da arquitetura, desenhados como diagrama na prévia. */
  flows: Flow[]
  /** Recursos que mais valem destacar. */
  highlights: Highlight[]
  /** Prints reais do projeto (arquivos em public/). Opcional. */
  screens?: { src: string; title: Localized }[]
  /** Clipe curto (5–8 s, sem som, em loop) mostrando uma interação. Opcional. */
  clip?: { src: string; poster?: string; title: Localized }
}
export interface FlowNode {
  name: Localized | string
  note?: Localized
  /** Destaca o nó principal do fluxo. */
  key?: boolean
}
export interface Flow {
  title: Localized
  nodes: FlowNode[]
}
export interface Highlight {
  title: Localized
  text: Localized
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
    desc: { pt: 'Um app pra ler mangá e ver anime, com upload de capítulo, histórico de leitura e notificação em tempo real.', en: 'An app to read manga and watch anime, with chapter uploads, reading history and real-time notifications.' },
    stack: ['java', 'spring', 'vue', 'ts', 'tailwind', 'postgres', 'rabbit', 'flyway', 'docker'],
    context: {
      pt: 'Comecei em 2024 porque queria um leitor de mangá do meu jeito, só com os que eu curto. Acabou virando o projeto onde eu mais testo coisa nova: hoje tem mangá, anime, histórico de leitura e notificação em tempo real.',
      en: 'I started it in 2024 because I wanted a manga reader my way, with only the series I like. It became the project where I try out new things the most: today it has manga, anime, reading history and real-time notifications.',
    },
    facts: [
      { pt: 'Desde jun/2024', en: 'Since Jun 2024' },
      { pt: '+670 commits', en: '670+ commits' },
      { pt: 'Ports & adapters', en: 'Ports & adapters' },
      { pt: 'Testes de integração', en: 'Integration tests' },
    ],
    flows: [
      { title: { pt: 'Upload de capítulo', en: 'Chapter upload' }, nodes: [
        { name: { pt: 'PDF ou ZIP', en: 'PDF or ZIP' }, note: { pt: 'até 500 MB', en: 'up to 500 MB' } },
        { name: { pt: 'Job de capítulo', en: 'Chapter job' }, note: { pt: 'PDFBox → WebP', en: 'PDFBox → WebP' }, key: true },
        { name: 'PostgreSQL', note: { pt: 'páginas em lote', en: 'pages in batches' } },
      ] },
      { title: { pt: 'Capítulo novo', en: 'New chapter' }, nodes: [
        { name: { pt: 'Job concluído', en: 'Job done' } },
        { name: 'RabbitMQ', note: { pt: 'exchange + fila', en: 'exchange + queue' }, key: true },
        { name: 'SSE', note: { pt: 'push pro navegador', en: 'push to the browser' } },
        { name: { pt: 'Leitor (Vue)', en: 'Reader (Vue)' }, note: { pt: 'notificação na hora', en: 'instant notification' } },
      ] },
    ],
    highlights: [
      { title: { pt: 'Upload de capítulo em PDF ou ZIP', en: 'Chapter upload as PDF or ZIP' },
        text: { pt: 'Um job pega o arquivo, renderiza cada página do PDF com PDFBox a 300 DPI (ou extrai as imagens do ZIP), converte pra WebP e salva em lotes de 100. Roda numa transação só, então se der erro no meio nada fica pela metade. O progresso aparece ao vivo na tela via SSE.', en: 'A job takes the file, renders each PDF page with PDFBox at 300 DPI (or pulls the images out of the ZIP), converts them to WebP and saves them in batches of 100. It runs in a single transaction, so if something fails halfway nothing is left half-done. Progress shows up live on screen over SSE.' } },
      { title: { pt: 'Notificação em tempo real com RabbitMQ', en: 'Real-time notifications with RabbitMQ' },
        text: { pt: 'Quando sai capítulo ou episódio novo, o backend publica uma mensagem no RabbitMQ. O consumidor repassa via SSE pra todo mundo que está com o app aberto, sem polling. A notificação também fica salva, e o usuário recebe as últimas 10.', en: 'When a new chapter or episode comes out, the back end publishes a message to RabbitMQ. The consumer forwards it over SSE to everyone with the app open, no polling. The notification is also stored, and users get the latest 10.' } },
      { title: { pt: 'Histórico de leitura como linha do tempo', en: 'Reading history as a timeline' },
        text: { pt: 'Toda vez que você abre um capítulo, isso vira um registro com o tempo que passou lendo. Dá pra filtrar por dia ou por intervalo, e reescrevi a query pra não cair em N+1.', en: 'Every time you open a chapter it becomes a record with how long you spent reading. You can filter by day or date range, and I rewrote the query to avoid N+1.' } },
      { title: { pt: 'Um leitor que dá gosto de usar', en: 'A reader that’s nice to use' },
        text: { pt: 'Página dupla, direção de leitura (estilo japonês ou ocidental), tela cheia, atalhos de teclado e “continuar de onde parou”. Quando você termina um capítulo, o progresso da sua lista atualiza sozinho.', en: 'Double-page spreads, reading direction (Japanese or Western), fullscreen, keyboard shortcuts and “pick up where you left off”. When you finish a chapter, your list progress updates on its own.' } },
    ] },
  { id: 'finance', cover: 'finance', url: 'financehub.app/painel', name: { pt: 'FinanceHub', en: 'FinanceHub' }, live: true,
    status: { pt: 'Em produção', en: 'In production' },
    desc: { pt: 'Controle das minhas finanças pessoais, com contas compartilhadas. Já está rodando em produção.', en: 'Keeps track of my personal finances, with shared accounts. It’s already running in production.' },
    stack: ['java', 'spring', 'thymeleaf', 'postgres', 'flyway', 'docker'],
    context: {
      pt: 'Eu precisava separar as contas de casa das minhas e dividir algumas com outra pessoa. Planilha não dava conta disso, então fiz o meu. Está em produção e eu uso todo mês.',
      en: 'I needed to keep household bills apart from my own and split some of them with someone else. A spreadsheet couldn’t handle that, so I built my own. It’s in production and I use it every month.',
    },
    facts: [
      { pt: 'Em produção', en: 'In production' },
      { pt: 'Java 25', en: 'Java 25' },
      { pt: 'SSR com Thymeleaf', en: 'SSR with Thymeleaf' },
      { pt: 'Deploy automático', en: 'Automated deploy' },
    ],
    flows: [
      { title: { pt: 'Requisição', en: 'Request' }, nodes: [
        { name: { pt: 'Navegador', en: 'Browser' } },
        { name: 'Spring Security', note: { pt: 'permissão por subdomínio', en: 'per-subdomain permissions' }, key: true },
        { name: 'Spring MVC', note: { pt: 'renderiza Thymeleaf', en: 'renders Thymeleaf' } },
        { name: 'PostgreSQL', note: { pt: 'migrations com Flyway', en: 'Flyway migrations' } },
      ] },
      { title: { pt: 'Deploy', en: 'Deploy' }, nodes: [
        { name: { pt: 'Push na main', en: 'Push to main' } },
        { name: 'GitHub Actions', note: { pt: 'build com Java 25', en: 'Java 25 build' }, key: true },
        { name: 'VPS', note: { pt: 'troca o JAR via SSH', en: 'swaps the JAR over SSH' } },
        { name: 'systemd', note: { pt: 'confere se subiu', en: 'checks it came up' } },
      ] },
    ],
    highlights: [
      { title: { pt: 'Subdomínios compartilhados', en: 'Shared subdomains' },
        text: { pt: 'Cada contexto (casa, pessoal…) é um subdomínio. Dá pra convidar outra pessoa, que entra com uma permissão definida, e as queries já filtram pra ninguém acessar despesa que não pode ver.', en: 'Each context (home, personal…) is a subdomain. You can invite someone, who joins with a set permission, and the queries filter things so nobody reaches an expense they shouldn’t see.' } },
      { title: { pt: 'Agregar um subdomínio no outro', en: 'Nesting one subdomain in another' },
        text: { pt: 'Dá pra vincular um subdomínio dentro de outro, e os saldos do dashboard consolidam tudo. Tem validação pra impedir associação circular.', en: 'You can link one subdomain inside another and the dashboard balances roll everything up. There’s a check that blocks circular links.' } },
      { title: { pt: 'Carteira por mês e despesa recorrente', en: 'Monthly wallets and recurring expenses' },
        text: { pt: 'Cada mês tem a sua carteira, que dá pra reaproveitar no mês seguinte. Despesa fixa é configurada uma vez e se repete, e dá pra marcar tudo como pago de uma vez.', en: 'Each month has its own wallet, which you can carry over to the next one. Fixed expenses are set up once and repeat, and you can mark everything as paid in one go.' } },
      { title: { pt: 'Deploy automático na VPS', en: 'Automated deploy to a VPS' },
        text: { pt: 'Push na main e o GitHub Actions builda o JAR, manda pra VPS por SSH, troca pelo novo mantendo o anterior de backup e confere se o service do systemd subiu. Se não subiu, o pipeline falha.', en: 'Push to main and GitHub Actions builds the JAR, ships it to the VPS over SSH, swaps it in while keeping the old one as a backup, and checks the systemd service came up. If it didn’t, the pipeline fails.' } },
    ] },
  { id: 'work', cover: 'work', url: 'workhub.app/semana', name: { pt: 'Workhub', en: 'Workhub' },
    status: { pt: 'Em evolução', en: 'In progress' },
    desc: { pt: 'Uso no dia a dia pra organizar demandas, sprints e anotações, e agora pra subir e derrubar meus projetos locais por scripts, direto da tela.', en: 'I use it every day to organize tasks, sprints and notes, and now to start and stop my local projects through scripts, right from the UI.' },
    stack: ['java', 'spring', 'vue', 'ts', 'primevue', 'postgres', 'redis', 'flyway', 'docker'],
    context: {
      pt: 'Fiz pra organizar meu dia a dia de dev: demandas, sprints, daily, feedback e anotações num lugar só. O recurso mais novo são os scripts: cadastro o comando de subida de cada projeto e dou start/stop direto pela tela, acompanhando o log.',
      en: 'I built it to organize my day-to-day as a dev: tasks, sprints, dailies, feedback and notes in one place. The newest feature is scripts: I save each project’s startup command and start/stop it right from the UI while following the log.',
    },
    facts: [
      { pt: 'Start/stop de projetos', en: 'Project start/stop' },
      { pt: '2 serviços Spring', en: '2 Spring services' },
      { pt: 'AOP', en: 'AOP' },
      { pt: 'Redis', en: 'Redis' },
      { pt: 'Supabase Storage', en: 'Supabase Storage' },
    ],
    flows: [
      { title: { pt: 'Scripts dos projetos', en: 'Project scripts' }, nodes: [
        { name: { pt: 'Tela de projetos', en: 'Projects screen' }, note: { pt: 'start, stop e log', en: 'start, stop and log' } },
        { name: 'Plataforma', note: { pt: 'executa os scripts', en: 'runs the scripts' }, key: true },
        { name: 'Redis', note: { pt: 'PID dos processos', en: 'process PIDs' } },
        { name: { pt: 'Script rodando', en: 'Running script' }, note: { pt: 'grupo próprio + arquivo de log', en: 'own group + log file' } },
      ] },
      { title: { pt: 'Dia a dia', en: 'Day to day' }, nodes: [
        { name: 'Vue + PrimeVue' },
        { name: 'API Workhub', note: { pt: '@PlanResource (AOP)', en: '@PlanResource (AOP)' }, key: true },
        { name: 'PostgreSQL', note: { pt: 'demandas, sprints, notas', en: 'tasks, sprints, notes' } },
        { name: 'Supabase', note: { pt: 'arquivos da biblioteca', en: 'library files' } },
      ] },
    ],
    highlights: [
      { title: { pt: 'Scripts pra subir os projetos com um clique', en: 'One-click scripts to start projects' },
        text: { pt: 'Cada projeto tem os seus scripts de startup (o comando e a pasta onde roda). Na tela é só dar start ou stop e acompanhar o log, sem abrir terminal. Quem executa é a Plataforma, um microserviço à parte: roda cada script num grupo de processos próprio, barra subir o mesmo duas vezes e guarda PID e horário de início no Redis. Se ela cair, os projetos seguem rodando e, quando volta, ela retoma o monitoramento.', en: 'Each project has its own startup scripts (the command and the folder it runs in). In the UI you just hit start or stop and follow the log, no terminal needed. A separate microservice, Plataforma, runs them: each script gets its own process group, the same one can’t start twice, and the PID and start time go to Redis. If it goes down, the projects keep running and it resumes monitoring when it comes back.' } },
      { title: { pt: 'Notas com editor de verdade', en: 'Notes with a real editor' },
        text: { pt: 'Editor com Tiptap: cola markdown direto, tem controle de tabela, bloco de código com botão de copiar e exporta a nota em .md. As notas podem ficar soltas ou ligadas a um subdomínio, com paginação.', en: 'A Tiptap editor: paste markdown straight in, table controls, code blocks with a copy button, and export to .md. Notes can stand alone or belong to a subdomain, with pagination.' } },
      { title: { pt: 'Biblioteca de arquivos no Supabase Storage', en: 'File library on Supabase Storage' },
        text: { pt: 'Upload pro Supabase Storage com os metadados separados no Postgres e limite de 50 MB por usuário, validado antes de subir. Dá pra renomear e baixar os arquivos depois.', en: 'Uploads go to Supabase Storage with metadata kept separately in Postgres and a 50 MB per-user limit checked before upload. Files can be renamed and downloaded later.' } },
      { title: { pt: 'Recursos por plano numa anotação', en: 'Plan-based features in one annotation' },
        text: { pt: 'Criei a anotação @PlanResource com um aspecto (AOP) que confere, antes do método rodar, se o usuário tem aquele recurso no plano. Liberar ou bloquear uma feature virou uma linha no controller.', en: 'I made a @PlanResource annotation backed by an aspect (AOP) that checks, before the method runs, whether the user’s plan includes that feature. Turning a feature on or off is now one line in the controller.' } },
    ] },
];


// Nomes de tecnologias usadas em projetos que não aparecem na seção Stack.
export const extraNames: Record<string, string> = {
  thymeleaf: 'Thymeleaf',
  tailwind: 'Tailwind CSS',
  primevue: 'PrimeVue',
  flyway: 'Flyway',
}
