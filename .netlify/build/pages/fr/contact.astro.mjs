/* empty css                                    */
import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_C_XFJcYf.mjs';
import { a as getTranslation, c as $$Layout, $ as $$Header, b as $$Footer } from '../../chunks/Footer_Cv9aT6TR.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "fr";
  const t = getTranslation(lang);
  const title = `${t.contact.title} - Le Coin d'Or`;
  const description = "Contactez Le Coin d'Or \xE0 Gharda\xEFa pour d\xE9couvrir nos cr\xE9ations exclusives. Prenez rendez-vous avec nos conseillers pour un service personnalis\xE9.";
  const schedule = [
    { day: t.contactPreview.days.sunday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.monday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.tuesday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.wednesday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.thursday, hours: "09:00 - 19:00" },
    { day: t.contactPreview.days.friday, hours: t.contactPreview.days.closed },
    { day: t.contactPreview.days.saturday, hours: "09:00 - 19:00" }
  ];
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    // Basic client-side validation
    if (!data.name || !data.email || !data.message) {
      return alert('Veuillez remplir tous les champs obligatoires.');
    }
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return alert('Veuillez entrer une adresse email valide.');
    }

    // Disable submit button to prevent multiple clicks
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours\u2026';

    try {
     
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        alert('Message envoy\xE9 avec succ\xE8s ! Nous vous r\xE9pondrons dans les plus brefs d\xE9lais.');
        form.reset();
      } else {
        console.error('Erreur c\xF4t\xE9 serveur:', result.error);
        alert('Oups ! Une erreur est survenue lors de l\u2019envoi. Veuillez r\xE9essayer plus tard.');
      }
    } catch (err) {
      console.error('Erreur r\xE9seau ou inattendue :', err);
      alert('Impossible de se connecter au serveur. V\xE9rifiez votre connexion et r\xE9essayez.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer';
    }
  });
<\/script>`], ["", ` <script type="module">
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    // Basic client-side validation
    if (!data.name || !data.email || !data.message) {
      return alert('Veuillez remplir tous les champs obligatoires.');
    }
    const emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return alert('Veuillez entrer une adresse email valide.');
    }

    // Disable submit button to prevent multiple clicks
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours\u2026';

    try {
     
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        alert('Message envoy\xE9 avec succ\xE8s ! Nous vous r\xE9pondrons dans les plus brefs d\xE9lais.');
        form.reset();
      } else {
        console.error('Erreur c\xF4t\xE9 serveur:', result.error);
        alert('Oups ! Une erreur est survenue lors de l\u2019envoi. Veuillez r\xE9essayer plus tard.');
      }
    } catch (err) {
      console.error('Erreur r\xE9seau ou inattendue :', err);
      alert('Impossible de se connecter au serveur. V\xE9rifiez votre connexion et r\xE9essayez.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer';
    }
  });
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="py-20 bg-gradient-to-br from-warm-cream via-cream to-beige"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-serif font-bold text-dark mb-6"> ${t.contact.title} </h1> <p class="text-xl text-text-light"> ${t.contact.subtitle} </p> <div class="w-24 h-1 bg-gold mx-auto mt-8"></div> </div> </div> </section> <!-- Contact Content --> <section class="py-20 bg-cream"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- Contact Information --> <div class="space-y-8"> <div> <h2 class="text-2xl font-semibold text-dark mb-6">${t.contact.info}</h2> <!-- Address --> <div class="flex items-start space-x-4 mb-6"> <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h3 class="font-semibold text-dark mb-2">${t.contact.address}</h3> <p class="text-text-light">
Rue Cheikh Ammi Said<br>
Ghardaïa, Algérie
</p> </div> </div> <!-- Phone --> <div class="flex items-start space-x-4 mb-6"> <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h3 class="font-semibold text-dark mb-2">${t.contact.phone}</h3> <p class="text-text-light">+213-XX-XX-XX-XX</p> </div> </div> <!-- Email --> <div class="flex items-start space-x-4 mb-6"> <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <h3 class="font-semibold text-dark mb-2">${t.contact.email}</h3> <p class="text-text-light">contact@lecoin-dor.com</p> </div> </div> </div> <!-- Opening Hours --> <div class="bg-white rounded-2xl p-6 shadow-lg"> <h3 class="text-xl font-semibold text-dark mb-6">${t.contact.hours}</h3> <div class="space-y-3"> ${schedule.map((item, index) => renderTemplate`<div class="flex justify-between items-center py-2 border-b border-beige-dark last:border-b-0"${addAttribute(index, "key")}> <span class="text-dark font-medium">${item.day}</span> <span${addAttribute(`${item.hours === t.contactPreview.days.closed ? "text-red-500" : "text-text-light"} font-medium`, "class")}> ${item.hours} </span> </div>`)} </div> </div> </div> <!-- Contact Form --> <div class="bg-white rounded-2xl p-8 shadow-lg"> <h2 class="text-2xl font-semibold text-dark mb-6">${t.contact.form.title}</h2> <form id="contact-form" class="space-y-6"> <!-- Name --> <div> <label for="name" class="block text-sm font-medium text-dark mb-2"> ${t.contact.form.nameRequired} </label> <input type="text" id="name" name="name" required${addAttribute(t.contact.form.namePlaceholder, "placeholder")} class="w-full px-4 py-3 border border-beige-dark rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"> </div> <!-- Email --> <div> <label for="email" class="block text-sm font-medium text-dark mb-2"> ${t.contact.form.emailRequired} </label> <input type="email" id="email" name="email" required${addAttribute(t.contact.form.emailPlaceholder, "placeholder")} class="w-full px-4 py-3 border border-beige-dark rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"> </div> <!-- Phone --> <div> <label for="phone" class="block text-sm font-medium text-dark mb-2"> ${t.contact.form.phone} </label> <input type="tel" id="phone" name="phone"${addAttribute(t.contact.form.phonePlaceholder, "placeholder")} class="w-full px-4 py-3 border border-beige-dark rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"> </div> <!-- Message --> <div> <label for="message" class="block text-sm font-medium text-dark mb-2"> ${t.contact.form.messageRequired} </label> <textarea id="message" name="message" rows="5" required${addAttribute(t.contact.form.messagePlaceholder, "placeholder")} class="w-full px-4 py-3 border border-beige-dark rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none"></textarea> </div> <!-- Submit Button --> <button type="submit" class="w-full bg-gold text-white py-3 px-6 rounded-lg font-semibold hover:bg-copper transition-colors duration-300 transform hover:scale-[1.02]"> ${t.contact.form.submit} </button> <!-- Required Fields Note --> <p class="text-sm text-text-light text-center">${t.contact.form.required}</p> </form> </div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` }));
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/fr/contact.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/fr/contact.astro";
const $$url = "/fr/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
