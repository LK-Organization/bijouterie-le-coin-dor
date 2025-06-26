/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_C_XFJcYf.mjs';
import { a as getTranslation, c as $$Layout, $ as $$Header, b as $$Footer } from '../../chunks/Footer_Cv9aT6TR.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const lang = "fr";
  const t = getTranslation(lang);
  const title = `${t.about.title} - Le Coin d'Or`;
  const description = "D\xE9couvrez l'histoire de Le Coin d'Or, bijouterie d'exception depuis 1987. Notre savoir-faire artisanal, notre passion pour l'excellence et notre engagement envers nos clients.";
  const timelineEvents = [
    {
      year: "1987",
      title: t.about.journey.timeline[1987].title,
      description: t.about.journey.timeline[1987].description
    },
    {
      year: "1995",
      title: t.about.journey.timeline[1995].title,
      description: t.about.journey.timeline[1995].description
    },
    {
      year: "2008",
      title: t.about.journey.timeline[2008].title,
      description: t.about.journey.timeline[2008].description
    },
    {
      year: "2015",
      title: t.about.journey.timeline[2015].title,
      description: t.about.journey.timeline[2015].description
    },
    {
      year: "2025",
      title: t.about.journey.timeline[2025].title,
      description: t.about.journey.timeline[2025].description
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="py-20 bg-gradient-to-br from-warm-cream via-cream to-beige"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-serif font-bold text-dark mb-6"> ${t.about.title} </h1> <p class="text-xl text-text-light"> ${t.about.subtitle} </p> <div class="w-24 h-1 bg-gold mx-auto mt-8"></div> </div> </div> </section> <!-- Passion Section --> <section class="py-20 bg-warm-beige"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl md:text-4xl font-serif font-bold text-dark mb-8 text-center"> ${t.about.passion.title} </h2> <div class="space-y-8 text-lg leading-relaxed text-text-light"> <p class="text-justify">${t.about.passion.paragraph1}</p> <p class="text-justify">${t.about.passion.paragraph2}</p> <p class="text-justify">${t.about.passion.paragraph3}</p> </div> </div> </div> </section> <!-- Journey Timeline --> <section class="py-20 bg-cream"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-serif font-bold text-dark mb-4"> ${t.about.journey.title} </h2> <p class="text-xl text-text-light"> ${t.about.journey.subtitle} </p> <div class="w-24 h-1 bg-gold mx-auto mt-6"></div> </div> <div class="relative"> <!-- Timeline Line --> <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold hidden md:block"></div> <div class="space-y-12"> ${timelineEvents.map((event, index) => renderTemplate`<div${addAttribute(`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col`, "class")}${addAttribute(index, "key")}> <div class="w-full md:w-1/2 px-4"> <div${addAttribute(`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center`, "class")}> <div class="text-3xl font-bold text-gold mb-2">${event.year}</div> <h3 class="text-xl font-semibold text-dark mb-3">${event.title}</h3> <p class="text-text-light">${event.description}</p> </div> </div> <div class="w-6 h-6 bg-gold rounded-full border-4 border-cream relative z-10 flex-shrink-0 my-4 md:my-0"></div> <div class="w-full md:w-1/2"></div> </div>`)} </div> </div> </div> </div> </section> <!-- Expertise Section --> <section class="py-20 bg-warm-gray"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl md:text-4xl font-serif font-bold text-dark mb-8 text-center"> ${t.about.expertise.title} </h2> <div class="space-y-8 text-lg leading-relaxed text-text-light"> <p class="text-justify">${t.about.expertise.paragraph1}</p> <p class="text-justify">${t.about.expertise.paragraph2}</p> <p class="text-justify">${t.about.expertise.paragraph3}</p> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/fr/about.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/fr/about.astro";
const $$url = "/fr/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
