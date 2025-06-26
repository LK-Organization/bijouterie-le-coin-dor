import { e as createComponent, f as createAstro, r as renderTemplate, l as renderScript, n as renderSlot, o as renderHead, h as addAttribute, m as maybeRenderHead } from './astro/server_C_XFJcYf.mjs';

const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      gallery: "Galerie",
      about: "Notre Bijouterie",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      title: "L'art de la joaillerie d'exception",
      subtitle:
        "Des créations raffinées et intemporelles,\nfaçonnées avec passion\npour sublimer votre élégance naturelle.",
      cta: "Découvrir notre galerie",
      discover: "Découvrir",
    },
    // Craftsmanship Section
    craftsmanship: {
      title: "L'art du savoir-faire",
      paragraph1:
        "    Dans l'écrin précieux de notre boutique, chaque bijou raconte une histoire millénaire, celle de l'alliance entre la matière noble et le geste parfait. Nos créations ne sont pas de simples ornements, mais des témoignages vivants d'un art qui transcende le temps.",
      paragraph2:
        "    Depuis 1987, notre maison cultive cette philosophie où chaque pièce est pensée comme une œuvre d'art, où la beauté rencontre l'éternité. Dans nos ateliers, le temps s'arrête pour laisser place à la précision du geste, à la patience de l'artisan qui, tel un poète de la matière, transforme l'or et les pierres précieuses en émotions pures.",
    },
    // Featured Products
    featured: {
      title: "Nos créations signature",
      subtitle: "Découvrez quelques-unes de nos pièces d'exception",
      viewAll: "Voir toute notre collection",
      discover: "Découvrir cette pièce",
      products: {
        bracelet: "Bracelet Cuban Link",
        braceletDesc: "Or 18 carats avec fermoir serti de diamants",
        necklace: "Collier Luxe",
        necklaceDesc: "Or 18 carats avec maillons sertis de diamants",
        parure: "Parure Léopard",
        parureDesc:
          "Ensemble collier, bracelet et boucles d'oreilles en or 18 carats",
      },
    },
    // Contact Preview
    contactPreview: {
      title: "Nous contacter",
      description:
        "    Notre boutique vous accueille dans une ambiance chaleureuse au cœur de Ghardaïa. Nos conseillers se feront un plaisir de vous guider dans la découverte de nos collections et de vous accompagner dans le choix de pièces qui vous correspondent.",
      address: "Adresse",
      addressValue: "Rue Cheikh Ammi Said\nGhardaïa, Algérie",
      hours: "Horaires d'ouverture",
      cta: "Nous contacter",
      days: {
        sunday: "Dimanche",
        monday: "Lundi",
        tuesday: "Mardi",
        wednesday: "Mercredi",
        thursday: "Jeudi",
        friday: "Vendredi",
        saturday: "Samedi",
        closed: "Fermé",
      },
    },
    // About Page
    about: {
      title: "Notre Bijouterie",
      subtitle: "Une passion pour la joaillerie d'exception depuis 1987",
      passion: {
        title: "Une passion transmise de génération en génération",
        paragraph1:
          "    Fondée en 1987, Le Coin d'Or est née d'une vision : créer des bijoux d'exception qui traversent le temps et racontent une histoire. Notre maison perpétue un savoir-faire d'excellence, où chaque création est le fruit d'un travail minutieux et d'une quête incessante de perfection.",
        paragraph2:
          "    Notre atelier est le cœur battant de cette aventure, où nos artisans donnent vie à des pièces uniques. Chaque bijou qui sort de nos mains est le témoignage de notre engagement envers l'excellence et la beauté.",
        paragraph3:
          "    Aujourd'hui, Le Coin d'Or reste fidèle à ses valeurs fondatrices tout en embrassant l'innovation et la créativité contemporaine.",
      },
      journey: {
        title: "Notre parcours",
        subtitle: "Les moments clés qui ont façonné notre maison",
        timeline: {
          1987: {
            title: "Fondation de la bijouterie",
            description:
              "Création de notre première boutique au cœur de Ghardaïa.",
          },
          1995: {
            title: "Première collection signature",
            description:
              "Lancement de notre première collection qui établit notre réputation dans le monde de la joaillerie de luxe.",
          },
          2008: {
            title: "Nouveau showroom",
            description:
              "Inauguration de notre espace actuel, conçu comme un véritable écrin pour nos créations.",
          },
          2015: {
            title: "Excellence artisanale",
            description:
              "Reconnaissance de notre savoir-faire d'exception dans la joaillerie traditionnelle.",
          },
          2025: {
            title: "Le Coin d'Or aujourd'hui",
            description:
              "Une maison reconnue, fidèle à ses valeurs d'excellence, d'authenticité et d'innovation.",
          },
        },
      },
      expertise: {
        title: "Notre savoir-faire",
        paragraph1:
          "    Chez Le Coin d'Or, chaque bijou est le fruit d'un processus créatif minutieux, où l'excellence est recherchée à chaque étape. Du dessin initial à la sélection des pierres, en passant par le façonnage des métaux précieux, nos artisans joailliers mettent en œuvre des techniques ancestrales enrichies par l'innovation contemporaine.",
        paragraph2:
          "    La fabrication de nos bijoux fait appel à des compétences diverses et complémentaires : dessinateurs, modeleurs, sertisseurs, polisseurs... Chacun apporte son expertise pour donner vie à des pièces d'exception, où la perfection se trouve dans chaque détail.",
        paragraph3:
          "    Notre atelier est le gardien de ce savoir-faire unique, transmis de génération en génération et constamment enrichi par la recherche et l'innovation.",
      },
    },
    // Contact Page
    contact: {
      title: "Contact",
      subtitle:
        "Nous serions ravis de vous accueillir dans notre boutique ou de répondre à vos questions",
      info: "Informations",
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      hours: "Horaires d'ouverture",
      form: {
        title: "Envoyez-nous un message",
        name: "Nom",
        nameRequired: "Nom *",
        email: "Email",
        emailRequired: "Email *",
        phone: "Téléphone",
        message: "Message",
        messageRequired: "Message *",
        namePlaceholder: "Votre nom complet",
        emailPlaceholder: "votre.email@exemple.com",
        phonePlaceholder: "Votre numéro de téléphone",
        messagePlaceholder:
          "Décrivez votre demande, vos questions ou le type de bijou qui vous intéresse...",
        submit: "Envoyer le message",
        submitting: "Envoi en cours...",
        required: "* Champs obligatoires",
        success: "Message envoyé avec succès!",
        successDesc: "Nous vous répondrons dans les plus brefs délais.",
        errors: {
          nameRequired: "Le nom est requis",
          emailRequired: "L'email est requis",
          emailInvalid: "Veuillez entrer un email valide",
          messageRequired: "Le message est requis",
          general: "Une erreur est survenue. Veuillez réessayer.",
        },
      },
    },
    // Gallery Page
    gallery: {
      title: "Galerie",
      subtitle: "Découvrez nos créations exceptionnelles en or 18 carats",
      custom: {
        title: "Une création sur mesure",
        description:
          "    Vous souhaitez une pièce unique, créée spécialement pour vous ou pour offrir? Nos artisans joailliers peuvent réaliser le bijou de vos rêves, en parfaite adéquation avec vos envies et votre sensibilité.",
        cta: "Prendre rendez-vous",
      },
      products: {
        ring1: "Bague San Pierre",
        ring2: "Bague Diamant",
        parure1: "Parure Léopard",
        parure2: "Parure Cuban Link",
      },
    },
    // Footer
    footer: {
      description:
        "    Bijouterie de luxe perpétuant un savoir-faire d'exception depuis 1987. Des créations uniques et intemporelles, façonnées avec passion par nos artisans joailliers.",
      explore: "Explorez",
      boutique: "Boutique Ghardaïa",
      rights: "Tous droits réservés.",
      createdBy: "Site web créé par",
    },
  },
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      gallery: "المعرض",
      about: "متجر المجوهرات",
      contact: "اتصل بنا",
    },
    // Hero Section
    hero: {
      title: "فن صناعة المجوهرات الاستثنائية",
      subtitle: "إبداعات راقية وخالدة، مصنوعة بشغف لتبرز أناقتك الطبيعية.",
      cta: "اكتشف معرضنا",
      discover: "اكتشف",
    },
    // Craftsmanship Section
    craftsmanship: {
      title: "فن الحرفية",
      paragraph1:
        "    في صندوق متجرنا الثمين، تحكي كل قطعة مجوهرات قصة عمرها آلاف السنين، قصة التحالف بين المادة النبيلة والحركة المثالية. إبداعاتنا ليست مجرد زينة بسيطة، بل شهادات حية لفن يتجاوز الزمن.",
      paragraph2:
        "    منذ عام 1987، تزرع دارنا هذه الفلسفة حيث كل قطعة مفكر فيها كعمل فني، حيث يلتقي الجمال بالأبدية. في ورشنا، يتوقف الزمن ليفسح المجال لدقة الحركة، لصبر الحرفي الذي، مثل شاعر المادة، يحول الذهب والأحجار الكريمة إلى مشاعر خالصة.",
    },
    // Featured Products
    featured: {
      title: "إبداعاتنا المميزة",
      subtitle: "اكتشف بعض قطعنا الاستثنائية",
      viewAll: "عرض كامل مجموعتنا",
      discover: "اكتشف هذه القطعة",
      products: {
        bracelet: "سوار كوبان لينك",
        braceletDesc: "ذهب عيار 18 قيراط مع إغلاق مرصع بالماس",
        necklace: "عقد فاخر",
        necklaceDesc: "ذهب عيار 18 قيراط مع حلقات مرصعة بالماس",
        parure: "طقم النمر",
        parureDesc: "مجموعة عقد وسوار وأقراط من الذهب عيار 18 قيراط",
      },
    },
    // Contact Preview
    contactPreview: {
      title: "اتصل بنا",
      description:
        "    يرحب بكم متجرنا في أجواء دافئة في قلب غرداية. سيسعد مستشارونا بإرشادكم في اكتشاف مجموعاتنا ومرافقتكم في اختيار القطع التي تناسبكم.",
      address: "العنوان",
      addressValue: "شارع الشيخ عمي سعيد\nغرداية، الجزائر",
      hours: "ساعات العمل",
      cta: "اتصل بنا",
      days: {
        sunday: "الأحد",
        monday: "الاثنين",
        tuesday: "الثلاثاء",
        wednesday: "الأربعاء",
        thursday: "الخميس",
        friday: "الجمعة",
        saturday: "السبت",
        closed: "مغلق",
      },
    },
    // About Page
    about: {
      title: "متجر المجوهرات",
      subtitle: "شغف بالمجوهرات الاستثنائية منذ عام 1987",
      passion: {
        title: "شغف ينتقل من جيل إلى جيل",
        paragraph1:
          "    تأسست الكوين دور عام 1987، ولدت من رؤية: إنشاء مجوهرات استثنائية تتجاوز الزمن وتحكي قصة. تواصل دارنا حرفية التميز، حيث كل إبداع هو ثمرة عمل دقيق وسعي مستمر للكمال.",
        paragraph2:
          "    ورشتنا هي القلب النابض لهذه المغامرة، حيث يعطي حرفيونا الحياة لقطع فريدة. كل قطعة مجوهرات تخرج من أيدينا هي شاهد على التزامنا بالتميز والجمال.",
        paragraph3:
          "    اليوم، تبقى الكوين دور وفية لقيمها التأسيسية بينما تحتضن الابتكار والإبداع المعاصر.",
      },
      journey: {
        title: "رحلتنا",
        subtitle: "اللحظات الرئيسية التي شكلت دارنا",
        timeline: {
          1987: {
            title: "تأسيس المجوهرات",
            description: "إنشاء متجرنا الأول في قلب غرداية.",
          },
          1995: {
            title: "أول مجموعة مميزة",
            description:
              "إطلاق مجموعتنا الأولى التي أسست سمعتنا في عالم المجوهرات الفاخرة.",
          },
          2008: {
            title: "صالة عرض جديدة",
            description:
              "افتتاح مساحتنا الحالية، المصممة كصندوق حقيقي لإبداعاتنا.",
          },
          2015: {
            title: "التميز الحرفي",
            description:
              "الاعتراف بحرفيتنا الاستثنائية في المجوهرات التقليدية.",
          },
          2025: {
            title: "الكوين دور اليوم",
            description: "دار معترف بها، وفية لقيم التميز والأصالة والابتكار.",
          },
        },
      },
      expertise: {
        title: "حرفيتنا",
        paragraph1:
          "    في الكوين دور، كل قطعة مجوهرات هي ثمرة عملية إبداعية دقيقة، حيث يُسعى للتميز في كل خطوة. من الرسم الأولي إلى اختيار الأحجار، مروراً بتشكيل المعادن الثمينة، يطبق حرفيو المجوهرات لدينا تقنيات قديمة مُثراة بالابتكار المعاصر.",
        paragraph2:
          "    تصنيع مجوهراتنا يستدعي مهارات متنوعة ومتكاملة: رسامون، نمذجون، مرصعون، مصقلون... كل واحد يجلب خبرته لإعطاء الحياة لقطع استثنائية، حيث الكمال في كل تفصيل.",
        paragraph3:
          "    ورشتنا هي حارس هذه الحرفية الفريدة، المنقولة من جيل إلى جيل والمُثراة باستمرار بالبحث والابتكار.",
      },
    },
    // Contact Page
    contact: {
      title: "اتصل بنا",
      subtitle: "سنكون سعداء لاستقبالكم في متجرنا أو الإجابة على أسئلتكم",
      info: "المعلومات",
      address: "العنوان",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      hours: "ساعات العمل",
      form: {
        title: "أرسل لنا رسالة",
        name: "الاسم",
        nameRequired: "الاسم *",
        email: "البريد الإلكتروني",
        emailRequired: "البريد الإلكتروني *",
        phone: "الهاتف",
        message: "الرسالة",
        messageRequired: "الرسالة *",
        namePlaceholder: "اسمك الكامل",
        emailPlaceholder: "your.email@example.com",
        phonePlaceholder: "رقم هاتفك",
        messagePlaceholder: "صف طلبك أو أسئلتك أو نوع المجوهرات التي تهمك...",
        submit: "إرسال الرسالة",
        submitting: "جاري الإرسال...",
        required: "* حقول مطلوبة",
        success: "تم إرسال الرسالة بنجاح!",
        successDesc: "سنرد عليك في أقرب وقت ممكن.",
        errors: {
          nameRequired: "الاسم مطلوب",
          emailRequired: "البريد الإلكتروني مطلوب",
          emailInvalid: "يرجى إدخال بريد إلكتروني صحيح",
          messageRequired: "الرسالة مطلوبة",
          general: "حدث خطأ. يرجى المحاولة مرة أخرى.",
        },
      },
    },
    // Gallery Page
    gallery: {
      title: "المعرض",
      subtitle: "اكتشف إبداعاتنا الاستثنائية من الذهب عيار 18 قيراط",
      custom: {
        title: "إبداع حسب الطلب",
        description:
          "    هل تريد قطعة فريدة، مصنوعة خصيصاً لك أو للإهداء؟ يمكن لحرفيي المجوهرات لدينا تحقيق مجوهرات أحلامك، في تناغم تام مع رغباتك وحساسيتك.",
        cta: "حجز موعد",
      },
      products: {
        ring1: "خاتم سان بيير",
        ring2: "خاتم الماس",
        parure1: "طقم النمر",
        parure2: "طقم كوبان لينك",
      },
    },
    // Footer
    footer: {
      description:
        "    متجر مجوهرات فاخر يواصل حرفية استثنائية منذ عام 1987. إبداعات فريدة وخالدة، مصنوعة بشغف من قبل حرفيي المجوهرات لدينا.",
      explore: "استكشف",
      boutique: "متجر غرداية",
      rights: "جميع الحقوق محفوظة.",
      createdBy: "تم إنشاء الموقع بواسطة",
    },
  },
};

function getTranslation(lang) {
  return translations[lang] || translations.ar;
}

function getDirection(lang) {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

function getAlternateLanguage(currentLang) {
  return currentLang === 'ar' ? 'fr' : 'ar';
}

function getCurrentLang(url) {
  const pathname = url.pathname;
  return pathname.startsWith('/fr') ? 'fr' : 'ar';
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, lang = getCurrentLang(Astro2.url) } = Astro2.props;
  const direction = getDirection(lang);
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(["<html", "", '> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>', '</title><!-- Preconnect for fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"', '><!-- Hreflang --><link rel="alternate" hreflang="ar"', '><link rel="alternate" hreflang="fr"', '><link rel="alternate" hreflang="x-default"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:locale"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', `><!-- Structured Data --><script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Le Coin d'Or",
        "description": "Bijouterie de luxe \xE0 Gharda\xEFa - Cr\xE9ations d'exception en or 18 carats",
        "url": "https://lecoin-dor.com",
        "telephone": "+213-XX-XX-XX-XX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rue Cheikh Ammi Said",
          "addressLocality": "Gharda\xEFa",
          "addressCountry": "DZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "32.4910",
          "longitude": "3.6795"
        },
        "openingHours": [
          "Su-Th 09:00-19:00",
          "Sa 09:00-19:00"
        ],
        "priceRange": "$$$",
        "servesCuisine": "Jewelry",
        "foundingDate": "1987"
      }
    <\/script>`, '</head> <body class="bg-cream text-dark"> ', " ", " </body> </html>"])), addAttribute(lang, "lang"), addAttribute(direction, "dir"), addAttribute(description, "content"), title, addAttribute(Astro2.url.href, "href"), addAttribute(`${Astro2.site}${currentPath.replace("/fr", "")}`, "href"), addAttribute(`${Astro2.site}/fr${currentPath.replace("/fr", "")}`, "href"), addAttribute(`${Astro2.site}${currentPath.replace("/fr", "")}`, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url.href, "content"), addAttribute(lang === "ar" ? "ar_DZ" : "fr_DZ", "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = getCurrentLang(Astro2.url);
  const t = getTranslation(lang);
  const alternateLang = getAlternateLanguage(lang);
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="fixed top-0 z-50 w-full bg-cream border-b border-beige-dark transition-transform duration-300 ease-in-out"> <nav class="container mx-auto px-4 py-4"> <div class="flex items-center justify-between"> <!-- Logo --> <a${addAttribute(lang === "ar" ? "/" : "/fr", "href")} class="flex items-center hover:opacity-80 transition-opacity"> <img src="/logo_bijouterie-fond transparent.png" alt="Le Coin d'Or - Bijouterie" class="h-12 w-auto" loading="eager"> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center space-x-8 rtl:space-x-reverse"> <a${addAttribute(lang === "ar" ? "/" : "/fr", "href")} class="text-dark hover:text-gold transition-colors font-medium"> ${t.nav.home} </a> <a${addAttribute(lang === "ar" ? "/gallery" : "/fr/gallery", "href")} class="text-dark hover:text-gold transition-colors font-medium"> ${t.nav.gallery} </a> <a${addAttribute(lang === "ar" ? "/about" : "/fr/about", "href")} class="text-dark hover:text-gold transition-colors font-medium"> ${t.nav.about} </a> <a${addAttribute(lang === "ar" ? "/contact" : "/fr/contact", "href")} class="text-dark hover:text-gold transition-colors font-medium"> ${t.nav.contact} </a> <!-- Language Switcher --> <button onclick="switchLanguage()" class="bg-gold text-white px-4 py-2 rounded-lg hover:bg-copper transition-colors font-medium"${addAttribute(`Switch to ${alternateLang === "ar" ? "Arabic" : "French"}`, "aria-label")}> ${alternateLang === "ar" ? "\u0639\u0631\u0628\u064A" : "Fran\xE7ais"} </button> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden p-2 text-dark hover:text-gold transition-colors" aria-label="Toggle mobile menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="hidden md:hidden mt-4 pt-4 border-t border-beige-dark"> <div class="flex flex-col space-y-3"> <a${addAttribute(lang === "ar" ? "/" : "/fr", "href")} class="text-dark hover:text-gold transition-colors font-medium py-2"> ${t.nav.home} </a> <a${addAttribute(lang === "ar" ? "/gallery" : "/fr/gallery", "href")} class="text-dark hover:text-gold transition-colors font-medium py-2"> ${t.nav.gallery} </a> <a${addAttribute(lang === "ar" ? "/about" : "/fr/about", "href")} class="text-dark hover:text-gold transition-colors font-medium py-2"> ${t.nav.about} </a> <a${addAttribute(lang === "ar" ? "/contact" : "/fr/contact", "href")} class="text-dark hover:text-gold transition-colors font-medium py-2"> ${t.nav.contact} </a> <button onclick="switchLanguage()" class="bg-gold text-white px-4 py-2 rounded-lg hover:bg-copper transition-colors font-medium text-left"> ${alternateLang === "ar" ? "\u0639\u0631\u0628\u064A" : "Fran\xE7ais"} </button> </div> </div> </nav> </header> ${renderScript($$result, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getCurrentLang(Astro2.url);
  const t = getTranslation(lang);
  return renderTemplate`${maybeRenderHead()}<footer class="bg-footer-bg border-t border-beige-dark"> <div class="container mx-auto px-4 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Brand --> <div class="space-y-4"> <div class="flex items-center"> <img src="/logo_bijouterie-fond transparent.png" alt="Le Coin d'Or - Bijouterie" class="h-16 w-auto" loading="lazy"> </div> <p class="text-text-light leading-relaxed text-justify"> ${t.footer.description} </p> </div> <!-- Quick Links --> <div class="space-y-4"> <h4 class="text-lg font-semibold text-dark">${t.footer.explore}</h4> <nav class="flex flex-col space-y-2"> <a${addAttribute(lang === "ar" ? "/" : "/fr", "href")} class="text-text-light hover:text-gold transition-colors"> ${t.nav.home} </a> <a${addAttribute(lang === "ar" ? "/gallery" : "/fr/gallery", "href")} class="text-text-light hover:text-gold transition-colors"> ${t.nav.gallery} </a> <a${addAttribute(lang === "ar" ? "/about" : "/fr/about", "href")} class="text-text-light hover:text-gold transition-colors"> ${t.nav.about} </a> <a${addAttribute(lang === "ar" ? "/contact" : "/fr/contact", "href")} class="text-text-light hover:text-gold transition-colors"> ${t.nav.contact} </a> </nav> </div> <!-- Contact Info --> <div class="space-y-4"> <h4 class="text-lg font-semibold text-dark">${t.footer.boutique}</h4> <div class="space-y-3 text-text-light"> <!-- Address --> <div class="flex items-start space-x-3 rtl:space-x-reverse"> <svg class="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <a href="https://maps.google.com/?q=Rue+Cheikh+Ammi+Said,+Ghardaïa,+Algérie" target="_blank" rel="noopener noreferrer" class="hover:text-gold transition-colors"> ${lang === "fr" ? "Rue Al Cheikh Ami Said" : "\u0634\u0627\u0631\u0639 \u0627\u0644\u0634\u064A\u062E \u0639\u0645\u064A \u0633\u0639\u064A\u062F"}<br> ${lang === "fr" ? "Gharda\xEFa, Alg\xE9rie" : "\u063A\u0631\u062F\u0627\u064A\u0629\u060C \u0627\u0644\u062C\u0632\u0627\u0626\u0631"} </a> </div> <!-- Phone --> <div class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="tel:+213672940307" class="hover:text-gold transition-colors">0672 94 03 07</a> </div> <!-- Email --> <div class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a href="mailto:bijouterielecoindor6@gmail.com" class="hover:text-gold transition-colors">bijouterielecoindor6@gmail.com</a> </div> <!-- Facebook --> <div class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> <a href="https://www.facebook.com/profile.php?id=100091376662698" target="_blank" rel="noopener noreferrer" class="hover:text-gold transition-colors">Facebook</a> </div> </div> </div> </div> <!-- Bottom Bar --> <div class="border-t border-beige-dark mt-8 pt-8"> <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> <p class="text-text-light text-center md:text-left">
© 2025 Le Coin d'Or. ${t.footer.rights} </p> <p class="text-text-light text-center md:text-right"> ${t.footer.createdBy} <a href="https://zidnadigital.com/" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-copper transition-colors font-medium ml-1">
Zidna Digital
</a> </p> </div> </div> </div> </footer>`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/Bijouterie/src/components/Footer.astro", void 0);

export { $$Header as $, getTranslation as a, $$Footer as b, $$Layout as c, getCurrentLang as g };
