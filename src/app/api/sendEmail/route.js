import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  // Enhanced logging
  let body;
  try {
    body = await req.json();
  } catch (err) {
    console.log(err);

    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  console.log("body123", body);

  let emailContent;

  if (body.formType === 'contactUS') {
    const { name, businessName, email, mobile, message } = body;
    if (!name || !email || !businessName) {
      return NextResponse.json(
        { error: "Name, email, or business name are required." },
        { status: 400 }
      );
    }
    console.log("body", body);

    emailContent = `
            📩 New Contact Request

            Name: ${name}
            Business Name: ${businessName || "-"}
            Email: ${email}
            Mobile: ${mobile || "-"}

            Message:
            ${message}
        `;

    console.log("emailContent", emailContent);

  } else if (body.formType === 'sampleRequest') {
    const {
      name,
      businessName,
      email,
      mobile,
      website,
      address,
      message,
      selectedProducts
    } = body;

    if (!selectedProducts || !Array.isArray(selectedProducts) || selectedProducts.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one product." },
        { status: 400 }
      );
    }
    const productsList = selectedProducts.map(product => `- ${product}`).join('\n');

    emailContent = `
            📦 New Sample Request

            Name: ${name}
            Business Name: ${businessName}
            Email: ${email}
            Mobile: ${mobile}
            Website: ${website || "-"}
            Address: ${address}

            Selected Products:
            ${productsList}

            Additional Information:
            ${message || ""}
        `;
  }

  try {
    // Check if email password is configured
    if (!process.env.NEXT_PUBLIC_EMAIL_PASSWORD) {
      console.error("NEXT_PUBLIC_EMAIL_PASSWORD environment variable is not set");
      return NextResponse.json(
        { error: "Email configuration missing" },
        { status: 500 }
      );
    }
    console.log("process.env.NEXT_PUBLIC_SEND_EMAIL", process.env.NEXT_PUBLIC_SEND_EMAIL);
    console.log("process.env.NEXT_PUBLIC_EMAIL_PASSWORD", process.env.NEXT_PUBLIC_EMAIL_PASSWORD);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_SEND_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });
    console.log("transporter", transporter);

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_PASSWORD, // Replace with sender email
      to: "khushal@indianfoodtech.in", // Replace with recipient email
      replyTo: body.email,
      subject: body.formType === 'contactUS' ? `Contact Request from ${body.name}` : `Sample Request from ${body.businessName}`,
      text: emailContent,
    };
    console.log("mailOptions123", mailOptions);

    await transporter.sendMail(mailOptions);
    console.log("mailOptions", mailOptions);

    return NextResponse.json(
      { success: true, message: "Sample request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }

    );
  }
}