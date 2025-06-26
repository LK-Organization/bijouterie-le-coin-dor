export const prerender = false;
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  // 1) Parser le JSON (Astro/util-requests utilise Undici sous le capot)
  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Corps JSON invalide ou vide" }),
      { status: 400 }
    );
  }

  // 2) Validation minimale
  const { name, email, message, phone } = data;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Champs requis manquants" }), {
      status: 400,
    });
  }

  // 3) Préparer le transporteur Nodemailer (depuis tes env vars)
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: process.env.MAIL_SECURE === "true",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  // 4) Envoi du mail
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
      `,
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
