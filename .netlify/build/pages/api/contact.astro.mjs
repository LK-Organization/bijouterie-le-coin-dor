import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Corps JSON invalide ou vide" }),
      { status: 400 }
    );
  }
  const { name, email, message, phone } = data;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Champs requis manquants" }), {
      status: 400
    });
  }
  const transporter = nodemailer.createTransport({
    host: "mail77.lwspanel.com",
    port: Number("465"),
    secure: true,
    auth: {
      user: "contact@le-coin-dor.com",
      pass: "z3yJd5623@Kjhsd"
    }
  });
  try {
    await transporter.sendMail({
      from: "contact@le-coin-dor.com",
      to: "contact@le-coin-dor.com",
      subject: "📬 Nouveau message depuis le formulaire",
      text: message,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
        <p><strong>Message :</strong><br/>${message}</p>
      `
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erreur d'envoi:", err);
    return new Response(
      JSON.stringify({ error: "Échec de l’envoi de l’email" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
