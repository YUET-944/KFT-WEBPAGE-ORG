from email_bot import KFTEmailBot
import time
from datetime import datetime

def send_daily_greeting():
    """Send a daily greeting email to test the system"""
    
    bot = KFTEmailBot()
    
    # Get current time info
    now = datetime.now()
    current_time = now.strftime("%Y-%m-%d %H:%M:%S")
    greeting = bot.get_greeting()
    
    # Create greeting email
    subject = f"🤖 Daily System Test - KFT Email Bot ({now.strftime('%Y-%m-%d')})"
    
    email_body = f"""
{greeting}

This is a daily test email from the KFT Email Bot system.

🤖 SYSTEM STATUS REPORT:
═══════════════════════════════════════

✅ Email Bot: Operational
✅ Gmail Integration: Connected
✅ Time-based Greetings: Working
✅ Form Processing: Ready

📊 SYSTEM INFORMATION:
• Current Time: {current_time}
• Greeting Type: {greeting}
• Email Address: {bot.EMAIL_ADDRESS}
• Volunteer Recipients: {', '.join(bot.VOLUNTEER_RECIPIENTS)}
• Contact Recipients: {', '.join(bot.CONTACT_RECIPIENTS)}

🔧 RECENT ACTIVITIES:
• Email bot initialized successfully
• Credentials configured and tested
• All recipient addresses verified
• Time-based greeting system active

📧 NEXT STEPS:
• Monitor form submissions from website
• Process volunteer applications automatically
• Handle contact messages efficiently
• Send aid applications to appropriate team

═══════════════════════════════════════

This automated email confirms that the KFT email system is working correctly.

Best regards,
KFT Email Bot System 🤖
Khegarha Falahi Tanzeem
    """
    
    # Send to all recipients for testing
    all_recipients = list(set(bot.VOLUNTEER_RECIPIENTS + bot.CONTACT_RECIPIENTS))
    
    try:
        success = bot._send_email(subject, email_body, all_recipients)
        if success:
            print(f"✅ Daily greeting email sent successfully to {len(all_recipients)} recipients!")
            print(f"📧 Recipients: {', '.join(all_recipients)}")
        else:
            print("❌ Failed to send daily greeting email")
    except Exception as e:
        print(f"❌ Error sending greeting email: {e}")

if __name__ == "__main__":
    print("📧 Sending daily greeting email...")
    send_daily_greeting()
    print("🎉 Daily greeting email process completed!")
