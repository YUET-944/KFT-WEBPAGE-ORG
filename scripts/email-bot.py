import smtplib
import os
import time
from email.message import EmailMessage
from datetime import datetime

class KFTEmailBot:
    def __init__(self):
        # Email configuration - Updated with actual credentials
        self.EMAIL_ADDRESS = "khegarha.falahi.tanzeem@gmail.com"
        self.EMAIL_PASSWORD = "whwi iikf fihz fjjg"  # Gmail App Password
        
        # Recipient lists
        self.VOLUNTEER_RECIPIENTS = [
            "preetykhan88@gmail.com",
            "mykjcs2023@gmail.com"  # Fixed: was admykjcs2023@gmail.com
        ]
        
        self.CONTACT_RECIPIENTS = [
            "khegarha.falahi.tanzeem@gmail.com"
        ]
    
    def get_greeting(self):
        """Get appropriate greeting based on current time"""
        hour = time.localtime().tm_hour
        
        if 5 <= hour < 12:
            return "Good Morning! 🌅"
        elif 12 <= hour < 17:
            return "Good Afternoon! ☀️"
        elif 17 <= hour < 21:
            return "Good Evening! 🌇"
        else:
            return "Good Night! 🌙"
    
    def send_volunteer_application(self, form_data):
        """Send volunteer application to designated recipients"""
        greeting = self.get_greeting()
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Create email content
        subject = f"🤝 New Volunteer Application - {form_data.get('fullName', 'Unknown')}"
        
        email_body = f"""
{greeting}

We have received a new volunteer application through the KFT website.

📋 VOLUNTEER APPLICATION DETAILS:
═══════════════════════════════════════

👤 PERSONAL INFORMATION:
• Full Name: {form_data.get('fullName', 'Not provided')}
• Email: {form_data.get('email', 'Not provided')}
• Phone: {form_data.get('phone', 'Not provided')}
• Age: {form_data.get('age', 'Not provided')}
• City: {form_data.get('city', 'Not provided')}
• Profession: {form_data.get('profession', 'Not provided')}

🎯 VOLUNTEER PREFERENCES:
• Areas of Interest: {', '.join(form_data.get('interests', [])) if form_data.get('interests') else 'Not specified'}
• Availability: {form_data.get('availability', 'Not specified')}
• Previous Experience: {form_data.get('experience', 'Not provided')}
• Special Skills: {form_data.get('skills', 'Not provided')}

💭 MOTIVATION:
{form_data.get('motivation', 'Not provided')}

📅 Application Submitted: {current_time}
🌐 Source: KFT Website Volunteer Form

═══════════════════════════════════════

Please review this application and contact the volunteer at your earliest convenience.

Best regards,
KFT Website System 🤖
        """
        
        return self._send_email(subject, email_body, self.VOLUNTEER_RECIPIENTS)
    
    def send_contact_message(self, form_data):
        """Send contact form message to designated recipients"""
        greeting = self.get_greeting()
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Create email content
        subject = f"📧 New Contact Message - {form_data.get('subject', 'General Inquiry')}"
        
        email_body = f"""
{greeting}

We have received a new message through the KFT website contact form.

📬 CONTACT MESSAGE DETAILS:
═══════════════════════════════════════

👤 SENDER INFORMATION:
• Name: {form_data.get('name', 'Not provided')}
• Email: {form_data.get('email', 'Not provided')}
• Phone: {form_data.get('phone', 'Not provided')}
• Subject: {form_data.get('subject', 'General Inquiry')}

💬 MESSAGE:
{form_data.get('message', 'No message provided')}

📅 Message Sent: {current_time}
🌐 Source: KFT Website Contact Form

═══════════════════════════════════════

Please respond to this inquiry at your earliest convenience.

Best regards,
KFT Website System 🤖
        """
        
        return self._send_email(subject, email_body, self.CONTACT_RECIPIENTS)
    
    def send_aid_application(self, form_data):
        """Send aid application to designated recipients"""
        greeting = self.get_greeting()
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Create email content
        subject = f"🆘 New Aid Application - {form_data.get('fullName', 'Unknown')} ({form_data.get('aidType', 'General')})"
        
        email_body = f"""
{greeting}

We have received a new aid application through the KFT website.

🆘 AID APPLICATION DETAILS:
═══════════════════════════════════════

👤 APPLICANT INFORMATION:
• Full Name: {form_data.get('fullName', 'Not provided')}
• CNIC: {form_data.get('cnic', 'Not provided')}
• Phone: {form_data.get('phone', 'Not provided')}
• Email: {form_data.get('email', 'Not provided')}
• Address: {form_data.get('address', 'Not provided')}
• City: {form_data.get('city', 'Not provided')}

🎯 AID REQUEST:
• Type of Aid: {form_data.get('aidType', 'Not specified')}
• Monthly Income: PKR {form_data.get('monthlyIncome', 'Not provided')}
• Family Members: {form_data.get('familyMembers', 'Not provided')}
• Urgency Level: {form_data.get('urgencyLevel', 'Not specified')}

📝 REASON FOR AID:
{form_data.get('reasonForAid', 'Not provided')}

📅 Application Submitted: {current_time}
🌐 Source: KFT Website Aid Application Form

═══════════════════════════════════════

⚠️ URGENT: Please review this aid application and take appropriate action.

Best regards,
KFT Website System 🤖
        """
        
        return self._send_email(subject, email_body, self.VOLUNTEER_RECIPIENTS)
    
    def _send_email(self, subject, body, recipients):
        """Internal method to send email"""
        try:
            # Create the email message
            msg = EmailMessage()
            msg['Subject'] = subject
            msg['From'] = self.EMAIL_ADDRESS
            msg['To'] = ', '.join(recipients)
            msg.set_content(body)
            
            # Send the email
            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
                smtp.login(self.EMAIL_ADDRESS, self.EMAIL_PASSWORD)
                smtp.send_message(msg)
                
            print(f"✅ Email sent successfully to: {', '.join(recipients)}")
            return True
            
        except smtplib.SMTPAuthenticationError:
            print("❌ Login failed. Check credentials or enable App Passwords.")
            return False
        except smtplib.SMTPException as e:
            print(f"❌ SMTP error: {e}")
            return False
        except Exception as e:
            print(f"❌ Unexpected error: {e}")
            return False

# Example usage and testing
if __name__ == "__main__":
    bot = KFTEmailBot()
    
    print("🤖 KFT Email Bot Initialized Successfully!")
    print(f"📧 Sending from: {bot.EMAIL_ADDRESS}")
    print(f"👥 Volunteer emails go to: {', '.join(bot.VOLUNTEER_RECIPIENTS)}")
    print(f"📬 Contact emails go to: {', '.join(bot.CONTACT_RECIPIENTS)}")
    
    # Test volunteer application
    volunteer_data = {
        'fullName': 'Ahmed Khan',
        'email': 'ahmed@example.com',
        'phone': '+92-300-1234567',
        'age': '25',
        'city': 'Swat',
        'profession': 'Teacher',
        'interests': ['Education Support', 'Food Distribution'],
        'availability': 'Weekends',
        'experience': 'Volunteered at local school for 2 years',
        'skills': 'Teaching, Computer skills',
        'motivation': 'I want to help my community and make a positive impact'
    }
    
    print("\n🧪 Testing Volunteer Application Email...")
    success = bot.send_volunteer_application(volunteer_data)
    if success:
        print("✅ Volunteer application email sent successfully!")
    else:
        print("❌ Failed to send volunteer application email")
    
    # Test contact message
    contact_data = {
        'name': 'Fatima Ali',
        'email': 'fatima@example.com',
        'phone': '+92-300-9876543',
        'subject': 'Donation Inquiry',
        'message': 'I would like to know more about your food assistance program and how I can contribute.'
    }
    
    print("\n🧪 Testing Contact Message Email...")
    success = bot.send_contact_message(contact_data)
    if success:
        print("✅ Contact message email sent successfully!")
    else:
        print("❌ Failed to send contact message email")
    
    print("\n🎉 Email bot testing completed!")
    print("📝 Note: Check the recipient inboxes to verify emails were delivered.")
