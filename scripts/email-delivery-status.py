import smtplib
from email.message import EmailMessage
from datetime import datetime

def check_email_delivery_status():
    """Check if emails are being sent successfully"""
    
    print("📊 EMAIL DELIVERY STATUS CHECK")
    print("=" * 40)
    
    EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
    EMAIL_PASSWORD = "whwi iikf fihz fjjg"
    
    print(f"📧 Email Account: {EMAIL_ADDRESS}")
    print(f"🔑 Password Status: {'✅ Configured' if EMAIL_PASSWORD else '❌ Missing'}")
    
    try:
        # Test connection
        print("\n🔌 Testing SMTP Connection...")
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            print("✅ Connected to Gmail SMTP server")
            
            print("🔐 Testing Authentication...")
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            print("✅ Authentication successful")
            
            print("📤 Testing Email Send...")
            msg = EmailMessage()
            msg['Subject'] = f"✅ DELIVERY TEST - {datetime.now().strftime('%H:%M:%S')}"
            msg['From'] = EMAIL_ADDRESS
            msg['To'] = EMAIL_ADDRESS  # Send to self first
            
            msg.set_content(f"""
✅ EMAIL DELIVERY TEST SUCCESSFUL!

This email was sent at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

If you receive this email, it means:
✅ SMTP connection works
✅ Authentication works  
✅ Email sending works
✅ Gmail is accepting emails

The issue might be:
🔍 Emails going to spam
🔍 Wrong recipient addresses
🔍 Gmail filtering

Next step: Check spam folders!
            """)
            
            smtp.send_message(msg)
            print("✅ Test email sent to self")
            
        print("\n🎉 EMAIL SYSTEM STATUS: WORKING ✅")
        print("📬 Check khegarha.falahi.tanzeem@gmail.com inbox")
        print("🔍 If you receive this email, the system works!")
        
        return True
        
    except Exception as e:
        print(f"❌ Email system error: {e}")
        return False

if __name__ == "__main__":
    if check_email_delivery_status():
        print("\n📋 NEXT STEPS:")
        print("1. Check if you received the self-test email")
        print("2. If yes, the system works - check spam folders")
        print("3. If no, there's a delivery issue")
    else:
        print("\n❌ Email system needs fixing")
