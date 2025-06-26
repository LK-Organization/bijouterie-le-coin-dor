/* empty css                                 */
import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_C_XFJcYf.mjs';
import { g as getCurrentLang, a as getTranslation, c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/Footer_Cv9aT6TR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const lang = getCurrentLang(Astro2.url);
  const t = getTranslation(lang);
  const title = `${t.gallery.title} - Le Coin d'Or`;
  const description = "D\xE9couvrez notre collection exclusive de bijoux en or 18 carats. Bagues, colliers, bracelets et parures d'exception cr\xE9\xE9s par nos artisans joailliers \xE0 Gharda\xEFa.";
  const galleryItems = [
    {
      name: t.gallery.products.ring1,
      category: "Bagues",
      image: "/480873029_560637023658848_1633972412637007552_n.jpg",
      price: "387,000 DA"
    },
    {
      name: t.gallery.products.ring2,
      category: "Bagues",
      image: "/480990848_560637280325489_4412389205364911132_n.jpg",
      price: "419,000 DA"
    },
    {
      name: t.gallery.products.parure1,
      category: "Parures",
      image: "/481115179_560380403684510_3281181030240939278_n.jpg",
      price: "730,000 DA"
    },
    {
      name: t.gallery.products.parure2,
      category: "Parures",
      image: "/481452647_560637203658830_2787036932226901752_n.jpg",
      price: "483,000 DA"
    },
    {
      name: "Bracelet Om\xE9ga",
      category: "Bracelets",
      image: "/481782585_565449369844280_5255375316700178073_n.jpg",
      price: "790,000 DA"
    },
    {
      name: "Parure Cha\xEEne Diamants",
      category: "Parures",
      image: "/491443531_17951419001953682_6104516940277339509_n.jpeg",
      price: "392,000 DA"
    },
    {
      name: "Bague Cartier",
      category: "Bagues",
      image: "/491449291_17951428997953682_7110874959730483960_n.jpeg",
      price: "1,035,000 DA"
    },
    {
      name: "Parure Cha\xEEne Or",
      category: "Parures",
      image: "/493968721_17951419022953682_5839581880759109416_n.jpeg",
      price: "330,000 DA"
    },
    {
      name: "Bague \xC9meraude",
      category: "Bagues",
      image: "/494361588_17951424695953682_3215446365268162079_n.jpeg",
      price: "1,320,000 DA"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="py-20 bg-gradient-to-br from-warm-cream via-cream to-beige"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-serif font-bold text-dark mb-6"> ${t.gallery.title} </h1> <p class="text-xl text-text-light"> ${t.gallery.subtitle} </p> <div class="w-24 h-1 bg-gold mx-auto mt-8"></div> </div> </div> </section> <!-- Gallery Grid --> <section class="py-20 bg-cream"> <div class="container mx-auto px-8 md:px-16 lg:px-24"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${galleryItems.map((item, index) => renderTemplate`<div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"${addAttribute(`animation-delay: ${index * 0.1}s;`, "style")}${addAttribute(index, "key")}> <!-- Image --> <div class="relative h-64 overflow-hidden"> <img${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> <div class="absolute bottom-4 left-4 text-white"> <span class="text-sm bg-gold px-3 py-1 rounded-full">${item.category}</span> </div> </div> <!-- Content --> <div class="p-6"> <h3 class="text-xl font-semibold text-dark mb-2 group-hover:text-gold transition-colors"> ${item.name} </h3> <div class="flex justify-between items-center"> <span class="text-2xl font-bold text-gold">${item.price}</span> <button class="bg-gold text-white px-4 py-2 rounded-lg hover:bg-copper transition-colors"> ${t.featured.discover} </button> </div> </div> </div>`)} </div> </div> </section> <!-- Custom Creation Section --> <section class="py-20 bg-warm-gray"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-serif font-bold text-dark mb-6"> ${t.gallery.custom.title} </h2> <div class="w-24 h-1 bg-gold mx-auto mb-8"></div> <p class="text-lg text-text-light leading-relaxed mb-8"> ${t.gallery.custom.description} </p> <a${addAttribute(lang === "ar" ? "/contact" : "/fr/contact", "href")} class="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-copper transition-all duration-300 transform hover:scale-105"> ${t.gallery.custom.cta} <svg class="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/gallery.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
