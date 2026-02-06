import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.toov.com.tr",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "no-reply@toov.com.tr",
    pass: process.env.SMTP_PASSWORD,
  },
});

const FROM_NAME = "Özel Boğaziçi İlgi Koleji Çekmeköy";
const FROM_EMAIL = process.env.SMTP_USER || "no-reply@toov.com.tr";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@ozelilgiokullari.k12.tr";
const SCHOOL_PHONE = "0216 642 8 642";
const SCHOOL_ADDRESS = "Mimar Sinan, Yeşil Kayalar Cd. No: 46-48, Çekmeköy/İstanbul";

function baseTemplate(content: string): string {
  return `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%);padding:30px 40px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;letter-spacing:0.5px;">
                Özel Boğaziçi İlgi Koleji
              </h1>
              <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:13px;">Çekmeköy Kampüsü</p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:35px 40px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;padding:25px 40px;border-top:1px solid #e2e8f0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:12px;color:#64748b;line-height:1.6;">
                    <strong style="color:#334155;">${FROM_NAME}</strong><br>
                    📍 ${SCHOOL_ADDRESS}<br>
                    📞 ${SCHOOL_PHONE}<br>
                    ✉️ ${ADMIN_EMAIL}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <p style="color:#94a3b8;font-size:11px;margin-top:20px;text-align:center;">
          Bu e-posta ${FROM_NAME} tarafından gönderilmiştir.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

interface PreRegistrationData {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  notes?: string | null;
}

interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendPreRegistrationConfirmation(data: PreRegistrationData): Promise<void> {
  const customerContent = `
    <h2 style="color:#1e3a5f;margin:0 0 8px;font-size:20px;">Ön Kayıt Başvurunuz Alındı ✓</h2>
    <p style="color:#64748b;margin:0 0 25px;font-size:14px;line-height:1.6;">
      Sayın <strong>${data.parentName}</strong>, ön kayıt başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
    </p>
    
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f7ff;border-radius:10px;padding:20px;margin-bottom:25px;">
      <tr>
        <td>
          <h3 style="color:#1e3a5f;margin:0 0 15px;font-size:15px;">📋 Başvuru Bilgileriniz</h3>
          <table width="100%" cellpadding="6" cellspacing="0">
            <tr>
              <td style="color:#64748b;font-size:13px;width:140px;padding:6px 0;border-bottom:1px solid #e2e8f0;">Öğrenci Adı:</td>
              <td style="color:#1e293b;font-size:13px;font-weight:600;padding:6px 0;border-bottom:1px solid #e2e8f0;">${data.studentName}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:6px 0;border-bottom:1px solid #e2e8f0;">Veli Adı:</td>
              <td style="color:#1e293b;font-size:13px;font-weight:600;padding:6px 0;border-bottom:1px solid #e2e8f0;">${data.parentName}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:6px 0;border-bottom:1px solid #e2e8f0;">Sınıf Seviyesi:</td>
              <td style="color:#1e293b;font-size:13px;font-weight:600;padding:6px 0;border-bottom:1px solid #e2e8f0;">${data.grade}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:6px 0;">Telefon:</td>
              <td style="color:#1e293b;font-size:13px;font-weight:600;padding:6px 0;">${data.phone}</td>
            </tr>
            ${data.notes ? `
            <tr>
              <td style="color:#64748b;font-size:13px;padding:6px 0;border-top:1px solid #e2e8f0;">Notlar:</td>
              <td style="color:#1e293b;font-size:13px;padding:6px 0;border-top:1px solid #e2e8f0;">${data.notes}</td>
            </tr>` : ""}
          </table>
        </td>
      </tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4;border-radius:10px;padding:18px 20px;margin-bottom:20px;border-left:4px solid #22c55e;">
      <tr>
        <td>
          <p style="color:#166534;margin:0;font-size:13px;line-height:1.6;">
            <strong>Sonraki Adımlar:</strong><br>
            Kayıt danışmanımız en geç <strong>24 saat</strong> içinde sizi arayarak detaylı bilgi verecek ve kampüs gezisi için randevu oluşturacaktır.
          </p>
        </td>
      </tr>
    </table>

    <p style="color:#94a3b8;font-size:12px;margin:20px 0 0;line-height:1.5;">
      Herhangi bir sorunuz olursa bizi <strong>${SCHOOL_PHONE}</strong> numarasından arayabilir veya <strong>${ADMIN_EMAIL}</strong> adresine e-posta gönderebilirsiniz.
    </p>`;

  const adminContent = `
    <h2 style="color:#1e3a5f;margin:0 0 8px;font-size:20px;">🔔 Yeni Ön Kayıt Başvurusu</h2>
    <p style="color:#64748b;margin:0 0 25px;font-size:14px;">Yeni bir ön kayıt başvurusu alındı. Detaylar aşağıdadır:</p>
    
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#fff7ed;border-radius:10px;padding:20px;margin-bottom:20px;border-left:4px solid #f97316;">
      <tr>
        <td>
          <table width="100%" cellpadding="6" cellspacing="0">
            <tr>
              <td style="color:#64748b;font-size:13px;width:140px;padding:8px 0;border-bottom:1px solid #fed7aa;">Öğrenci Adı:</td>
              <td style="color:#1e293b;font-size:14px;font-weight:700;padding:8px 0;border-bottom:1px solid #fed7aa;">${data.studentName}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:8px 0;border-bottom:1px solid #fed7aa;">Veli Adı:</td>
              <td style="color:#1e293b;font-size:14px;font-weight:700;padding:8px 0;border-bottom:1px solid #fed7aa;">${data.parentName}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:8px 0;border-bottom:1px solid #fed7aa;">Sınıf Seviyesi:</td>
              <td style="color:#1e293b;font-size:14px;font-weight:700;padding:8px 0;border-bottom:1px solid #fed7aa;">${data.grade}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:8px 0;border-bottom:1px solid #fed7aa;">Telefon:</td>
              <td style="color:#1e293b;font-size:14px;font-weight:700;padding:8px 0;border-bottom:1px solid #fed7aa;">
                <a href="tel:${data.phone}" style="color:#2563eb;text-decoration:none;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:8px 0;border-bottom:1px solid #fed7aa;">E-posta:</td>
              <td style="color:#1e293b;font-size:14px;font-weight:700;padding:8px 0;border-bottom:1px solid #fed7aa;">
                <a href="mailto:${data.email}" style="color:#2563eb;text-decoration:none;">${data.email}</a>
              </td>
            </tr>
            ${data.notes ? `
            <tr>
              <td style="color:#64748b;font-size:13px;padding:8px 0;">Notlar:</td>
              <td style="color:#1e293b;font-size:13px;padding:8px 0;">${data.notes}</td>
            </tr>` : ""}
          </table>
        </td>
      </tr>
    </table>

    <p style="color:#64748b;font-size:12px;margin:0;">
      ⏰ Başvuru Tarihi: <strong>${new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })}</strong>
    </p>`;

  await Promise.allSettled([
    transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: data.email,
      subject: "Ön Kayıt Başvurunuz Alındı - Özel Boğaziçi İlgi Koleji",
      html: baseTemplate(customerContent),
    }),
    transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `Yeni Ön Kayıt: ${data.studentName} - ${data.grade}`,
      html: baseTemplate(adminContent),
    }),
  ]);
}

export async function sendContactConfirmation(data: ContactData): Promise<void> {
  const customerContent = `
    <h2 style="color:#1e3a5f;margin:0 0 8px;font-size:20px;">Mesajınız Alındı ✓</h2>
    <p style="color:#64748b;margin:0 0 25px;font-size:14px;line-height:1.6;">
      Sayın <strong>${data.name}</strong>, iletişim formundan gönderdiğiniz mesaj tarafımıza ulaşmıştır. En kısa sürede size dönüş yapacağız.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f7ff;border-radius:10px;padding:20px;margin-bottom:20px;">
      <tr>
        <td>
          <h3 style="color:#1e3a5f;margin:0 0 12px;font-size:15px;">📋 Mesaj Detayları</h3>
          <table width="100%" cellpadding="6" cellspacing="0">
            <tr>
              <td style="color:#64748b;font-size:13px;width:100px;padding:6px 0;border-bottom:1px solid #e2e8f0;">Konu:</td>
              <td style="color:#1e293b;font-size:13px;font-weight:600;padding:6px 0;border-bottom:1px solid #e2e8f0;">${data.subject}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:6px 0;vertical-align:top;">Mesaj:</td>
              <td style="color:#1e293b;font-size:13px;padding:6px 0;line-height:1.5;">${data.message}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="color:#94a3b8;font-size:12px;margin:20px 0 0;line-height:1.5;">
      Acil durumlar için bizi <strong>${SCHOOL_PHONE}</strong> numarasından arayabilirsiniz.
    </p>`;

  const adminContent = `
    <h2 style="color:#1e3a5f;margin:0 0 8px;font-size:20px;">🔔 Yeni İletişim Formu Mesajı</h2>
    <p style="color:#64748b;margin:0 0 25px;font-size:14px;">Web sitesinden yeni bir iletişim formu mesajı alındı:</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#eff6ff;border-radius:10px;padding:20px;margin-bottom:20px;border-left:4px solid #3b82f6;">
      <tr>
        <td>
          <table width="100%" cellpadding="6" cellspacing="0">
            <tr>
              <td style="color:#64748b;font-size:13px;width:100px;padding:8px 0;border-bottom:1px solid #bfdbfe;">Ad Soyad:</td>
              <td style="color:#1e293b;font-size:14px;font-weight:700;padding:8px 0;border-bottom:1px solid #bfdbfe;">${data.name}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:8px 0;border-bottom:1px solid #bfdbfe;">E-posta:</td>
              <td style="color:#1e293b;font-size:14px;font-weight:700;padding:8px 0;border-bottom:1px solid #bfdbfe;">
                <a href="mailto:${data.email}" style="color:#2563eb;text-decoration:none;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:8px 0;border-bottom:1px solid #bfdbfe;">Telefon:</td>
              <td style="color:#1e293b;font-size:14px;font-weight:700;padding:8px 0;border-bottom:1px solid #bfdbfe;">
                <a href="tel:${data.phone}" style="color:#2563eb;text-decoration:none;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:8px 0;border-bottom:1px solid #bfdbfe;">Konu:</td>
              <td style="color:#1e293b;font-size:14px;font-weight:600;padding:8px 0;border-bottom:1px solid #bfdbfe;">${data.subject}</td>
            </tr>
            <tr>
              <td style="color:#64748b;font-size:13px;padding:8px 0;vertical-align:top;">Mesaj:</td>
              <td style="color:#1e293b;font-size:13px;padding:8px 0;line-height:1.6;">${data.message}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="color:#64748b;font-size:12px;margin:0;">
      ⏰ Tarih: <strong>${new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })}</strong>
    </p>`;

  await Promise.allSettled([
    transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: data.email,
      subject: "Mesajınız Alındı - Özel Boğaziçi İlgi Koleji",
      html: baseTemplate(customerContent),
    }),
    transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `İletişim Formu: ${data.subject} - ${data.name}`,
      html: baseTemplate(adminContent),
    }),
  ]);
}
