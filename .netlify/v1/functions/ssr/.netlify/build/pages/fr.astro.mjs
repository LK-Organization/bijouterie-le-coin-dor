/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_C_XFJcYf.mjs';
import { a as getTranslation, c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/Footer_Cv9aT6TR.mjs';
import { $ as $$Hero, a as $$Craftsmanship, b as $$FeaturedProducts, c as $$ContactPreview } from '../chunks/ContactPreview_JOmhgrON.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "fr";
  const t = getTranslation(lang);
  const title = `${t.hero.title} - Le Coin d'Or`;
  const description = "Bijouterie d'exception \xE0 Gharda\xEFa depuis 1987. Cr\xE9ations uniques en or 18 carats, artisanat traditionnel et service personnalis\xE9. D\xE9couvrez nos collections exclusives.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Craftsmanship", $$Craftsmanship, {})} <!-- 🔽 Iframe qui s’ajuste dynamiquement --> <iframe id="ringSizerIframe" src="https://ringsizer-bijouterie.netlify.app/fr" class="w-full border-none overflow-hidden transition-all duration-300 ease-in-out" scrolling="no"></iframe> <!-- 🔽 Script pour ajuster dynamiquement la hauteur de l’iframe --> ${renderScript($$result2, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/fr/index.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, {})} ${renderComponent($$result2, "ContactPreview", $$ContactPreview, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/fr/index.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/pages/fr/index.astro";
const $$url = "/fr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
