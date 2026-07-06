import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          error: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    const inquiryId = `RED-${Date.now()}`;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ==========================
    // ADMIN EMAIL
    // ==========================

    await transporter.sendMail({
      from: `"REDSON Pharmaceuticals" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔔 New Website Inquiry | ${name}`,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style>

body{
margin:0;
padding:0;
background:#f5f7fb;
font-family:Arial,sans-serif;
}

.wrapper{
max-width:700px;
margin:auto;
background:#fff;
border-radius:15px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.header{
background:linear-gradient(135deg,#522E90,#6D49BA);
padding:35px;
text-align:center;
}

.header img{
height:60px;
}

.header h2{
color:#fff;
margin-top:20px;
}

.content{
padding:35px;
}

table{
width:100%;
border-collapse:collapse;
margin-top:25px;
}

td{
padding:14px;
border-bottom:1px solid #eee;
}

.label{
font-weight:bold;
background:#f8f8f8;
width:180px;
color:#522E90;
}

.message{
margin-top:25px;
padding:20px;
background:#faf8ff;
border-left:4px solid #522E90;
border-radius:8px;
line-height:1.7;
white-space:pre-wrap;
}

.footer{
padding:25px;
text-align:center;
background:#fafafa;
font-size:13px;
color:#777;
}

</style>

</head>

<body>

<div class="wrapper">

<div class="header">

<img src="https://redsongroup.in/logo-header-purple-temp-01.png">

<h2>New Website Inquiry</h2>

</div>

<div class="content">

<p><strong>Inquiry ID:</strong> ${inquiryId}</p>

<table>

<tr>
<td class="label">Name</td>
<td>${name}</td>
</tr>

<tr>
<td class="label">Email</td>
<td>
<a href="mailto:${email}">
${email}
</a>
</td>
</tr>

<tr>
<td class="label">Phone</td>
<td>${phone || "-"}</td>
</tr>

<tr>
<td class="label">Company</td>
<td>${company || "-"}</td>
</tr>

</table>

<div class="message">

<strong>Message</strong>

<br><br>

${message}

</div>

</div>

<div class="footer">

<strong>REDSON Pharmaceuticals Pvt. Ltd.</strong>

<br>

WHO-GMP Certified Pharmaceutical Manufacturing Company

<br><br>

https://redsongroup.in

</div>

</div>

</body>

</html>
`,
    });

    // ==========================
    // CUSTOMER EMAIL
    // ==========================

    await transporter.sendMail({
      from: `"REDSON Pharmaceuticals" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting REDSON Pharmaceuticals",

      html: `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<style>

body{
margin:0;
background:#f5f7fb;
font-family:Arial,sans-serif;
}

.wrapper{
max-width:700px;
margin:auto;
background:#fff;
border-radius:15px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.header{
background:linear-gradient(135deg,#522E90,#6D49BA);
padding:40px;
text-align:center;
}

.header img{
height:60px;
}

.content{
padding:40px;
line-height:1.8;
color:#334155;
}

.box{
margin:30px 0;
padding:20px;
background:#faf8ff;
border-left:4px solid #522E90;
border-radius:8px;
}

.button{
display:inline-block;
margin-top:25px;
padding:14px 28px;
background:#522E90;
color:white!important;
text-decoration:none;
border-radius:8px;
font-weight:bold;
}

.footer{
padding:25px;
text-align:center;
background:#fafafa;
font-size:13px;
color:#666;
}

</style>

</head>

<body>

<div class="wrapper">

<div class="header">

<img src="https://redsongroup.in/logo-header-purple-temp-01.png">

</div>

<div class="content">

<h2>Thank You, ${name}!</h2>

<p>

We appreciate your interest in
<strong>REDSON Pharmaceuticals Pvt. Ltd.</strong>

</p>

<p>

Your inquiry has been received successfully.

</p>

<div class="box">

<strong>Reference Number</strong>

<br><br>

${inquiryId}

<br><br>

Our business development team will review your inquiry and respond within one business day.

</div>

<p>

REDSON Pharmaceuticals is a trusted WHO-GMP Certified manufacturer specializing in tablets, capsules, injectables, liquid orals, eye drops, veterinary products, and export solutions.

</p>

<a
class="button"
href="https://redsongroup.in"
>

Visit Our Website

</a>

</div>

<div class="footer">

<strong>REDSON Pharmaceuticals Pvt. Ltd.</strong>

<br>

WHO-GMP Certified Pharmaceutical Manufacturing Company

<br><br>

https://redsongroup.in

</div>

</div>

</body>

</html>
`,
    });

    return Response.json({
      success: true,
      message: "Inquiry submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}