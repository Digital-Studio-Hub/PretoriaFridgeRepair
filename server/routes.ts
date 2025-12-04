import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission with ZeptoMail
  app.post("/api/send-mail", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: result.error.flatten().fieldErrors 
        });
      }

      const { name, email, phone, service, message } = result.data;

      const ZEPTOMAIL_TOKEN = process.env.ZEPTOMAIL_TOKEN;
      const ZEPTOMAIL_FROM = process.env.ZEPTOMAIL_FROM || "noreply@pretoriafridgerepairs.co.za";
      const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "solidwendystec@gmail.com";

      if (!ZEPTOMAIL_TOKEN) {
        console.error("ZEPTOMAIL_TOKEN not configured");
        return res.status(500).json({ 
          success: false, 
          message: "Email service not configured" 
        });
      }

      // Send notification to admin
      const adminEmailPayload = {
        from: {
          address: ZEPTOMAIL_FROM,
          name: "Pretoria Fridge Repairs Website"
        },
        to: [
          {
            email_address: {
              address: ADMIN_EMAIL,
              name: "Pretoria Fridge Repairs Admin"
            }
          }
        ],
        subject: `New Repair Request: ${service} - From ${name}`,
        htmlbody: `
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
        `
      };

      // Send confirmation to customer
      const customerEmailPayload = {
        from: {
          address: ZEPTOMAIL_FROM,
          name: "Pretoria Fridge Repairs"
        },
        to: [
          {
            email_address: {
              address: email,
              name: name
            }
          }
        ],
        subject: "Thank You for Contacting Pretoria Fridge Repairs",
        htmlbody: `
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
        `
      };

      // Send admin notification
      const adminResponse = await fetch("https://api.zeptomail.com/v1.1/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": ZEPTOMAIL_TOKEN
        },
        body: JSON.stringify(adminEmailPayload)
      });

      if (!adminResponse.ok) {
        const errorText = await adminResponse.text();
        console.error("ZeptoMail admin email error:", errorText);
      }

      // Send customer confirmation
      const customerResponse = await fetch("https://api.zeptomail.com/v1.1/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": ZEPTOMAIL_TOKEN
        },
        body: JSON.stringify(customerEmailPayload)
      });

      if (!customerResponse.ok) {
        const errorText = await customerResponse.text();
        console.error("ZeptoMail customer email error:", errorText);
      }

      // Even if one email fails, we consider it a success if at least one was sent
      if (adminResponse.ok || customerResponse.ok) {
        return res.json({ 
          success: true, 
          message: "Your message has been sent successfully!" 
        });
      } else {
        return res.status(500).json({ 
          success: false, 
          message: "Failed to send email. Please try again or contact us directly." 
        });
      }

    } catch (error) {
      console.error("Email sending error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred. Please try again or contact us directly." 
      });
    }
  });

  // Sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = "https://pretoriafridgerepairs.co.za";
    const currentDate = new Date().toISOString().split('T')[0];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/gallery</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Robots.txt
  app.get("/robots.txt", (req, res) => {
    const robots = `User-agent: *
Allow: /

Sitemap: https://pretoriafridgerepairs.co.za/sitemap.xml

# Pretoria Fridge Repairs
# Fast, Reliable, Affordable Appliance Repairs in Pretoria`;

    res.set('Content-Type', 'text/plain');
    res.send(robots);
  });

  const httpServer = createServer(app);

  return httpServer;
}
