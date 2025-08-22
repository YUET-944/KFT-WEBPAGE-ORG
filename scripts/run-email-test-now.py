#!/usr/bin/env python3
"""
Comprehensive Email System Test for KFT Website
Tests all email functionality including SMTP connection and actual sending
"""

import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import sys

def test_email_system():
    """Test the complete email system"""
    
    print("🧪 KFT EMAIL SYSTEM TEST")
    print("=" * 50)
    print(f"📅 Test Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    # Email configuration (same as in your API routes)
    EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
    EMAIL_PASSWORD = "whwi iikf fihz fjjg"  # Update this if needed
    
    # Test recipients
    recipients = [
        "khegarha.falahi.tanzeem@gmail.com"
    ]
    
    print("📧 EMAIL CONFIGURATION:")
    print(f"   From: {EMAIL_ADDRESS}")
    print(f"   Recipients: {', '.join(recipients)}")
    print()
    
    try:
        # Step 1: Test SMTP Connection
        print("🔌 STEP 1: Testing SMTP Connection...")
        
        context = ssl.create_default_context()
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls(context=context)
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        
        print("✅ SMTP Connection: SUCCESS")
        print("   - Connected to Gmail SMTP server")
        print("   - Authentication successful")
        print()
        
        # Step 2: Test Contact Form Email
        print("📝 STEP 2: Testing Contact Form Email...")
        
        contact_subject = "🧪 TEST - Contact Form Message"
        contact_body = f"""
Good Day! 🌅

This is a TEST message from the KFT website email system.

📬 CONTACT MESSAGE DETAILS:
═══════════════════════════════════════

👤 SENDER INFORMATION:
• Name: Test User
• Email: test@example.com
• Phone: +92-300-123-4567
• Subject: System Test

💬 MESSAGE:
This is a test message to verify the contact form email system is working correctly.

📅 Message Sent: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
🌐 Source: KFT Website Contact Form (TEST)

═══════════════════════════════════════

This is an automated test. Please ignore this message.

Best regards,
KFT Website System 🤖 (TEST MODE)
        """
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = ", ".join(recipients)
        msg['Subject'] = contact_subject
        msg.attach(MIMEText(contact_body, 'plain'))
        
        # Send email
        text = msg.as_string()
        server.sendmail(EMAIL_ADDRESS, recipients, text)
        
        print("✅ Contact Form Email: SUCCESS")
        print(f"   - Email sent to: {', '.join(recipients)}")
        print()
        
        # Step 3: Test Volunteer Form Email
        print("👥 STEP 3: Testing Volunteer Form Email...")
        
        volunteer_subject = "🧪 TEST - New Volunteer Application"
        volunteer_body = f"""
Good Day! 🌅

This is a TEST volunteer application from the KFT website.

👥 VOLUNTEER APPLICATION DETAILS:
═══════════════════════════════════════

👤 APPLICANT INFORMATION:
• Name: Test Volunteer
• Email: volunteer@example.com
• Phone: +92-300-987-6543
• Age: 25
• City: Test City
• Profession: Software Developer

🎯 VOLUNTEER PREFERENCES:
• Areas of Interest: Education, Healthcare
• Available Days: Weekends
• Experience: Previous volunteer work
• Skills: Teaching, Computer skills

💬 MOTIVATION:
I want to help the community and make a positive impact through KFT's programs.

📅 Application Submitted: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
🌐 Source: KFT Website Volunteer Form (TEST)

═══════════════════════════════════════

This is an automated test. Please ignore this message.

Best regards,
KFT Website System 🤖 (TEST MODE)
        """
        
        # Create volunteer message
        vol_msg = MIMEMultipart()
        vol_msg['From'] = EMAIL_ADDRESS
        vol_msg['To'] = ", ".join(recipients)
        vol_msg['Subject'] = volunteer_subject
        vol_msg.attach(MIMEText(volunteer_body, 'plain'))
        
        # Send volunteer email
        vol_text = vol_msg.as_string()
        server.sendmail(EMAIL_ADDRESS, recipients, vol_text)
        
        print("✅ Volunteer Form Email: SUCCESS")
        print(f"   - Email sent to: {', '.join(recipients)}")
        print()
        
        # Step 4: Test Aid Application Email
        print("🤲 STEP 4: Testing Aid Application Email...")
        
        aid_subject = "🧪 TEST - New Aid Application"
        aid_body = f"""
Good Day! 🌅

This is a TEST aid application from the KFT website.

🤲 AID APPLICATION DETAILS:
═══════════════════════════════════════

👤 APPLICANT INFORMATION:
• Name: Test Applicant
• Father's Name: Test Father
• CNIC: 12345-6789012-3
• Phone: +92-300-555-1234
• Address: Test Address, Test City

👨‍👩‍👧‍👦 FAMILY DETAILS:
• Family Size: 5 members
• Monthly Income: 15,000 PKR
• Occupation: Daily wage worker

🆘 AID REQUEST:
• Type of Aid: Medical assistance
• Amount Needed: 50,000 PKR
• Urgency: High
• Description: Medical treatment for family member

📅 Application Submitted: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
🌐 Source: KFT Website Aid Application (TEST)

═══════════════════════════════════════

This is an automated test. Please ignore this message.

Best regards,
KFT Website System 🤖 (TEST MODE)
        """
        
        # Create aid message
        aid_msg = MIMEMultipart()
        aid_msg['From'] = EMAIL_ADDRESS
        aid_msg['To'] = ", ".join(recipients)
        aid_msg['Subject'] = aid_subject
        aid_msg.attach(MIMEText(aid_body, 'plain'))
        
        # Send aid email
        aid_text = aid_msg.as_string()
        server.sendmail(EMAIL_ADDRESS, recipients, aid_text)
        
        print("✅ Aid Application Email: SUCCESS")
        print(f"   - Email sent to: {', '.join(recipients)}")
        print()
        
        # Close server connection
        server.quit()
        
        # Final Results
        print("🎉 FINAL RESULTS:")
        print("=" * 50)
        print("✅ All email tests completed successfully!")
        print()
        print("📧 EMAILS SENT:")
        print("   1. Contact Form Test Email")
        print("   2. Volunteer Application Test Email") 
        print("   3. Aid Application Test Email")
        print()
        print("📬 CHECK YOUR INBOX:")
        print(f"   - Gmail: {EMAIL_ADDRESS}")
        print("   - Look for emails with subject starting with '🧪 TEST'")
        print()
        print("✅ EMAIL SYSTEM STATUS: WORKING PERFECTLY!")
        print()
        print("🚀 NEXT STEPS:")
        print("   1. Check the Gmail inbox for test emails")
        print("   2. Verify all three test emails were received")
        print("   3. Test the live forms on your website")
        print("   4. The email system is ready for production!")
        
    except smtplib.SMTPAuthenticationError as e:
        print("❌ SMTP Authentication Error:")
        print(f"   Error: {str(e)}")
        print()
        print("🔧 SOLUTIONS:")
        print("   1. Check if 2-Factor Authentication is enabled on Gmail")
        print("   2. Generate a new App Password in Gmail settings")
        print("   3. Update the EMAIL_PASSWORD in this script")
        print("   4. Make sure 'Less secure app access' is enabled (if not using 2FA)")
        
    except smtplib.SMTPException as e:
        print("❌ SMTP Error:")
        print(f"   Error: {str(e)}")
        print()
        print("🔧 SOLUTIONS:")
        print("   1. Check internet connection")
        print("   2. Verify Gmail SMTP settings")
        print("   3. Try again in a few minutes")
        
    except Exception as e:
        print("❌ Unexpected Error:")
        print(f"   Error: {str(e)}")
        print()
        print("🔧 SOLUTIONS:")
        print("   1. Check all email credentials")
        print("   2. Verify network connection")
        print("   3. Contact system administrator")

if __name__ == "__main__":
    test_email_system()
