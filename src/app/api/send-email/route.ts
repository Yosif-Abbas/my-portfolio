import nodemailer from 'nodemailer';
import pug from 'pug';
import { convert } from 'html-to-text';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { name, message, email } = await req.json();

    const templatePath = path.join(process.cwd(), 'src/emails/message.pug');
    const html = pug.renderFile(templatePath, {
      title: 'Website Contact',
      name,
      email,
      message,
    });

    console.log('env: ', process.env.SMTP_USER, process.env.SMTP_PASS, process.env.RECEIVER_EMAIL);

    // Use Ethereal for testing (replace with real SMTP later)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    const mailOptions = {
      from: '"Website Contact" <youssef.a10.2.2002@gmail.com>',
      to: process.env.RECEIVER_EMAIL,
      subject: 'Portfolio message from: ' + name,
      html,
      text: convert(html, { wordwrap: 80 }),
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent:', info.messageId);
    return Response.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
