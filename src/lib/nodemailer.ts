import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendRoleUpdateEmail = async (userEmail: string, userName: string, newRole: string) => {
    const roleColors: Record<string, string> = {
        admin: "#8b5cf6", // Purple
        provider: "#3b82f6", // Blue
        user: "#f97316" // Orange
    };

    const roleLabel: Record<string, string> = {
        admin: "Administrator",
        provider: "Pro Meal Provider",
        user: "Community Member"
    };

    const color = roleColors[newRole] || "#f97316";
    const label = roleLabel[newRole] || newRole;

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            .body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 40px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 60px 40px; text-align: center; }
            .logo { font-size: 32px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: -2px; }
            .content { padding: 60px 50px; text-align: center; }
            .badge { display: inline-block; padding: 12px 30px; background-color: ${color}20; color: ${color}; border-radius: 20px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 2px; margin: 30px 0; }
            .footer { padding: 40px; background-color: #f1f5f9; text-align: center; font-size: 14px; color: #94a3b8; }
            .h1 { margin: 0; font-size: 40px; font-weight: 900; color: #0f172a; letter-spacing: -2px; }
            .p { line-height: 1.8; color: #64748b; font-size: 16px; margin-top: 20px; }
            .btn { display: inline-block; padding: 22px 50px; background-color: #0f172a; color: #ffffff; text-decoration: none; border-radius: 24px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 2px; box-shadow: 0 10px 30px rgba(15,23,42,0.2); }
        </style>
    </head>
    <body class="body">
        <div class="container">
            <div class="header">
                <div class="logo">Food Station</div>
            </div>
            <div class="content">
                <h1 class="h1">Role Evolution!</h1>
                <p class="p">Hello <b>${userName}</b>,</p>
                <p class="p">Great news! Your account status have been updated. You've been promoted to a new role within our community.</p>
                <div class="badge">${label}</div>
                <p class="p" style="margin-bottom: 40px;">Your access to new dashboard features is now active. Log in to explore your updated interface.</p>
                <a href="${process.env.FRONTEND_URL}/dashboard" class="btn">Access Dashboard</a>
            </div>
            <div class="footer">
                <p>© 2026 Food Station Market. All rights reserved.</p>
                <p>Designed with passion for our providers and food lovers.</p>
            </div>
        </div>
    </body>
    </html>
    `;

    try {
        await transporter.sendMail({
            from: `"Food Station Team" <${process.env.EMAIL_USER}>`,
            to: userEmail,
            subject: "🚀 Account Update: New Role Assigned",
            html: html,
        });
        console.log("Email sent successfully to", userEmail);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

export const sendStatusUpdateEmail = async (userEmail: string, userName: string, newStatus: string) => {
    const isDeactivated = newStatus === 'inactive';
    const color = isDeactivated ? "#ef4444" : "#10b981"; // Red for inactive, Green for active
    const label = isDeactivated ? "Account Deactivated" : "Account Activated";

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            .body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 40px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.05); }
            .header { background: ${isDeactivated ? '#334155' : 'linear-gradient(135deg, #10b981 0%, #059669 100%)'}; padding: 60px 40px; text-align: center; }
            .logo { font-size: 32px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: -2px; }
            .content { padding: 60px 50px; text-align: center; }
            .badge { display: inline-block; padding: 12px 30px; background-color: ${color}20; color: ${color}; border-radius: 20px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 2px; margin: 30px 0; }
            .footer { padding: 40px; background-color: #f1f5f9; text-align: center; font-size: 14px; color: #94a3b8; }
            .h1 { margin: 0; font-size: 40px; font-weight: 900; color: #0f172a; letter-spacing: -2px; }
            .p { line-height: 1.8; color: #64748b; font-size: 16px; margin-top: 20px; }
            .btn { display: inline-block; padding: 22px 50px; background-color: #0f172a; color: #ffffff; text-decoration: none; border-radius: 24px; font-weight: 900; text-transform: uppercase; font-size: 12px; letter-spacing: 2px; box-shadow: 0 10px 30px rgba(15,23,42,0.2); }
        </style>
    </head>
    <body class="body">
        <div class="container">
            <div class="header">
                <div class="logo">Food Station</div>
            </div>
            <div class="content">
                <h1 class="h1">${isDeactivated ? 'Account Update' : 'Welcome Back!'}</h1>
                <p class="p">Hello <b>${userName}</b>,</p>
                <p class="p">This is to inform you that your account status has been updated by our administration team.</p>
                <div class="badge">${label}</div>
                <p class="p" style="margin-bottom: 40px;">
                    ${isDeactivated
            ? 'Your access to the platform has been temporarily suspended. If you believe this is a mistake, please contact our support team.'
            : 'Your account is now fully active. You can now access all services and place new orders.'}
                </p>
                <a href="${process.env.FRONTEND_URL}/dashboard" class="btn">${isDeactivated ? 'Contact Support' : 'Go to Dashboard'}</a>
            </div>
            <div class="footer">
                <p>© 2026 Food Station Market. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;

    try {
        await transporter.sendMail({
            from: `"Food Station Team" <${process.env.EMAIL_USER}>`,
            to: userEmail,
            subject: `🔔 Account Status: ${label}`,
            html: html,
        });
        console.log("Status update email sent to", userEmail);
    } catch (error) {
        console.error("Error sending status email:", error);
    }
};
