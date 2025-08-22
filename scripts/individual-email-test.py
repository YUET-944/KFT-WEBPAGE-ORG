import smtplib
from email.message import EmailMessage
from datetime import datetime
import time

def test_individual_emails():
    """Test each email address individually to identify issues"""
    
    print("🔍 TESTING EACH EMAIL ADDRESS INDIVIDUALLY...")
    print("=" * 60)
    
    EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
    EMAIL_PASSWORD = "whwi iikf fihz fjjg"
    
    # Test each email separately
    test_emails = [
        {"email": "preetykhan88@gmail.com", "name": "Preety Khan"},
        {"email": "admykjcs2023@gmail.com", "name": "Admin KJCS"}, # Fixed the typo!
        {"email": "khegarha.falahi.tanzeem@gmail.com", "name": "KFT Main"}
    ]
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    results = []
    
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            print("✅ Connected and authenticated")
            
            for i, recipient in enumerate(test_emails, 1):
                email = recipient["email"]
                name = recipient["name"]
                
                print(f"\n📤 TEST {i}/3: Sending to {name} ({email})")
                
                try:
                    msg = EmailMessage()
                    msg['Subject'] = f"🧪 INDIVIDUAL TEST #{i} - {name} - {timestamp}"
                    msg['From'] = EMAIL_ADDRESS
                    msg['To'] = email
                    
                    email_body = f"""
🧪 INDIVIDUAL EMAIL TEST #{i}

📧 TO: {name} ({email})
📧 FROM: {EMAIL_ADDRESS}
⏰ SENT: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
🆔 TEST ID: {timestamp}

🎯 THIS IS A TARGETED TEST FOR: {name}

✅ If you receive this email:
   - Your email address is working correctly
   - The KFT email system can reach you
   - You should receive form notifications

❌ If you don't receive this email:
   - Check your spam/junk folder
   - Check if the email address is correct
   - Check if your email provider is blocking emails

🔍 SEARCH FOR:
   - Subject: "INDIVIDUAL TEST #{i}"
   - From: "khegarha.falahi.tanzeem@gmail.com"
   - Test ID: {timestamp}

📞 CONFIRM RECEIPT:
   Call/WhatsApp: +92-300-907-7229
   Or reply to this email

🤖 KFT Email System Test
                    """
                    
                    msg.set_content(email_body)
                    smtp.send_message(msg)
                    
                    print(f"✅ Email sent successfully to {email}")
                    results.append({"email": email, "status": "sent", "name": name})
                    
                except Exception as e:
                    print(f"❌ Failed to send to {email}: {e}")
                    results.append({"email": email, "status": "failed", "error": str(e), "name": name})
                
                time.sleep(3)  # Wait 3 seconds between emails
        
        # Print summary
        print(f"\n📊 INDIVIDUAL TEST SUMMARY:")
        print("=" * 40)
        for result in results:
            status_icon = "✅" if result["status"] == "sent" else "❌"
            print(f"{status_icon} {result['name']}: {result['email']} - {result['status'].upper()}")
            if result["status"] == "failed":
                print(f"   Error: {result.get('error', 'Unknown')}")
        
        print(f"\n🆔 Test ID: {timestamp}")
        print(f"⏰ Check emails in next 2-5 minutes")
        
        return results
        
    except Exception as e:
        print(f"❌ Connection error: {e}")
        return []

def check_email_validity():
    """Check if email addresses are valid format"""
    print("\n📧 EMAIL ADDRESS VALIDATION:")
    print("-" * 30)
    
    emails = [
        "preetykhan88@gmail.com",
        "admykjcs2023@gmail.com",  # Note: Fixed the typo here
        "khegarha.falahi.tanzeem@gmail.com"
    ]
    
    import re
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    for email in emails:
        is_valid = re.match(email_pattern, email) is not None
        status = "✅ Valid" if is_valid else "❌ Invalid"
        print(f"{status}: {email}")

if __name__ == "__main__":
    print("🚀 RUNNING INDIVIDUAL EMAIL TESTS...")
    
    # First check email format validity
    check_email_validity()
    
    # Then test sending
    results = test_individual_emails()
    
    if results:
        print("\n📋 NEXT STEPS:")
        print("1. Check each email account individually")
        print("2. Look in SPAM folders first!")
        print("3. Search for the test ID in each account")
        print("4. Report which emails you receive/don't receive")
    
    print("\n🔍 IMPORTANT: I noticed you mentioned 'mykjcs2023@gmail' - ")
    print("   The correct email in our system is 'admykjcs2023@gmail.com'")
    print("   Please confirm this is the right address!")
