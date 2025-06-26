import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_C_XFJcYf.mjs';
import { g as getCurrentLang, a as getTranslation } from './Footer_Cv9aT6TR.mjs';

const $$Astro$3 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getCurrentLang(Astro2.url);
  const t = getTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden"> <!-- Background Image --> <div class="absolute inset-0"> <img src="/a-la-une.jpg" alt="Luxury jewelry background" class="w-full h-full object-cover scale-110" loading="eager"> <!-- Enhanced overlay with more transparency for better text readability --> <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50"></div> </div> <!-- Background Pattern (kept for additional elegance) --> <div class="absolute inset-0 opacity-5 z-10"> <div class="absolute top-20 left-20 w-32 h-32 border border-gold rounded-full"></div> <div class="absolute top-40 right-32 w-24 h-24 border border-copper rounded-full"></div> <div class="absolute bottom-32 left-1/4 w-16 h-16 border border-gold rounded-full"></div> <div class="absolute bottom-20 right-20 w-20 h-20 border border-copper rounded-full"></div> </div> <div class="container mx-auto px-4 text-center relative z-20"> <div class="max-w-4xl mx-auto space-y-8 animate-fade-in"> <!-- Main Title without background frame --> <h1 class="text-4xl md:text-6xl lg:text-display font-serif font-bold text-white leading-tight drop-shadow-2xl"> ${t.hero.title} </h1> <!-- Subtitle --> <p class="text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto whitespace-pre-line font-medium drop-shadow-xl"> ${t.hero.subtitle} </p> <!-- CTA Button - Rectangle Format --> <div class="pt-8"> <a${addAttribute(lang === "ar" ? "/gallery" : "/fr/gallery", "href")} class="inline-block bg-gold text-white font-bold text-xl hover:bg-copper transition-all duration-300 px-8 py-4 drop-shadow-xl"> ${t.hero.cta} </a> </div> </div> </div> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"> <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-white/20 backdrop-blur-sm"> <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div> </div> </div> </section>`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Craftsmanship = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Craftsmanship;
  const lang = getCurrentLang(Astro2.url);
  const t = getTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-warm-beige"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <!-- Section Title --> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-serif font-bold text-dark mb-6"> ${t.craftsmanship.title} </h2> <div class="w-24 h-1 bg-gold mx-auto"></div> </div> <!-- Content with Image --> <div${addAttribute(`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${lang === "ar" ? "lg:grid-flow-col-dense" : ""}`, "class")}> <!-- Image --> <div${addAttribute(`${lang === "ar" ? "lg:col-start-2" : ""} animate-slide-up`, "class")}> <div class="relative overflow-hidden rounded-2xl shadow-2xl"> <img src="/494898968_17951424476953682_76621524452601449_n.jpeg" alt="Bijoux artisanaux Le Coin d'Or" class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div> </div> </div> <!-- Text Content --> <div${addAttribute(`${lang === "ar" ? "lg:col-start-1 lg:row-start-1" : ""} space-y-8`, "class")}> <div class="animate-slide-up"> <p class="text-lg leading-relaxed text-text-light text-justify"> ${t.craftsmanship.paragraph1} </p> </div> <div class="animate-slide-up" style="animation-delay: 0.3s;"> <p class="text-lg leading-relaxed text-text-light text-justify"> ${t.craftsmanship.paragraph2} </p> </div> <!-- Decorative Element --> <div class="flex justify-start pt-8"> <div class="flex items-center space-x-4 rtl:space-x-reverse"> <div class="w-8 h-px bg-gold"></div> <div class="w-3 h-3 bg-gold rounded-full"></div> <div class="w-8 h-px bg-gold"></div> </div> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/components/Craftsmanship.astro", void 0);

const $$Astro$1 = createAstro();
const $$FeaturedProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedProducts;
  const lang = getCurrentLang(Astro2.url);
  const t = getTranslation(lang);
  const products = [
    {
      name: t.featured.products.bracelet,
      description: t.featured.products.braceletDesc,
      image: "/480873029_560637023658848_1633972412637007552_n.jpg",
      price: "387,000 DA"
    },
    {
      name: t.featured.products.necklace,
      description: t.featured.products.necklaceDesc,
      image: "/480990848_560637280325489_4412389205364911132_n.jpg",
      price: "419,000 DA"
    },
    {
      name: t.featured.products.parure,
      description: t.featured.products.parureDesc,
      image: "/481452647_560637203658830_2787036932226901752_n.jpg",
      price: "483,000 DA"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-cream"> <div class="container mx-auto px-8 md:px-16 lg:px-24"> <!-- Section Header --> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-serif font-bold text-dark mb-4"> ${t.featured.title} </h2> <p class="text-xl text-text-light max-w-2xl mx-auto"> ${t.featured.subtitle} </p> <div class="w-24 h-1 bg-gold mx-auto mt-6"></div> </div> <!-- Products Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"> ${products.map((product, index) => renderTemplate`<div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"${addAttribute(`animation-delay: ${index * 0.2}s;`, "style")}> <!-- Product Image --> <div class="relative h-64 overflow-hidden"> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> </div> <!-- Product Info --> <div class="p-6 space-y-4"> <h3 class="text-xl font-semibold text-dark group-hover:text-gold transition-colors"> ${product.name} </h3> <p class="text-text-light leading-relaxed text-justify"> ${product.description} </p> <div class="flex justify-between items-center pt-4"> <span class="text-2xl font-bold text-gold">${product.price}</span> <button class="bg-gold text-white px-4 py-2 rounded-lg hover:bg-copper transition-colors"> ${t.featured.discover} </button> </div> </div> </div>`)} </div> <!-- View All Button --> <div class="text-center"> <a${addAttribute(lang === "ar" ? "/gallery" : "/fr/gallery", "href")} class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-all duration-300"> ${t.featured.viewAll} <svg class="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section>`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/components/FeaturedProducts.astro", void 0);

const $$Astro = createAstro();
const $$ContactPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactPreview;
  const lang = getCurrentLang(Astro2.url);
  const t = getTranslation(lang);
  const schedule = [
    { day: t.contactPreview.days.sunday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.monday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.tuesday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.wednesday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.thursday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.friday, hours: t.contactPreview.days.closed },
    { day: t.contactPreview.days.saturday, hours: "09:00 - 19:00" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-warm-gray"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Contact Info --> <div class="space-y-8"> <div> <h2 class="text-3xl md:text-4xl font-serif font-bold text-dark mb-6"> ${t.contactPreview.title} </h2> <div class="w-24 h-1 bg-gold mb-6"></div> <p class="text-lg text-text-light leading-relaxed text-justify"> ${t.contactPreview.description} </p> </div> <!-- Address --> <div class="flex items-start space-x-4 rtl:space-x-reverse"> <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h3 class="font-semibold text-dark mb-2">${t.contactPreview.address}</h3> <p class="text-text-light whitespace-pre-line">${t.contactPreview.addressValue}</p> </div> </div> <!-- CTA Button --> <div class="pt-4"> <a${addAttribute(lang === "ar" ? "/contact" : "/fr/contact", "href")} class="inline-flex items-center px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-copper transition-all duration-300 transform hover:scale-105"> ${t.contactPreview.cta} <svg class="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> <!-- Schedule --> <div class="bg-white rounded-2xl p-8 shadow-lg"> <h3 class="text-2xl font-semibold text-dark mb-6 text-center"> ${t.contactPreview.hours} </h3> <div class="space-y-4"> ${schedule.map((item, index) => renderTemplate`<div class="flex justify-between items-center py-2 border-b border-beige-dark last:border-b-0"${addAttribute(index, "key")}> <span class="text-dark font-medium">${item.day}</span> <span${addAttribute(`${item.hours === t.contactPreview.days.closed ? "text-red-500" : "text-text-light"} font-medium`, "class")}> ${item.hours} </span> </div>`)} </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/components/ContactPreview.astro", void 0);

export { $$Hero as $, $$Craftsmanship as a, $$FeaturedProducts as b, $$ContactPreview as c };
