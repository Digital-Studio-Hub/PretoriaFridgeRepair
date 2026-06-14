import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { sendAdminNotification, sendCustomerConfirmation } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
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

      const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "solidwendystec@gmail.com";
      const adminResponse = await sendAdminNotification({
        name,
        email,
        phone,
        service,
        message,
        adminEmail: ADMIN_EMAIL,
      });

      const customerResponse = await sendCustomerConfirmation({
        name,
        email,
        service,
        message,
      });

      // Even if one email fails, we consider it a success if at least one was sent
      if (adminResponse || customerResponse) {
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
