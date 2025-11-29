import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { formType, name, email, message, phone, company, projectType, budget, timeline, description } = req.body;

  try {
    // Create a transporter using Gmail
    // Note: You'll need to set up environment variables for this to work
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let emailSubject;
    let emailBody;

    if (formType === "contact") {
      emailSubject = `New Contact Form Submission from ${name}`;
      emailBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;
    } else if (formType === "services") {
      emailSubject = `New Services Inquiry from ${name}`;
      emailBody = `
        <h2>New Services Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Project Description:</strong></p>
        <p>${description}</p>
      `;
    }

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "yoni7022@gmail.com",
      subject: emailSubject,
      html: emailBody,
      replyTo: email,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email", error: error.message });
  }
}
