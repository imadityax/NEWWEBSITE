import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ validation
    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        error: "All fields are required",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ MAIL TO YOU
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Contact Message - ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    // ✅ AUTO REPLY TO USER
    await transporter.sendMail({
      from: `"Aaruchudar Support" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${name},</p>
        <p>We’ve received your message and will get back to you shortly.</p>
        <br/>
        <p>— Aaruchudar Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: "Server error",
    });
  }
}