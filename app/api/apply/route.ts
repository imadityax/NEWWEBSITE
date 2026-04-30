import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const resumeLink = formData.get("resumeLink") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    // ✅ validation
    if (!name || !email) {
      return NextResponse.json({
        success: false,
        error: "Missing required fields",
      });
    }

    if (!file && !resumeLink) {
      return NextResponse.json({
        success: false,
        error: "Resume required",
      });
    }

    // file handling
    let attachments: any[] = [];

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: file.name,
        content: buffer,
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

    // ✅ MAIN MAIL (to you)
    await transporter.sendMail({
      from: `"Careers Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Application - ${name}`,
      html: `
        <h2>New Application Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Resume Link:</b> ${resumeLink || "Not provided"}</p>
        <p><b>Message:</b></p>
        <p>${message || "No message"}</p>
      `,
      attachments,
    });

    // ✅ AUTO-REPLY MAIL (to user)
    await transporter.sendMail({
      from: `"Aaruchudar Careers" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Application Received",
      html: `
        <h2>Thanks for applying!</h2>
        <p>Hi ${name},</p>
        <p>We’ve received your application. Our team will review it and get back to you soon.</p>
        <br/>
        <p>Best regards,<br/>Aaruchudar Team</p>
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