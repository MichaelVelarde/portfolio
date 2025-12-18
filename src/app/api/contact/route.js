
import nodemailer from 'nodemailer';
import { z } from 'zod';


const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters.' }).max(50),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().max(20).optional().or(z.literal('')), // Optional field
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters.' }).max(2000),
});


export async function POST(req) {
  //checking that the body from
  const body = await req.json();
  const result = contactFormSchema.safeParse(body);
  if (!result.success) {
    const errorMessages = result.error.issues.map(issue => issue.message).join(' ');
    return new Response(JSON.stringify({ error: errorMessages }), { status: 400 });
  }
  // the value state is a honeypot , should be empty ,  so lie to the bot and do nothing. 
  if (body.state !=="") {
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), { status: 200 });
  }

  const { name, email, message, phone } = result.data;

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS, 
    },
  });

  // Construct email content
  const mailSubject = `New Contact Form Submission from ${name}`;

  const mailText = `
    You have a new contact form submission:
    --------------------------------------
    Name: ${name}
    Email: ${email}
    ${phone ? `Phone: ${phone}` : 'Phone: Not provided'}
    --------------------------------------
    Message:
    ${message}
  `;

  const mailHtml = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 600px; margin: 20px auto; }
          h2 { color: #333; }
          p { margin-bottom: 10px; }
          strong { color: #555; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`, 
    to: process.env.GMAIL_USER, 
    replyTo: email, 
    subject: mailSubject,
    text: mailText,
    html: mailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Nodemailer error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email. Please try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

}