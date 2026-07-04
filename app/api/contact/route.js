import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'muhammadsaad5619@gmail.com',
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; border-radius: 12px; overflow: hidden; border: 1px solid rgba(6, 182, 212, 0.3);">
          <div style="background: linear-gradient(135deg, #06b6d4, #3b82f6); padding: 24px 32px;">
            <h1 style="color: #fff; margin: 0; font-size: 1.4rem;">📬 New Portfolio Message</h1>
          </div>
          <div style="padding: 32px;">
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(6, 182, 212, 0.06); border-left: 3px solid #06b6d4; border-radius: 0 8px 8px 0;">
              <p style="margin: 0 0 4px 0; color: #64748b; font-size: 0.85rem;">From</p>
              <p style="margin: 0; color: #f1f5f9; font-size: 1.05rem; font-weight: 600;">${name}</p>
            </div>
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(6, 182, 212, 0.06); border-left: 3px solid #06b6d4; border-radius: 0 8px 8px 0;">
              <p style="margin: 0 0 4px 0; color: #64748b; font-size: 0.85rem;">Email</p>
              <p style="margin: 0;"><a href="mailto:${email}" style="color: #22d3ee; text-decoration: none;">${email}</a></p>
            </div>
            <div style="padding: 16px; background: rgba(6, 182, 212, 0.06); border-left: 3px solid #06b6d4; border-radius: 0 8px 8px 0;">
              <p style="margin: 0 0 8px 0; color: #64748b; font-size: 0.85rem;">Message</p>
              <p style="margin: 0; color: #f1f5f9; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; border-top: 1px solid rgba(148, 163, 184, 0.1); text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 0.8rem;">Sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Your message has been sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
