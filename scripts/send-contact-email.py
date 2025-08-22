import smtplib
import os
import time
from email.message import EmailMessage
from datetime import datetime

def send_contact_email(full_name, email_address, phone_number, subject, message):
    # Get current hour from system time
    hour = time.localtime().tm_hour
    
    # Decide greeting based on the time
    if 5 <= hour < 12:
        greeting = "Good Morning"
    elif 12 <= hour < 17:
        greeting = "Good Afternoon"
    elif 17 <= hour < 21:
        greeting = "Good Evening"
    else:
        greeting = "Good Night"
    
    # Environment variables for security (set these in your environment)
    EMAIL_ADDRESS = os.getenv('GMAIL_USER', 'mykjcs2023@gmail.com')  # Updated with provided email
    EMAIL_PASSWORD = os.getenv('GMAIL_APP_PASSWORD', 'qbim qsck hnkw ekgr')  # Updated with provided app password
    
    # Create the email message
    msg = EmailMessage()
    msg['Subject'] = f'Website Contact: {subject}'
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = 'mykjcs2023@gmail.com'  # Updated recipient email
    msg['Reply-To'] = email_address  # So you can reply directly to the sender
    
    # Format email content
    email_content = f"""
    {greeting},
    
    You have received a new message from your website contact form.
    
    Full Name: {full_name}
    Email Address: {email_address}
    Phone Number: {phone_number if phone_number else 'Not provided'}
    Subject: {subject}
    
    Message:
    {message}
    
    ---
    Sent from KFT website on {datetime.now().strftime('%Y-%m-%d at %H:%M:%S')}
    """
    
    msg.set_content(email_content)
    
    # Send the email
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)
            return True, "✅ Message sent successfully!"
    except smtplib.SMTPAuthenticationError:
        return False, "❌ Login failed. Check credentials or enable App Passwords."
    except smtplib.SMTPException as e:
        return False, f"❌ SMTP error: {e}"
    except Exception as e:
        return False, f"❌ Unexpected error: {e}"

# Example usage (you would call this from your web application)
if __name__ == "__main__":
    # Simulate form data (in a real application, this would come from your web form)
    form_data = {
        'full_name': 'John Doe',
        'email_address': 'john@example.com',
        'phone_number': '+1234567890',
        'subject': 'Website Inquiry',
        'message': 'Hello, I would like more information about your services.'
    }
    
    success, message = send_contact_email(**form_data)
    print(message)
