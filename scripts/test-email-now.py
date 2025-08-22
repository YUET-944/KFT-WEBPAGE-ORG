import smtplib
from email.message import EmailMessage
from datetime import datetime

def test_email_connection():
    """Test the email connection immediately"""
    
    print("🔍 TESTING EMAIL CONNECTION...")
    print("=" * 40)
    
    # Your credentials
    EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
    EMAIL_PASSWORD = "whwi iikf fihz fjjg"
    
    print(f"📧 Email: {EMAIL_ADDRESS}")
    print(f"🔑 Password: {'*' * len(EMAIL_PASSWORD)} (provided)")
    
    try:
        # Test SMTP connection
        print("\n🔌 Connecting to Gmail SMTP server...")
        
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            print("✅ Connected to Gmail SMTP server")
            
            print("🔐 Attempting login...")
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            print("✅ LOGIN SUCCESSFUL!")
            
            # Create test email
            msg = EmailMessage()
            msg['Subject'] = "🧪 KFT Email System Test - " + datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            msg['From'] = EMAIL_ADDRESS
            msg['To'] = "khegarha.falahi.tanzeem@gmail.com"
            
            test_message = f"""
🎉 SUCCESS! Your KFT Email System is Working!

✅ Gmail SMTP Connection: SUCCESSFUL
✅ Authentication: SUCCESSFUL  
✅ Email Sending: SUCCESSFUL

📧 Email Address: {EMAIL_ADDRESS}
🔑 App Password: Working correctly
⏰ Test Time: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

🚀 Your email bot is ready to handle:
• Volunteer applications → preetykhan88@gmail.com + admykjcs2023@gmail.com
• Contact messages → khegarha.falahi.tanzeem@gmail.com
• Aid applications → preetykhan88@gmail.com + admykjcs2023@gmail.com

This test email confirms everything is working perfectly!

Best regards,
KFT Email Bot 🤖
            """
            
            msg.set_content(test_message)
            
            print("📤 Sending test email...")
            smtp.send_message(msg)
            print("✅ TEST EMAIL SENT SUCCESSFULLY!")
            
        print("\n🎉 RESULT: EMAIL SYSTEM IS WORKING! ✅")
        print("📬 Check khegarha.falahi.tanzeem@gmail.com for the test email")
        return True
        
    except smtplib.SMTPAuthenticationError as e:
        print(f"❌ AUTHENTICATION FAILED: {e}")
        print("🔧 Possible issues:")
        print("   • App password might be incorrect")
        print("   • 2-factor authentication not enabled")
        print("   • App passwords not enabled in Gmail")
        return False
        
    except smtplib.SMTPException as e:
        print(f"❌ SMTP ERROR: {e}")
        return False
        
    except Exception as e:
        print(f"❌ UNEXPECTED ERROR: {e}")
        return False

def test_send_to_all_recipients():
    """Test sending to all recipients"""
    
    if not test_email_connection():
        return False
        
    print("\n" + "=" * 40)
    print("📤 TESTING EMAIL TO ALL RECIPIENTS...")
    
    EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
    EMAIL_PASSWORD = "whwi iikf fihz fjjg"
    
    recipients = [
        "preetykhan88@gmail.com",
        "admykjcs2023@gmail.com", 
        "khegarha.falahi.tanzeem@gmail.com"
    ]
    
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            
            for recipient in recipients:
                msg = EmailMessage()
                msg['Subject'] = f"🧪 KFT System Test for {recipient}"
                msg['From'] = EMAIL_ADDRESS
                msg['To'] = recipient
                
                test_message = f"""
Hello!

This is a test email to verify that the KFT email system can successfully send emails to {recipient}.

✅ Email system is working correctly!
✅ Your forms will now send emails automatically!

Time: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

Best regards,
KFT Email Bot 🤖
                """
                
                msg.set_content(test_message)
                smtp.send_message(msg)
                print(f"✅ Email sent to: {recipient}")
                
        print("\n🎉 ALL EMAILS SENT SUCCESSFULLY!")
        print("📬 Check all inboxes for test emails")
        return True
        
    except Exception as e:
        print(f"❌ Error sending to recipients: {e}")
        return False

if __name__ == "__main__":
    print("🚀 IMMEDIATE EMAIL SYSTEM TEST")
    print("Testing with your provided credentials...")
    
    # Test basic connection first
    if test_email_connection():
        print("\n✅ BASIC TEST PASSED - Now testing all recipients...")
        test_send_to_all_recipients()
    else:
        print("\n❌ BASIC TEST FAILED - Check credentials and Gmail settings")
    
    print("\n" + "=" * 50)
    print("📋 SUMMARY:")
    print("If you see ✅ messages above, your email system IS WORKING!")
    print("If you see ❌ messages, there's an issue to fix.")
    print("Check the specified email inboxes for test messages.")
