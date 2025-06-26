/* empty css                                 */
import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_C_XFJcYf.mjs';
import { g as getCurrentLang, a as getTranslation, c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/Footer_Cv9aT6TR.mjs';
import { $ as $$Hero, a as $$Craftsmanship, b as $$FeaturedProducts, c as $$ContactPreview } from '../chunks/ContactPreview_JOmhgrON.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getCurrentLang(Astro2.url);
  const t = getTranslation(lang);
  const title = `${t.hero.title} - Le Coin d'Or`;
  const description = "\u0645\u062C\u0648\u0647\u0631\u0627\u062A \u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u063A\u0631\u062F\u0627\u064A\u0629 \u0645\u0646\u0630 \u0639\u0627\u0645 1987. \u062A\u0635\u0627\u0645\u064A\u0645 \u0641\u0631\u064A\u062F\u0629 \u0645\u0646 \u0646\u0648\u0639\u0647\u0627 \u0645\u0646 \u0627\u0644\u0630\u0647\u0628 \u0639\u064A\u0627\u0631 18\u060C \u062D\u0631\u0641\u064A\u0629 \u062A\u0642\u0644\u064A\u062F\u064A\u0629 \u0648\u062E\u062F\u0645\u0629 \u0634\u062E\u0635\u064A\u0629. \u0627\u0643\u062A\u0634\u0641 \u0645\u062C\u0645\u0648\u0639\u0627\u062A\u0646\u0627 \u0627\u0644\u062D\u0635\u0631\u064A\u0629.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Craftsmanship", $$Craftsmanship, {})} <iframe id="ringSizerIframe" src="https://ringsizer-bijouterie.netlify.app" class="w-full border-none overflow-hidden transition-all duration-300 ease-in-out" scrolling="no"></iframe> <!-- 🔽 Script pour ajuster dynamiquement la hauteur de l’iframe --> ${renderScript($$result2, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, {})} ${renderComponent($$result2, "ContactPreview", $$ContactPreview, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/index.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
