import smtplib
from email.message import EmailMessage
from datetime import datetime
import time

def debug_email_test():
    """Debug email test with detailed logging"""
    
    print("🔍 DEBUGGING EMAIL SYSTEM...")
    print("=" * 50)
    
    # Your credentials
    EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
    EMAIL_PASSWORD = "whwi iikf fihz fjjg"
    
    # Test recipients
    test_recipients = [
        "preetykhan88@gmail.com",
        "admykjcs2023@gmail.com", 
        "khegarha.falahi.tanzeem@gmail.com"
    ]
    
    print(f"📧 Sending FROM: {EMAIL_ADDRESS}")
    print(f"📬 Sending TO: {', '.join(test_recipients)}")
    print(f"⏰ Current Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    try:
        print("\n🔌 Connecting to Gmail...")
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            print("✅ Connected to Gmail SMTP")
            
            print("🔐 Logging in...")
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            print("✅ Login successful")
            
            # Send to each recipient individually
            for i, recipient in enumerate(test_recipients, 1):
                print(f"\n📤 Sending email {i}/{len(test_recipients)} to: {recipient}")
                
                msg = EmailMessage()
                msg['Subject'] = f"🚨 URGENT TEST - KFT Email Debug #{i} - {datetime.now().strftime('%H:%M:%S')}"
                msg['From'] = EMAIL_ADDRESS
                msg['To'] = recipient
                
                test_message = f"""
🚨 URGENT: KFT Email System Debug Test

This is email #{i} of {len(test_recipients)} sent at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

📧 TO: {recipient}
📧 FROM: {EMAIL_ADDRESS}
🔢 Test Number: {i}

✅ If you receive this email, the system IS WORKING!
❌ If you don't receive this, there's a delivery issue.

🔍 CHECK THESE LOCATIONS:
1. Main Inbox
2. Spam/Junk folder
3. Promotions tab (if using Gmail)
4. All Mail folder

⏰ Email sent at: {datetime.now().strftime('%H:%M:%S')}
🤖 KFT Email Bot Debug Test
                """
                
                msg.set_content(test_message)
                
                try:
                    smtp.send_message(msg)
                    print(f"✅ Email sent successfully to {recipient}")
                    time.sleep(1)  # Wait 1 second between emails
                except Exception as e:
                    print(f"❌ Failed to send to {recipient}: {e}")
            
            print(f"\n🎉 DEBUG TEST COMPLETED!")
            print(f"📬 Check ALL inboxes (including spam) in the next 2-5 minutes")
            
    except smtplib.SMTPAuthenticationError:
        print("❌ Authentication failed - check credentials")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False
    
    return True

def check_gmail_settings():
    """Provide Gmail settings checklist"""
    print("\n📋 GMAIL SETTINGS CHECKLIST:")
    print("-" * 30)
    print("1. ✅ 2-Factor Authentication: ENABLED")
    print("2. ✅ App Passwords: ENABLED") 
    print("3. ✅ Less Secure Apps: NOT NEEDED (using App Password)")
    print("4. 🔍 Check Spam Folder: REQUIRED")
    print("5. 🔍 Check All Mail: RECOMMENDED")
    print("6. 🔍 Check Promotions Tab: IF USING GMAIL TABS")

if __name__ == "__main__":
    print("🚨 RUNNING URGENT EMAIL DEBUG TEST...")
    
    if debug_email_test():
        print("\n" + "=" * 50)
        print("📧 EMAILS SENT - NOW CHECK YOUR INBOXES!")
        print("⏰ Wait 2-5 minutes for delivery")
        print("🔍 Check SPAM folders first!")
        check_gmail_settings()
    else:
        print("\n❌ Email sending failed - check credentials")
