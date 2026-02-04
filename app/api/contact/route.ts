import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { companyInfo } from '@/lib/data';
import { services } from '@/lib/data';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json(
      { error: 'Configuration email manquante. Contactez l\'administrateur.' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, email, message, service } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nom, email et message sont requis.' },
        { status: 400 }
      );
    }

    const serviceLabel = service
      ? services.find((s) => s.id === service)?.title || service
      : 'Non précisé';

    const emailHtml = `
      <h2>Nouveau message depuis le formulaire de contact</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Service recherché :</strong> ${serviceLabel}</p>
      <h3>Message :</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Envoyé depuis le site AIXecute</em></p>
    `;

    const { error } = await resend.emails.send({
      from: 'AIXecute Contact <onboarding@resend.dev>',
      to: [companyInfo.email],
      replyTo: email,
      subject: `[AIXecute] Nouveau message de ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Échec de l\'envoi du message. Réessayez plus tard.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Réessayez plus tard.' },
      { status: 500 }
    );
  }
}
