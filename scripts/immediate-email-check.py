import smtplib
from email.message import EmailMessage
from datetime import datetime
import time

def send_immediate_test():
    """Send immediate test with maximum visibility"""
    
    print("🚨 SENDING IMMEDIATE HIGH-PRIORITY TEST EMAIL...")
    print("=" * 60)
    
    EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
    EMAIL_PASSWORD = "whwi iikf fihz fjjg"
    
    # Current timestamp for unique identification
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            
            # Send to each email with VERY obvious subject
            recipients = [
                "preetykhan88@gmail.com",
                "admykjcs2023@gmail.com", 
                "khegarha.falahi.tanzeem@gmail.com"
            ]
            
            for recipient in recipients:
                msg = EmailMessage()
                msg['Subject'] = f"🔴 URGENT KFT TEST {timestamp} - CHECK NOW!"
                msg['From'] = EMAIL_ADDRESS
                msg['To'] = recipient
                
                # Very obvious email content
                email_body = f"""
🔴🔴🔴 URGENT: KFT EMAIL SYSTEM TEST 🔴🔴🔴

THIS IS A TEST EMAIL - PLEASE CONFIRM RECEIPT!

📧 TO: {recipient}
📧 FROM: {EMAIL_ADDRESS}
⏰ SENT: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
🔢 TEST ID: {timestamp}

🚨 IF YOU SEE THIS EMAIL:
✅ The KFT email system IS WORKING!
✅ Your website forms WILL send emails!
✅ Everything is configured correctly!

📍 EMAIL LOCATION CHECK:
□ Main Inbox
□ Spam/Junk Folder  ← CHECK HERE FIRST!
□ Promotions Tab
□ All Mail

🤖 This is an automated test from the KFT website system.

REPLY TO THIS EMAIL OR CALL TO CONFIRM RECEIPT!
Phone: +92-300-907-7229

KFT Email Bot System ✅
                """
                
                msg.set_content(email_body)
                smtp.send_message(msg)
                
                print(f"📤 URGENT TEST sent to: {recipient}")
                print(f"🔍 Subject: 🔴 URGENT KFT TEST {timestamp} - CHECK NOW!")
                time.sleep(2)
        
        print(f"\n🎉 ALL URGENT TESTS SENT!")
        print(f"🔍 Look for subject: '🔴 URGENT KFT TEST {timestamp} - CHECK NOW!'")
        print(f"⏰ Check emails in next 1-3 minutes")
        
        return timestamp
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return None

def provide_troubleshooting_steps():
    """Provide step-by-step troubleshooting"""
    print("\n📋 STEP-BY-STEP EMAIL CHECK:")
    print("=" * 40)
    print("1. 📧 Open Gmail for preetykhan88@gmail.com")
    print("   - Check Inbox")
    print("   - Check Spam folder ⚠️")
    print("   - Search for 'KFT TEST'")
    print()
    print("2. 📧 Open Gmail for admykjcs2023@gmail.com") 
    print("   - Check Inbox")
    print("   - Check Spam folder ⚠️")
    print("   - Search for 'KFT TEST'")
    print()
    print("3. 📧 Open Gmail for khegarha.falahi.tanzeem@gmail.com")
    print("   - Check Inbox") 
    print("   - Check Spam folder ⚠️")
    print("   - Search for 'KFT TEST'")
    print()
    print("🔍 SEARCH TIPS:")
    print("   - Search for: 'URGENT KFT TEST'")
    print("   - Search for: 'khegarha.falahi.tanzeem'")
    print("   - Check 'All Mail' folder")

if __name__ == "__main__":
    print("🚨 RUNNING IMMEDIATE EMAIL VISIBILITY TEST...")
    
    test_id = send_immediate_test()
    
    if test_id:
        provide_troubleshooting_steps()
        print(f"\n🆔 TEST ID: {test_id}")
        print("📞 Call +92-300-907-7229 if you find the emails!")
    else:
        print("❌ Failed to send test emails")
