import smtplib
from email.message import EmailMessage
from datetime import datetime

def test_specific_email(target_email):
    """Test sending to a specific email address"""
    
    print(f"🎯 TESTING SPECIFIC EMAIL: {target_email}")
    print("=" * 50)
    
    EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
    EMAIL_PASSWORD = "whwi iikf fihz fjjg"
    
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            
            # Send test email
            msg = EmailMessage()
            msg['Subject'] = f"🎯 TARGETED TEST for {target_email} - {datetime.now().strftime('%H:%M:%S')}"
            msg['From'] = EMAIL_ADDRESS
            msg['To'] = target_email
            
            email_body = f"""
🎯 TARGETED EMAIL TEST

This email is specifically for: {target_email}

⏰ Sent: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
📧 From: {EMAIL_ADDRESS}
📧 To: {target_email}

🔍 IF YOU RECEIVE THIS:
✅ Your email address is working
✅ You can receive KFT notifications
✅ The email system is functioning

❌ IF YOU DON'T RECEIVE THIS:
🔍 Check spam/junk folder
🔍 Check if email address is correct
🔍 Check email provider settings

📞 PLEASE CONFIRM RECEIPT:
Call/WhatsApp: +92-300-907-7229

🤖 KFT Email System
            """
            
            msg.set_content(email_body)
            smtp.send_message(msg)
            
            print(f"✅ Test email sent to {target_email}")
            print(f"⏰ Check inbox and spam folder in 2-3 minutes")
            return True
            
    except Exception as e:
        print(f"❌ Failed to send to {target_email}: {e}")
        return False

if __name__ == "__main__":
    # Test the problematic email
    print("Testing the email that's not receiving messages...")
    
    # Test both versions to see which one works
    emails_to_test = [
        "admykjcs2023@gmail.com",  # Current version
        "mykjcs2023@gmail.com"     # Version you mentioned
    ]
    
    for email in emails_to_test:
        print(f"\n{'='*50}")
        test_specific_email(email)
        print("Waiting 5 seconds before next test...")
        import time
        time.sleep(5)
