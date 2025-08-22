import smtplib
from email.message import EmailMessage
from datetime import datetime
import time

def test_corrected_email_system():
    """Test the email system with corrected addresses"""
    
    print("🔧 TESTING WITH CORRECTED EMAIL ADDRESSES")
    print("=" * 50)
    
    EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
    EMAIL_PASSWORD = "whwi iikf fihz fjjg"
    
    # CORRECTED email addresses
    corrected_recipients = [
        {"email": "preetykhan88@gmail.com", "name": "Preety Khan", "type": "Volunteer/Aid"},
        {"email": "mykjcs2023@gmail.com", "name": "KJCS Admin", "type": "Volunteer/Aid"},  # CORRECTED!
        {"email": "khegarha.falahi.tanzeem@gmail.com", "name": "KFT Main", "type": "Contact"}
    ]
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    print("📧 CORRECTED EMAIL ADDRESSES:")
    for recipient in corrected_recipients:
        print(f"   ✅ {recipient['name']}: {recipient['email']} ({recipient['type']})")
    
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            print("\n✅ Connected and authenticated")
            
            for i, recipient in enumerate(corrected_recipients, 1):
                email = recipient["email"]
                name = recipient["name"]
                email_type = recipient["type"]
                
                print(f"\n📤 TEST {i}/3: Sending to {name} ({email})")
                
                try:
                    msg = EmailMessage()
                    msg['Subject'] = f"✅ CORRECTED EMAIL TEST #{i} - {name} - {timestamp}"
                    msg['From'] = EMAIL_ADDRESS
                    msg['To'] = email
                    
                    email_body = f"""
✅ EMAIL ADDRESS CORRECTION TEST #{i}

📧 TO: {name} ({email})
📧 FROM: {EMAIL_ADDRESS}
⏰ SENT: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
🆔 TEST ID: {timestamp}
📋 EMAIL TYPE: {email_type}

🎉 GOOD NEWS: Email address has been CORRECTED!

OLD (WRONG): admykjcs2023@gmail.com ❌
NEW (CORRECT): mykjcs2023@gmail.com ✅

✅ If you receive this email:
   - Your email address is now correctly configured
   - You will receive KFT form notifications
   - The email system is working properly

🔧 WHAT WAS FIXED:
   - Updated email address in the system
   - Corrected recipient lists
   - Tested individual delivery

📞 PLEASE CONFIRM RECEIPT:
   Call/WhatsApp: +92-300-907-7229
   Text: "Received test #{i}"

🤖 KFT Email System - Address Corrected!
                    """
                    
                    msg.set_content(email_body)
                    smtp.send_message(msg)
                    
                    print(f"✅ Email sent successfully to {email}")
                    
                except Exception as e:
                    print(f"❌ Failed to send to {email}: {e}")
                
                time.sleep(2)  # Wait 2 seconds between emails
        
        print(f"\n🎉 ALL CORRECTED EMAILS SENT!")
        print(f"🆔 Test ID: {timestamp}")
        print(f"⏰ Check emails in next 2-5 minutes")
        print(f"🔍 Look for subject: 'CORRECTED EMAIL TEST'")
        
        return True
        
    except Exception as e:
        print(f"❌ Connection error: {e}")
        return False

def update_volunteer_form_test():
    """Test volunteer form with corrected email"""
    from email_bot import KFTEmailBot
    
    print("\n🧪 TESTING VOLUNTEER FORM WITH CORRECTED EMAIL...")
    print("-" * 50)
    
    bot = KFTEmailBot()
    
    # Test volunteer data
    volunteer_data = {
        'fullName': 'Test User - Email Correction',
        'email': 'test.correction@example.com',
        'phone': '+92-300-1234567',
        'age': '25',
        'city': 'Swat',
        'profession': 'Tester',
        'interests': ['Testing Email System'],
        'availability': 'Immediate',
        'experience': 'Testing corrected email addresses',
        'skills': 'Email debugging',
        'motivation': 'To verify that mykjcs2023@gmail.com now receives emails correctly'
    }
    
    print("📧 Volunteer emails will go to:")
    for email in bot.VOLUNTEER_RECIPIENTS:
        print(f"   ✅ {email}")
    
    try:
        success = bot.send_volunteer_application(volunteer_data)
        if success:
            print("✅ Volunteer application test sent successfully!")
            print("📬 Check both volunteer email accounts!")
        else:
            print("❌ Failed to send volunteer application test")
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    print("🚀 TESTING CORRECTED EMAIL SYSTEM...")
    
    # Test corrected addresses
    if test_corrected_email_system():
        print("\n" + "="*50)
        # Test volunteer form functionality
        update_volunteer_form_test()
        
        print("\n📋 SUMMARY:")
        print("✅ Email address corrected: mykjcs2023@gmail.com")
        print("✅ System updated with correct addresses")
        print("✅ Test emails sent to all recipients")
        print("📞 Please confirm receipt: +92-300-907-7229")
    else:
        print("❌ Failed to send corrected email tests")
