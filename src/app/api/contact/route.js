// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message, phone } = await req.json(); // phone is correctly destructured

  // Basic validation (optional but good practice)
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields: name, email, or message' }), { status: 400 });
  }
  // You might want to add more specific validation for email format, phone format etc.

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail App Password (not your regular password)
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
    from: `"${name}" <${process.env.GMAIL_USER}>`, // Sender address (shows your name and your Gmail)
    to: process.env.GMAIL_USER, // List of receivers (where you want to receive the email)
    replyTo: email, // The user's email, so you can reply directly to them
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
    // It's good to log the actual error for debugging
    // but don't expose too much detail to the client
    return new Response(JSON.stringify({ error: 'Failed to send email. Please try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}