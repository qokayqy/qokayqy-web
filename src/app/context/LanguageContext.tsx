import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "am";

export const translations = {
  en: {
    nav: {
      home: "Home",
      process: "Process",
      techStack: "Tech Stack",
      about: "About",
      contact: "Contact",
      cta: "Get Started",
    },
    landing: {
      line1: "It's time to have",
      cycleWords: ["Your Site.", "QoKayqy."],
      sub: "Websites, automation & custom software — built to grow your business.",
      cta1: "Start your project",
      cta2: "See our work",
      servicesLabel: "What we do",
      services: [
        {
          title: "Website Development",
          desc: "Fast, responsive websites that convert.",
          tags: ["Landing Pages", "E-Commerce", "Web Apps"],
        },
        {
          title: "Business Automation",
          desc: "Bots and workflows that run while you sleep.",
          tags: ["Chatbots", "Workflow Bots", "Integrations"],
        },
        {
          title: "Custom Software",
          desc: "Scalable software built for your exact needs.",
          tags: ["Dashboards", "APIs", "SaaS"],
        },
      ],
      stats: [
        { value: "160+", label: "Projects" },
        { value: "100%", label: "On Time" },
        { value: "7×", label: "Faster" },
        { value: "24h", label: "Response" },
      ],
      ctaBannerH2: "Ready to grow online?",
      ctaBannerSub: "We'll get back to you within 24 hours.",
      ctaEmail: "Email us",
      ctaBrowse: "Browse services",
    },
    process: {
      badge: "How it works",
      h1: "Four steps. Zero surprises.",
      sub: "Clear, transparent process from first call to launch.",
      steps: [
        { num: "01", title: "Discovery", desc: "We learn your goals before writing a single line." },
        { num: "02", title: "Design", desc: "Mockups you approve before we build anything." },
        { num: "03", title: "Build", desc: "Focused sprints with regular updates." },
        { num: "04", title: "Launch", desc: "Smooth go-live with 30-day post-launch support." },
      ],
      principles: [
        { title: "Honesty first", desc: "We flag risks early — before they cost you." },
        { title: "No hand-offs", desc: "The team you talk to is the team that builds." },
        { title: "You own everything", desc: "All code and assets are yours from day one." },
        { title: "Speed, no shortcuts", desc: "Fast because our process is tight, not because we skip testing." },
      ],
    },
    techStack: {
      badge: "Technologies",
      h1: "Right tools. Right project.",
      sub: "We pick what fits your needs — not what's trending.",
      categories: [
        { name: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
        { name: "Backend", techs: ["Node.js", "Python", "FastAPI", "Express", "GraphQL"] },
        { name: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"] },
        { name: "Automation", techs: ["n8n", "Zapier", "Telegram Bot API", "WhatsApp API", "Puppeteer"] },
        { name: "DevOps", techs: ["Docker", "GitHub Actions", "Vercel", "AWS", "Nginx"] },
        { name: "Design", techs: ["Figma", "Webflow", "Sanity", "Strapi", "WordPress"] },
      ],
      note: "Don't see your stack? We adapt — reach out.",
      ctaLabel: "Start a project",
    },
    about: {
      badge: "About",
      h1: "We help businesses grow online.",
      sub: "Professional digital work — without the enterprise price tag.",
      mission: "We build websites, automation systems, and software solutions that are not just focused on delivering a “beautiful result,” but on achieving real and measurable business growth. Our work is centered on the digital transformation of small and medium-sized businesses, helping them move toward a faster, more efficient, and more automated way of working. We develop modern websites that load quickly, work on all devices, and are designed to attract customers. At the same time, we create automation solutions aimed at reducing repetitive tasks, saving time, and minimizing human errors. Our software systems are designed to easily integrate into your business processes—whether it is sales, customer management, communication, or internal accounting. We use modern technologies to ensure stability, security, and long-term scalable growth. As a result, businesses receive not just technology, but a complete toolkit for growth, optimization, and competitive advantage.",
      valuesLabel: "What drives us",
      values: [
        { title: "Clarity", desc: "Plain communication. No surprises." },
        { title: "Craft", desc: "We care about the details." },
        { title: "Partnership", desc: "Your growth is our success metric." },
        { title: "Affordability", desc: "Fair pricing. Always transparent." },
      ],
      why: [
        "No hidden fees",
        "Fast delivery",
        "Direct communication",
        "Code you own",
        "Scales with you",
        "Free discovery call",
      ],
      ctaLabel: "Work with us",
    },
    contact: {
      badge: "Get in touch",
      h1: "Let's talk.",
      sub: "We reply within 24 hours.",
      formName: "Your name",
      formEmail: "Email",
      formService: "Service",
      formMessage: "Your message",
      formCta: "Send",
      serviceOptions: ["Website Development", "Business Automation", "Custom Software", "Other"],
      infoLabel: "Other ways to reach us",
      email: "qokayqy@gmail.com",
      followLabel: "Follow us",
      successTitle: "Message sent!",
      successMsg: "We'll be in touch within 24 hours.",
    },
    footer: {
      tagline: "Websites, automation & custom software for growing businesses.",
      rights: "© 2026 QoKayqy.",
    },
  },
  am: {
    nav: {
      home: "Գլխավոր",
      process: "Գործընթաց",
      techStack: "Տեխնոլոգիաներ",
      about: "Մեր մասին",
      contact: "Կապ",
      cta: "Սկսել",
    },
    landing: {
      line1: "Ժամանակն է ունենալ",
      cycleWords: ["Քո կայքը", "QoKayqy"],
      sub: "Կայքեր, ավտոմատացում և ծրագրային լուծումներ՝ ձեր բիզնեսի աճի համար:",
      cta1: "Սկսել նախագիծ",
      cta2: "Տեսնել աշխատանքները",
      servicesLabel: "Ինչ ենք անում",
      services: [
        {
          title: "Կայքերի մշակում",
          desc: "Արագ և հարմարեցվող կայքեր, որոնք բերում են արդյունք:",
          tags: ["Landing էջեր", "E-commerce", "Վեբ հավելվածներ"],
        },
        {
          title: "Բիզնես ավտոմատացում",
          desc: "Բոտեր և համակարգեր, որոնք աշխատում են ձեր փոխարեն:",
          tags: ["Չատբոտեր", "Աշխատանքային հոսքեր", "Ինտեգրացիաներ"],
        },
        {
          title: "Անհատական ծրագրավորում",
          desc: "Ծրագրային լուծումներ՝ ձեր կոնկրետ կարիքների համար:",
          tags: ["Dashboard", "API", "SaaS"],
        },
      ],
      stats: [
        { value: "160+", label: "Նախագիծ" },
        { value: "100%", label: "Ժամանակին" },
        { value: "7×", label: "Արագություն" },
        { value: "24ժ", label: "Պատասխան" },
      ],
      ctaBannerH2: "Պատրա՞ստ եք զարգացնել ձեր բիզնեսը",
      ctaBannerSub: "Կպատասխանենք 24 ժամվա ընթացքում։",
      ctaEmail: "Գրել մեզ",
      ctaBrowse: "Ծառայություններ",
    },
    process: {
      badge: "Ինչպես ենք աշխատում",
      h1: "Հստակ քայլեր։ Հստակ Արդյունք",
      sub: "Հստակ և թափանցիկ գործընթաց՝ առաջին կապից մինչև գործարկում։",
      steps: [
        { num: "01", title: "Բացահայտում", desc: "Հասկանում ենք ձեր նպատակները։" },
        { num: "02", title: "Դիզայն", desc: "Նախագծեր՝ հաստատելու համար։" },
        { num: "03", title: "Մշակում", desc: "Կայուն զարգացում՝ փուլերով։" },
        { num: "04", title: "Գործարկում", desc: "Անխափան լռիվ գործարկում + աջակցություն։" },
      ],
      principles: [
        { title: "Ազնվություն", desc: "Ռիսկերը ասում ենք անմիջապես։" },
        { title: "Մի թիմ", desc: "Դուք խոսում եք հենց մշակողների հետ։" },
        { title: "Ձերը ամեն ինչն է", desc: "Կոդն ու իրավունքները ամբողջությամբ ձեզ են պատկանում։" },
        { title: "Արագություն առանց կրճատումների", desc: "Արագ ենք, բայց ոչ մակերեսային։" },
      ],
    },
    techStack: {
      badge: "Տեխնոլոգիաներ",
      h1: "Ճիշտ գործիքներ՝ ճիշտ նախագծի համար",
      sub: "Ընտրում ենք ըստ անհրաժեշտության, ոչ թե թրենդների։",
      // categories: [
      //   { name: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
      //   { name: "Backend", techs: ["Node.js", "Python", "FastAPI", "Express", "GraphQL"] },
      //   { name: "Տվյալների բազա", techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"] },
      //   { name: "Ավտոմատացում", techs: ["n8n", "Zapier", "Telegram Bot API", "WhatsApp API", "Puppeteer"] },
      //   { name: "DevOps", techs: ["Docker", "GitHub Actions", "Vercel", "AWS", "Nginx"] },
      //   { name: "Դիզայն", techs: ["Figma", "Webflow", "Sanity", "Strapi", "WordPress"] },
      // ],
      categories: [
        { name: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
        { name: "Backend", techs: ["Node.js", "Python", "FastAPI", "Express", "GraphQL"] },
        { name: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"] },
        { name: "Automation", techs: ["n8n", "Zapier", "Telegram Bot API", "WhatsApp API", "Puppeteer"] },
        { name: "DevOps", techs: ["Docker", "GitHub Actions", "Vercel", "AWS", "Nginx"] },
        { name: "Design", techs: ["Figma", "Webflow", "Sanity", "Strapi", "WordPress"] },
      ],
      note: "Չե՞ք գտնում ձեր stack-ը։ Գրեք մեզ։",
      ctaLabel: "Սկսել նախագիծ",
    },
    about: {
      badge: "Մեր մասին",
      h1: "Օգնում ենք բիզնեսներին աճել օնլայն",
      sub: "Պրոֆեսիոնալ թվային լուծումներ՝ մատչելի գնով",
      mission: "Մենք կառուցում ենք կայքեր, ավտոմատացման համակարգեր և ծրագրային լուծումներ, որոնք ուղղված են ոչ թե պարզապես «գեղեցիկ արդյունքի», այլ իրական և չափելի բիզնես աճի ապահովմանը։ Մեր աշխատանքը կենտրոնացած է փոքր և միջին բիզնեսների թվային վերափոխման վրա՝ օգնելով նրանց անցնել ավելի արագ, ավելի արդյունավետ և ավելի ավտոմատացված աշխատանքի մոդելի։ Մենք մշակում ենք ժամանակակից կայքեր, որոնք բեռնվում են արագ, աշխատում են բոլոր սարքերում և ստեղծված են հաճախորդներ ներգրավելու համար։ Միաժամանակ ստեղծում ենք ավտոմատացման լուծումներ՝ կրկնվող աշխատանքները նվազեցնելու, ժամանակ խնայելու և մարդկային սխալները նվազագույնի հասցնելու նպատակով։ Մեր ծրագրային համակարգերը նախագծված են այնպես, որ հեշտ ինտեգրվեն ձեր բիզնես գործընթացներին՝ լինի դա վաճառք, հաճախորդների կառավարում, հաղորդակցություն կամ ներքին հաշվառում։ Մենք օգտագործում ենք ժամանակակից տեխնոլոգիաներ՝ ապահովելով կայունություն, անվտանգություն և երկարաժամկետ մասշտաբավորվող զարգացում։ Արդյունքում բիզնեսը ստանում է ոչ միայն տեխնոլոգիա, այլ ամբողջական գործիքակազմ՝ աճի, օպտիմիզացման և մրցակցային առավելության համար։",
      valuesLabel: "Ինչն է մեզ շարժում",
      values: [
        { title: "Հստակություն", desc: "Պարզ հաղորդակցություն՝ առանց անակնկալների" },
        { title: "Որակ", desc: "Մանրուքների նկատմամբ ուշադրություն" },
        { title: "Գործընկերություն", desc: "Ձեր աճը մեր նպատակն է" },
        { title: "Մատչելիություն", desc: "Արդար և թափանցիկ գնագոյացում" },
      ],
      why: [
        "Առանց թաքնված վճարների",
        "Արագ իրականացում",
        "Ուղիղ կապ թիմի հետ",
        "Կոդը ամբողջությամբ ձերն է",
        "Աճում է ձեր բիզնեսի հետ",
        "Անվճար խորհրդատվություն",
      ],
      ctaLabel: "Աշխատել մեզ հետ",
    },
    contact: {
      badge: "Կապ մեզ հետ",
      h1: "Եկեք խոսենք",
      sub: "Պատասխանում ենք 24 ժամվա ընթացքում",
      formName: "Անուն",
      formEmail: "Էլ. հասցե",
      formService: "Ծառայություն",
      formMessage: "Հաղորդագրություն",
      formCta: "Ուղարկել",
      serviceOptions: ["Կայքի մշակում", "Ավտոմատացում", "Անհատական ծրագրավորում", "Այլ"],
      infoLabel: "Կապի այլ եղանակներ",
      email: "qokayqy@gmail.com",
      followLabel: "Հետևեք մեզ",
      successTitle: "Հաղորդագրությունը ուղարկված է",
      successMsg: "Կկապվենք ձեզ հետ 24 ժամվա ընթացքում",
    },
    footer: {
      tagline: "Կայքեր, ավտոմատացում և ծրագրային լուծումներ բիզնեսների համար",
      rights: "© 2026 QoKayqy",
    },
  },
} as const;

export type Translations = typeof translations.en;

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}>({
  lang: "en",
  setLang: () => { },
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang] as Translations;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
