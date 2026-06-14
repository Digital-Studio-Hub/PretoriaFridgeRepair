import { Inbound } from "inboundemail";

const apiKey = process.env.INBOUND_API_KEY || "";

if (!apiKey) {
  console.warn("INBOUND_API_KEY not found -- emails will not be sent");
}

const client = apiKey ? new Inbound({ apiKey }) : null;

const FROM_ADDRESS = "Cledwyn from Lekker Network <cledwyn@lekker.network>";

type ContactEmailPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  adminEmail: string;
};

export async function sendAdminNotification({
  name,
  email,
  phone,
  service,
  message,
  adminEmail,
}: ContactEmailPayload): Promise<boolean> {
  if (!client) {
    console.error("Inbound email client is not configured");
    return false;
  }

  try {
    await client.emails.send({
      from: FROM_ADDRESS,
      to: adminEmail,
      subject: `New Repair Request: ${service} - From ${name}`,
      html: `
          <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #003B73; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0;">New Repair Request</h1>
            </div>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 0 0 8px 8px;">
              <h2 style="color: #003B73;">Customer Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${service}</td>
                </tr>
              </table>
              <h3 style="color: #003B73; margin-top: 20px;">Message</h3>
              <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #28C76F;">${message}</p>
              <div style="margin-top: 20px; padding: 15px; background: #28C76F; border-radius: 4px; text-align: center;">
                <a href="tel:${phone}" style="color: white; text-decoration: none; font-weight: bold;">Call Customer: ${phone}</a>
              </div>
            </div>
          </body>
          </html>
        `,
    });
    return true;
  } catch (error) {
    console.error("Inbound admin email error:", error);
    return false;
  }
}

type CustomerEmailPayload = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export async function sendCustomerConfirmation({
  name,
  email,
  service,
  message,
}: CustomerEmailPayload): Promise<boolean> {
  if (!client) {
    console.error("Inbound email client is not configured");
    return false;
  }

  try {
    await client.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "Thank You for Contacting Pretoria Fridge Repairs",
      html: `
          <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #003B73; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0;">Thank You!</h1>
            </div>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 0 0 8px 8px;">
              <p>Dear ${name},</p>
              <p>Thank you for contacting Pretoria Fridge Repairs. We have received your request for <strong>${service}</strong> and will get back to you as soon as possible.</p>
              
              <div style="background: white; padding: 15px; border-radius: 4px; margin: 20px 0;">
                <h3 style="color: #003B73; margin-top: 0;">Your Request Details:</h3>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong> ${message}</p>
              </div>

              <p>For faster assistance, you can also reach us directly:</p>
              <ul>
                <li><strong>Call:</strong> <a href="tel:+27797822184">079 782 2184</a></li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.me/27797822184">079 782 2184</a></li>
              </ul>

              <p>We look forward to helping you!</p>
              <p>Best regards,<br><strong>Albert Mwansa</strong><br>Pretoria Fridge Repairs</p>
              
              <div style="margin-top: 20px; padding: 15px; background: #28C76F; border-radius: 4px; text-align: center;">
                <a href="https://wa.me/27797822184" style="color: white; text-decoration: none; font-weight: bold;">WhatsApp Us for Faster Response</a>
              </div>
            </div>
            <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
              <p>&copy; ${new Date().getFullYear()} Pretoria Fridge Repairs. All rights reserved.</p>
              <p>Fast, Reliable, Affordable Appliance Repairs in Pretoria</p>
            </div>
          </body>
          </html>
        `,
    });
    return true;
  } catch (error) {
    console.error("Inbound customer email error:", error);
    return false;
  }
}
