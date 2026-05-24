export type Lang = "es" | "en";
export type T = { es: string; en: string };

export const tr = (text: T, lang: Lang): string => text[lang];

export const i18n = {
  nav: {
    agents: { es: "Agentes IA", en: "AI Agents" },
    services: { es: "Servicios", en: "Services" },
    industries: { es: "Industrias", en: "Industries" },
    howItWorks: { es: "Cómo funciona", en: "How It Works" },
    whyUs: { es: "Por qué nosotros", en: "Why Us" },
    contact: { es: "Contacto", en: "Contact" },
    cta: { es: "Solicitar Demo", en: "Request a Demo" },
  },

  hero: {
    badge: { es: "Corrientes, Argentina 🇦🇷", en: "Corrientes, Argentina 🇦🇷" },
    headline1: { es: "Tus Agentes de IA", en: "Your AI Agents" },
    headline2: { es: "Trabajan 24/7", en: "Work 24/7" },
    subhead: {
      es: "Automatiza llamadas, chat y captación de leads con agentes de inteligencia artificial que nunca descansan. Más clientes, menos trabajo manual.",
      en: "Automate calls, chat, and lead generation with AI agents that never stop working. More customers, less manual work.",
    },
    cta1: { es: "Solicitar Demo Gratuita", en: "Get a Free Demo" },
    cta2: { es: "Ver cómo funciona", en: "See How It Works" },
    stat1Value: { es: "24/7", en: "24/7" },
    stat1Label: { es: "Disponibilidad", en: "Availability" },
    stat2Value: { es: "3x", en: "3x" },
    stat2Label: { es: "Más leads calificados", en: "More qualified leads" },
    stat3Value: { es: "0%", en: "0%" },
    stat3Label: { es: "Llamadas perdidas", en: "Missed calls" },
  },

  agents: {
    label: { es: "Nuestros Agentes", en: "Our Agents" },
    headline: { es: "3 Agentes. Una Solución Completa.", en: "3 Agents. One Complete Solution." },
    subhead: {
      es: "Cada agente está diseñado para una tarea crítica de tu negocio. Juntos, automatizan todo tu ciclo de ventas y atención al cliente.",
      en: "Each agent is designed for a critical business task. Together, they automate your entire sales and customer service cycle.",
    },
    call: {
      tag: { es: "Agente de Llamadas", en: "Call Agent" },
      title: { es: "Llama, agenda y hace seguimiento sin que levantes el teléfono", en: "Calls, schedules, and follows up — without you lifting the phone" },
      description: {
        es: "Nuestro agente de voz atiende y realiza llamadas con conversación natural. Agenda citas, responde preguntas frecuentes y hace seguimiento a prospectos automáticamente.",
        en: "Our voice agent makes and receives calls with natural conversation. It schedules appointments, answers FAQs, and automatically follows up with prospects.",
      },
      features: [
        { es: "Atención y realización de llamadas 24/7", en: "24/7 inbound & outbound calls" },
        { es: "Agendamiento automático de citas", en: "Automatic appointment scheduling" },
        { es: "Seguimiento de prospectos", en: "Prospect follow-up" },
        { es: "Voz natural con IA avanzada", en: "Natural voice with advanced AI" },
        { es: "Resumen de llamadas en tiempo real", en: "Real-time call summaries" },
      ],
      cta: { es: "Ver demo de llamadas", en: "See call demo" },
    },
    chat: {
      tag: { es: "Agente de Chat", en: "Chat Agent" },
      title: { es: "Responde al instante en WhatsApp, web y SMS sin demoras", en: "Instant replies on WhatsApp, web, and SMS — zero delays" },
      description: {
        es: "Tu agente de chat está activo en todos tus canales. Responde preguntas, califica interesados y escala a un humano cuando sea necesario, sin perder ninguna conversación.",
        en: "Your chat agent is active across all your channels. It answers questions, qualifies prospects, and escalates to a human when needed — never missing a conversation.",
      },
      features: [
        { es: "WhatsApp, SMS y chat web", en: "WhatsApp, SMS & web chat" },
        { es: "Respuestas en menos de 1 segundo", en: "Responses in under 1 second" },
        { es: "Personalidad y tono adaptables", en: "Adaptable personality & tone" },
        { es: "Escalado inteligente a humano", en: "Smart escalation to humans" },
        { es: "Historial y contexto de conversación", en: "Conversation history & context" },
      ],
      cta: { es: "Ver demo de chat", en: "See chat demo" },
    },
    leads: {
      tag: { es: "Agente de Leads", en: "Lead Agent" },
      title: { es: "Captura, califica y nutre leads sin esfuerzo manual", en: "Capture, qualify, and nurture leads with zero manual effort" },
      description: {
        es: "Desde el primer contacto hasta el cierre, tu agente de leads gestiona el pipeline completo. Califica prospectos, los nutre con contenido relevante y los entrega listos para comprar.",
        en: "From first contact to close, your lead agent manages the full pipeline. It qualifies prospects, nurtures them with relevant content, and delivers them ready to buy.",
      },
      features: [
        { es: "Captura y calificación automática", en: "Automatic capture & qualification" },
        { es: "Secuencias de nutrición personalizadas", en: "Personalized nurturing sequences" },
        { es: "Integración con tu CRM", en: "CRM integration" },
        { es: "Scoring de leads en tiempo real", en: "Real-time lead scoring" },
        { es: "Reportes y analytics detallados", en: "Detailed reports & analytics" },
      ],
      cta: { es: "Ver demo de leads", en: "See leads demo" },
    },
  },

  services: {
    label: { es: "Servicios", en: "Services" },
    headline: { es: "Todo lo que necesitas para automatizar tu negocio", en: "Everything you need to automate your business" },
    subhead: {
      es: "Desde la estrategia hasta la implementación, te acompañamos en cada paso.",
      en: "From strategy to implementation, we support you every step of the way.",
    },
    items: [
      {
        title: { es: "Agentes de IA a Medida", en: "Custom AI Agents" },
        description: { es: "Diseñamos e implementamos agentes inteligentes entrenados con el conocimiento y tono de tu empresa.", en: "We design and deploy smart agents trained on your company's knowledge and tone." },
        tag: { es: "Core", en: "Core" },
      },
      {
        title: { es: "Automatización de Workflows", en: "Workflow Automation" },
        description: { es: "Conectamos tus herramientas (CRM, email, calendar) y eliminamos tareas manuales y repetitivas.", en: "We connect your tools (CRM, email, calendar) and eliminate manual, repetitive tasks." },
        tag: { es: "Productividad", en: "Productivity" },
      },
      {
        title: { es: "Consultoría de IA", en: "AI Consulting" },
        description: { es: "Analizamos tu negocio e identificamos exactamente dónde la IA puede generar mayor ROI.", en: "We analyze your business and identify exactly where AI can generate the most ROI." },
        tag: { es: "Estrategia", en: "Strategy" },
      },
      {
        title: { es: "Integraciones & APIs", en: "Integrations & APIs" },
        description: { es: "Conectamos tu stack tecnológico existente con los agentes para un flujo de datos unificado.", en: "We connect your existing tech stack with agents for a unified data flow." },
        tag: { es: "Técnico", en: "Technical" },
      },
      {
        title: { es: "Dashboards & Analytics", en: "Dashboards & Analytics" },
        description: { es: "Visibilidad total sobre el rendimiento de tus agentes: conversaciones, leads generados y conversiones.", en: "Full visibility into agent performance: conversations, leads generated, and conversions." },
        tag: { es: "Datos", en: "Data" },
      },
      {
        title: { es: "Soporte & Optimización", en: "Support & Optimization" },
        description: { es: "Monitoreo continuo, ajustes y mejoras para que tus agentes siempre funcionen al máximo.", en: "Continuous monitoring, adjustments, and improvements to keep your agents running at peak." },
        tag: { es: "Soporte", en: "Support" },
      },
    ],
  },

  industries: {
    label: { es: "Industrias", en: "Industries" },
    headline: { es: "Soluciones para cada industria", en: "Solutions for every industry" },
    subhead: {
      es: "Nuestros agentes se adaptan al lenguaje, flujos y necesidades específicas de tu sector.",
      en: "Our agents adapt to the language, workflows, and specific needs of your sector.",
    },
    items: [
      {
        emoji: "⚖️",
        title: { es: "Legal", en: "Legal" },
        description: { es: "Agendamiento de consultas, seguimiento de clientes y gestión de turnos para estudios jurídicos, escribanías y abogados independientes.", en: "Appointment scheduling, client follow-up and shift management for law firms, notaries and independent lawyers." },
        stats: { es: "+50% consultas atendidas", en: "+50% consultations handled" },
      },
      {
        emoji: "🍽️",
        title: { es: "Restaurantes", en: "Restaurants" },
        description: { es: "Reservas automáticas, atención a pedidos y consultas, y gestión de fidelidad sin intervención humana.", en: "Automatic reservations, order and query handling, and loyalty management without human intervention." },
        stats: { es: "+35% reservas directas", en: "+35% direct bookings" },
      },
      {
        emoji: "🏋️",
        title: { es: "Deportes & Gimnasios", en: "Sports & Gyms" },
        description: { es: "Inscripciones, renovaciones, recordatorios de clases y atención a socios las 24 horas.", en: "Enrollments, renewals, class reminders and member support around the clock." },
        stats: { es: "-40% cancelaciones", en: "-40% cancellations" },
      },
      {
        emoji: "🏠",
        title: { es: "Inmobiliarias", en: "Real Estate" },
        description: { es: "Califica compradores, agenda visitas y da seguimiento automático a cada propiedad y prospecto.", en: "Qualify buyers, schedule visits and automatically follow up on every property and prospect." },
        stats: { es: "+40% leads calificados", en: "+40% qualified leads" },
      },
      {
        emoji: "🏥",
        title: { es: "Salud & Clínicas", en: "Health & Clinics" },
        description: { es: "Turnos automáticos, recordatorios a pacientes y seguimiento post-consulta sin carga administrativa.", en: "Automatic appointments, patient reminders and post-consultation follow-up with zero admin burden." },
        stats: { es: "-60% no-shows", en: "-60% no-shows" },
      },
    ],
  },

  integrations: {
    label: { es: "El Ecosistema", en: "The Ecosystem" },
    headline: { es: "Conecta con lo que ya usas.", en: "Connect with what you already use." },
    subhead: {
      es: "Integraciones nativas con las herramientas que tu negocio necesita",
      en: "Native integrations with the tools your business needs",
    },
    secure: { es: "Datos encriptados y seguros", en: "Encrypted and secure data" },
  },

  howItWorks: {
    label: { es: "El Proceso", en: "The Process" },
    headline: { es: "Listo en días, no en meses", en: "Ready in days, not months" },
    subhead: {
      es: "Nuestro proceso de implementación es rápido, sencillo y sin fricciones técnicas para tu equipo.",
      en: "Our implementation process is fast, simple, and technically frictionless for your team.",
    },
    steps: [
      {
        number: "01",
        title: { es: "Discovery Call", en: "Discovery Call" },
        description: {
          es: "Entendemos tu negocio, tus procesos actuales y dónde la IA puede generar mayor impacto.",
          en: "We understand your business, current processes, and where AI can generate the most impact.",
        },
      },
      {
        number: "02",
        title: { es: "Configuración & Entrenamiento", en: "Setup & Training" },
        description: {
          es: "Configuramos tus agentes con el tono, conocimiento y flujos específicos de tu empresa en 3-5 días.",
          en: "We configure your agents with your company's tone, knowledge, and specific workflows in 3-5 days.",
        },
      },
      {
        number: "03",
        title: { es: "Go Live & Soporte", en: "Go Live & Support" },
        description: {
          es: "Activamos los agentes, monitoreamos el rendimiento y optimizamos continuamente para maximizar resultados.",
          en: "We activate the agents, monitor performance, and continuously optimize to maximize results.",
        },
      },
    ],
  },

  whyUs: {
    label: { es: "Quiénes Somos", en: "Who We Are" },
    headline: { es: "Construido por ingenieros, impulsado por resultados", en: "Built by engineers, driven by results" },
    subhead: {
      es: "Somos Francisco y Nacho, Analistas en Sistemas de la Universidad Nacional del Nordeste, Corrientes, Argentina. Combinamos rigor académico con experiencia real en automatización con IA.",
      en: "We are Francisco and Nacho, Systems Analysts from the Universidad Nacional del Nordeste, Corrientes, Argentina. We combine academic rigor with real-world AI automation experience.",
    },
    team: [
      {
        name: "Francisco Leiva",
        role: { es: "Co-Fundador & CTO", en: "Co-Founder & CTO" },
        university: "UNNE",
        degree: { es: "Analista en Sistemas", en: "Systems Analyst" },
        location: "Corrientes, Argentina",
        initials: "FL",
        photo: "/team-francisco.png",
        color: "#00F5C4",
        bio: {
          es: "Especializado en arquitectura de agentes de IA y automatización de workflows complejos. Apasionado por transformar procesos manuales en sistemas inteligentes.",
          en: "Specialized in AI agent architecture and complex workflow automation. Passionate about transforming manual processes into intelligent systems.",
        },
        socials: {
          linkedin: "https://linkedin.com/in/franciscoleiva",
          instagram: "https://www.instagram.com/peakai.es/",
          tiktok: "https://tiktok.com/@peakai.es",
        },
      },
      {
        name: "Ignacio Gauto",
        role: { es: "Co-Fundador & CEO", en: "Co-Founder & CEO" },
        university: "UNNE",
        degree: { es: "Analista en Sistemas", en: "Systems Analyst" },
        location: "Corrientes, Argentina",
        initials: "IG",
        photo: "/team-ignacio.jpeg", 
        color: "#0077FF",
        bio: {
          es: "Enfocado en estrategia de producto, relaciones con clientes y escalabilidad de soluciones de IA para mercados de habla hispana.",
          en: "Focused on product strategy, client relationships, and scaling AI solutions for Spanish-speaking markets.",
        },
        socials: {
          linkedin: "https://linkedin.com/in/ignaciogauto",
          instagram: "https://www.instagram.com/peakai.es/",
          tiktok: "https://tiktok.com/@peakai.es",
        },
      },
    ],
    reelsLabel: { es: "Nuestro Contenido", en: "Our Content" },
    reelsHeadline: { es: "Seguinos en redes", en: "Follow us on social media" },
    reelsSubhead: {
      es: "Compartimos tips, demos y casos de uso reales sobre automatización con IA.",
      en: "We share tips, demos, and real use cases about AI automation.",
    },
    reelsEmpty: { es: "Próximamente...", en: "Coming soon..." },
    stats: [
      { value: "24/7", label: { es: "Disponibilidad", en: "Availability" } },
      { value: "<5d", label: { es: "Time to launch", en: "Time to launch" } },
      { value: "3x", label: { es: "Más conversiones", en: "More conversions" } },
      { value: "100%", label: { es: "Dedicación", en: "Dedication" } },
    ],
    features: [
      {
        title: { es: "Implementación en 3-5 días", en: "3-5 Day Implementation" },
        description: { es: "Sin meses de espera. Tus agentes operativos en días.", en: "No months of waiting. Your agents operational in days." },
      },
      {
        title: { es: "Sin código para ti", en: "No Code for You" },
        description: { es: "Nosotros manejamos toda la tecnología. Tú solo ves los resultados.", en: "We handle all the technology. You just see the results." },
      },
      {
        title: { es: "Soporte dedicado", en: "Dedicated Support" },
        description: { es: "Acceso directo a tu equipo, no a un chat bot genérico.", en: "Direct access to your team, not a generic support chatbot." },
      },
      {
        title: { es: "ROI medible", en: "Measurable ROI" },
        description: { es: "Dashboards en tiempo real para ver qué generan tus agentes.", en: "Real-time dashboards to see exactly what your agents generate." },
      },
      {
        title: { es: "Ingeniería Argentina", en: "Argentine Engineering" },
        description: { es: "Equipo técnico de élite, mismo huso horario, fracción del costo.", en: "Elite technical team, same timezone, fraction of the cost." },
      },
      {
        title: { es: "Escalable", en: "Scalable" },
        description: { es: "Desde 1 agente hasta un ecosistema completo de automatización.", en: "From 1 agent to a complete automation ecosystem." },
      },
    ],
  },

  contact: {
    label: { es: "Contacto", en: "Contact" },
    headline: { es: "¿Hablamos?", en: "Let's talk" },
    subhead: {
      es: "Escribinos por WhatsApp, seguinos en redes o mandanos un mensaje directo. Respondemos rápido.",
      en: "Message us on WhatsApp, follow us on social media or send us a DM. We reply fast.",
    },
    whatsappNumber: { es: "+54 9 3777 412114", en: "+54 9 3777 412114" },
    whatsappLink: { es: "https://wa.me/5493777412114", en: "https://wa.me/5493777412114" },
    phoneNumber: { es: "+54 9 3777 412114", en: "+1 986 209 6113" },
    emailValue: { es: "innovatewithpeak@gmail.com", en: "innovatewithpeak@gmail.com" },
    whatsappLabel: { es: "Escribinos por WhatsApp", en: "Message us on WhatsApp" },
    phoneLabel: { es: "Llamanos", en: "Call or SMS" },
    emailLabel: { es: "Mandanos un email", en: "Send us an email" },
    followUs: { es: "Seguinos en redes", en: "Follow us" },
  },

  footer: {
    description: {
      es: "Agentes de IA para negocios. Gestionados desde Ketchum, Idaho y Corrientes, Argentina.",
      en: "AI agents for businesses. Managed from Ketchum, Idaho and Corrientes, Argentina.",
    },
    quickLinks: { es: "Navegación", en: "Navigation" },
    services: { es: "Servicios", en: "Services" },
    callAgent: { es: "Agente de Llamadas", en: "Call Agent" },
    chatAgent: { es: "Agente de Chat", en: "Chat Agent" },
    leadAgent: { es: "Agente de Leads", en: "Lead Agent" },
    demo: { es: "Demo Gratuita", en: "Free Demo" },
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    madeWith: { es: "Hecho con", en: "Made with" },
    inKetchum: { es: "en Ketchum, Idaho & Corrientes, Argentina", en: "in Ketchum, Idaho & Corrientes, Argentina" },
  },
};
