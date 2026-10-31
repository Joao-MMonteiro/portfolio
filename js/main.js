// Menu mobile + animações discretas de entrada + alternância PT/EN.
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    nav.classList.toggle("is-open", !isOpen);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("is-open");
  }));
}

const translations = {
  "Pular para o conteúdo":"Skip to content", "Abrir menu":"Open menu", "Fechar menu":"Close menu",
  "Projetos":"Work", "Sobre":"About", "Contato":"Contact", "Vamos conversar":"Let's talk",
  "Product Designer · São Paulo, Brasil":"Product Designer · São Paulo, Brazil",
  "Transformo desafios complexos em ":"I turn complex challenges into ",
  "experiências digitais claras.":"clear digital experiences.",
  "Product Designer com 8 anos de experiência criando produtos digitais de ponta a ponta — conectando necessidades reais das pessoas aos objetivos do negócio.":"Product Designer with 8 years of experience creating end-to-end digital products — connecting people's real needs with business goals.",
  "Conheça meu trabalho ":"Explore my work ", "Trabalho selecionado · 2025—2026":"Selected work · 2025—2026",
  "Projetos em destaque":"Featured projects", "Uma seleção de experiências digitais e identidades criadas com intenção.":"A selection of digital experiences and brand identities crafted with purpose.",
  "Ver projeto ":"View project ", "Website":"Website", "App":"App", "Brand Guide":"Brand Guidelines",
  "Landing page":"Landing page", "Estudo de caso":"Case study", "Identidade visual":"Visual identity",
  "Um pouco sobre mim":"A little about me", "Design com intenção.":"Design with intention.",
  "Impacto com propósito.":"Impact with purpose.",
  "Como Product Designer, atuo na interseção entre estratégia, experiência e inovação. Minha prática reúne pesquisa, UX, UI, estratégia de produto, métricas e Design Systems para transformar desafios complexos em soluções digitais úteis, claras e escaláveis.":"As a Product Designer, I work at the intersection of strategy, experience, and innovation. My practice brings together research, UX, UI, product strategy, metrics, and Design Systems to turn complex challenges into useful, clear, and scalable digital solutions.",
  "Acredito que o bom design vai além da estética: ele cria valor percebido para as pessoas e resultados relevantes para o negócio. Por isso, trabalho de ponta a ponta, equilibrando necessidades dos usuários, contexto e objetivos de cada projeto.":"I believe good design goes beyond aesthetics: it creates meaningful value for people and relevant outcomes for businesses. That's why I work end to end, balancing user needs, context, and each project's goals.",
  "Product Design":"Product Design", "UX & UI":"UX & UI", "Design Systems":"Design Systems", "Branding":"Branding",
  "IA aplicada ao design":"AI applied to design", "Conecte-se, compartilhe uma ideia ou mande um oi.":"Get in touch, share an idea, or just say hello.",
  "Enviar um e-mail ":"Send an email ", "Conectar no LinkedIn ":"Connect on LinkedIn ",
  "Todos os projetos":"All projects", "Visão geral":"Overview", "Sobre o projeto":"About the project",
  "Cliente":"Client", "Setor":"Industry", "Tipo":"Type", "Ano":"Year", "Galeria":"Gallery",
  "Explorando as telas":"Exploring the screens", "Gostou do que viu?":"Like what you see?",
  "Voltar para todos os projetos":"Back to all projects", "Documento completo":"Full document",
  "Brand guide completo":"Complete brand guidelines", "Explore as 22 páginas do guia de identidade visual.":"Explore all 22 pages of the visual identity guidelines.",
  "Abrir PDF ":"Open PDF ", "Energia solar":"Solar energy", "Banco":"Bank",
  "Projeto 01 · 2025 · Energia solar":"Project 01 · 2025 · Solar energy",
  "Uma experiência digital renovada para aproximar energia solar e tecnologia das pessoas.":"A refreshed digital experience bringing solar energy and technology closer to people.",
  "A modernização visual e estratégica do website buscou traduzir a expertise da EletroBidu em uma experiência mais atual, confiável e acessível — conectando a marca ao universo tecnológico sem perder a proximidade com o usuário.":"The website's visual and strategic refresh aimed to translate EletroBidu's expertise into a more modern, trustworthy, and accessible experience — connecting the brand with technology while keeping the user experience approachable.",
  "Projeto 02 · 2026 · Wellness":"Project 02 · 2026 · Wellness",
  "Uma experiência digital de bem-estar com foco em clareza, confiança e conversão.":"A wellness-focused digital experience built around clarity, trust, and conversion.",
  "Criação de uma landing page do zero para uma marca de suplementos voltada a pessoas com mais de 40 anos. O projeto combinou design e desenvolvimento em HTML/CSS para apresentar a proposta da marca, organizar seus pilares e criar uma experiência responsiva orientada à captação de contatos.":"A landing page created from scratch for a supplement brand aimed at people over 40. The project combined design and HTML/CSS development to communicate the brand proposition, organize its core pillars, and create a responsive experience focused on lead generation.",
  "Projeto 03 · 2025 · Banco":"Project 03 · 2025 · Banking",
  "Estudo de caso conceitual para aprimorar o design thinking e explorar a criação de um app moderno e funcional.":"A conceptual case study to strengthen design thinking and explore the creation of a modern, functional banking app.",
  "Estudo de caso desenvolvido para aprimorar o pensamento em design (design thinking) e explorar o processo criativo por trás de um aplicativo bancário moderno e funcional. A proposta reúne telas de acesso, perfil, cartões, extrato e transferências em uma experiência digital coesa.":"A case study created to strengthen design thinking and explore the creative process behind a modern, functional banking app. The concept brings together login, profile, cards, statements, and transfers in a cohesive digital experience.",
  "Projeto 04 · 2026 · Wellness":"Project 04 · 2026 · Wellness",
  "Uma identidade elegante e natural, criada para conversar com pessoas 40+, especialmente mães e mulheres maduras que valorizam escolhas conscientes.":"An elegant, nature-inspired identity created for people aged 40+, especially mothers and mature women who value conscious choices.",
  "Criação de uma identidade de marca do zero para uma linha de suplementação natural voltada a pessoas com mais de 40 anos. A direção visual equilibra elegância, referências naturais e uma comunicação acolhedora, pensada especialmente para mães e mulheres maduras que fazem escolhas de consumo conscientes. O brand guide organiza os elementos essenciais para manter consistência na aplicação da marca.":"A brand identity created from scratch for a natural supplement line aimed at people over 40. The visual direction balances elegance, natural references, and a welcoming tone, designed especially for mothers and mature women who make conscious purchasing decisions. The brand guidelines organize the essential elements to ensure consistent brand applications.",
  "Projeto 05 · 2026 · Software":"Project 05 · 2026 · Software",
  "Uma presença digital minimalista, tecnológica e intuitiva para uma plataforma de gestão jurídica.":"A minimalist, tech-forward, and intuitive digital presence for a legal practice management platform.",
  "Criação de um website para uma plataforma de gestão jurídica, desenvolvido para simplificar a rotina de escritórios de advocacia de todos os portes. Com uma abordagem minimalista, tecnológica e intuitiva, o projeto prioriza a clareza das informações e a facilidade de navegação, apresentando soluções práticas para os principais desafios da gestão jurídica.":"A website for a legal practice management platform, designed to simplify day-to-day work for law firms of every size. With a minimalist, technology-driven, and intuitive approach, the project prioritizes clear information and easy navigation while presenting practical solutions to key legal management challenges."
};

const attributeTranslations = {
  "Pular para o conteúdo":"Skip to content", "Abrir menu":"Open menu", "Fechar menu":"Close menu",
  "Navegação principal":"Main navigation", "João Monteiro, início":"João Monteiro, home", "Voltar ao início":"Back to home",
  "Ver projeto EletroBidu — Website":"View EletroBidu project — Website", "Ver projeto Hojji Nutri — Website":"View Hojji Nutri project — Website",
  "Ver projeto NovaBank — App":"View NovaBank project — App", "Ver projeto Hojji Nutri — Brand Guide":"View Hojji Nutri project — Brand Guidelines",
  "Ver projeto Callistra — Website":"View Callistra project — Website",
  "Website EletroBidu em um notebook, com interface escura e detalhes em laranja":"EletroBidu website on a laptop, featuring a dark interface with orange details",
  "Website Hojji Nutri em notebook, com identidade natural em tons de verde e bege":"Hojji Nutri website on a laptop, with a natural green and beige visual identity",
  "Mockup com telas do aplicativo NovaBank":"NovaBank app screen mockups", "Capa do brand guide Hojji Nutri com identidade natural e elegante":"Hojji Nutri brand guidelines cover with an elegant, nature-inspired identity",
  "Website Callistra em notebook com interface minimalista em azul e branco":"Callistra website on a laptop, with a minimalist blue and white interface",
  "Website EletroBidu em desktop":"EletroBidu website on desktop", "Tela mobile inicial do website EletroBidu":"EletroBidu website mobile home screen",
  "Tela mobile com benefícios e depoimentos da EletroBidu":"EletroBidu mobile screen featuring benefits and testimonials", "Tela mobile com garantias do serviço de energia solar":"Mobile screen featuring solar energy service guarantees",
  "Website Hojji Nutri em desktop":"Hojji Nutri website on desktop", "Tela mobile da Hojji Nutri com apresentação da marca e seus benefícios":"Hojji Nutri mobile screen introducing the brand and its benefits",
  "Tela mobile da Hojji Nutri apresentando os pilares do portfólio":"Hojji Nutri mobile screen presenting the brand's core pillars", "Tela mobile da loja virtual Hojji Nutri com produto em destaque":"Hojji Nutri online store mobile screen featuring a product",
  "Confirmação de transferência no aplicativo NovaBank":"Transfer confirmation in the NovaBank app", "Extrato e fluxo de caixa do NovaBank":"NovaBank statement and cash flow",
  "Área de cartões do NovaBank":"NovaBank cards section", "Transferência realizada com sucesso":"Transfer completed successfully", "Telas de login e perfil do aplicativo NovaBank":"NovaBank app login and profile screens",
  "Página de planos do software Callistra":"Callistra software pricing page", "Website Callistra apresentado em um notebook":"Callistra website displayed on a laptop", "Página inicial do software Callistra em notebook":"Callistra software homepage on a laptop"
};


// Guarda os textos originais para permitir alternar entre idiomas sem perder conteúdo.
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
const normalizedTranslations = new Map(
  Object.entries(translations).map(([source, target]) => [source.trim(), target])
);
const normalizedAttributeTranslations = new Map(
  Object.entries(attributeTranslations).map(([source, target]) => [source, target])
);

function applyLanguage(language) {
  const english = language === "en";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const trimmed = original.trim();
    if (!trimmed) return;

    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    const translated = normalizedTranslations.get(trimmed);
    node.nodeValue = english && translated
      ? leading + translated + trailing
      : original;
  });

  document.querySelectorAll("[alt], [aria-label]").forEach((el) => {
    ["alt", "aria-label"].forEach((attr) => {
      const currentValue = el.getAttribute(attr);
      if (currentValue === null) return;
      const key = `${attr}:${el.tagName}:${Array.from(el.attributes).map(a => `${a.name}=${a.value}`).join("|")}`;
      // Keep a stable original value per element/attribute.
      let saved = originalAttributes.get(el);
      if (!saved) {
        saved = {};
        originalAttributes.set(el, saved);
      }
      if (!(attr in saved)) saved[attr] = currentValue;
      const original = saved[attr];
      el.setAttribute(attr, english
        ? (normalizedAttributeTranslations.get(original) || original)
        : original);
    });
  });

  document.documentElement.lang = english ? "en" : "pt-BR";
  const toggle = document.querySelector("[data-language-toggle]");
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(english));
    toggle.setAttribute("aria-label", english ? "Switch to Portuguese" : "Switch to English");
    const current = toggle.querySelector(".language-current");
    const other = toggle.querySelector(".language-divider + span");
    if (current) current.textContent = english ? "EN" : "PT";
    if (other) other.textContent = english ? "PT" : "EN";
  }
  try { localStorage.setItem("portfolio-language", language); } catch (_) {}
}

// Inicializa o idioma salvo e conecta o botão PT / EN.
const languageToggle = document.querySelector("[data-language-toggle]");
let savedLanguage = "pt-BR";
try {
  savedLanguage = localStorage.getItem("portfolio-language") || "pt-BR";
} catch (_) {}
applyLanguage(savedLanguage === "en" ? "en" : "pt-BR");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "en" ? "pt-BR" : "en";
    applyLanguage(nextLanguage);
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); currentObserver.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else revealItems.forEach((item) => item.classList.add("is-visible"));
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
