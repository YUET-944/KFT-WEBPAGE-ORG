from email_bot import KFTEmailBot
import time

def test_email_system():
    """Test the KFT email system with sample data"""
    
    print("🚀 Starting KFT Email System Test...")
    print("=" * 50)
    
    # Initialize the bot
    bot = KFTEmailBot()
    
    print(f"📧 Email Address: {bot.EMAIL_ADDRESS}")
    print(f"🔑 Password: {'*' * len(bot.EMAIL_PASSWORD)} (hidden)")
    print(f"👥 Volunteer Recipients: {', '.join(bot.VOLUNTEER_RECIPIENTS)}")
    print(f"📬 Contact Recipients: {', '.join(bot.CONTACT_RECIPIENTS)}")
    print()
    
    # Test 1: Volunteer Application
    print("🧪 TEST 1: Volunteer Application Email")
    print("-" * 30)
    
    volunteer_test_data = {
        'fullName': 'Test Volunteer',
        'email': 'test.volunteer@example.com',
        'phone': '+92-300-1234567',
        'age': '28',
        'city': 'Swat',
        'profession': 'Software Engineer',
        'interests': ['Education Support', 'Medical Support', 'Food Distribution'],
        'availability': 'Weekends',
        'experience': 'Previously volunteered at local NGO for community development projects',
        'skills': 'Programming, Teaching, First Aid, Photography',
        'motivation': 'I want to use my technical skills to help digitize and improve KFT operations while also contributing to direct community service.'
    }
    
    try:
        success = bot.send_volunteer_application(volunteer_test_data)
        if success:
            print("✅ Volunteer application email sent successfully!")
        else:
            print("❌ Failed to send volunteer application email")
    except Exception as e:
        print(f"❌ Error sending volunteer email: {e}")
    
    print()
    time.sleep(2)  # Wait 2 seconds between tests
    
    # Test 2: Contact Message
    print("🧪 TEST 2: Contact Message Email")
    print("-" * 30)
    
    contact_test_data = {
        'name': 'Test Contact Person',
        'email': 'test.contact@example.com',
        'phone': '+92-300-9876543',
        'subject': 'Website Testing',
        'message': 'This is a test message from the KFT website contact form. The email system is working correctly and can send formatted emails with proper greetings based on the time of day.'
    }
    
    try:
        success = bot.send_contact_message(contact_test_data)
        if success:
            print("✅ Contact message email sent successfully!")
        else:
            print("❌ Failed to send contact message email")
    except Exception as e:
        print(f"❌ Error sending contact email: {e}")
    
    print()
    time.sleep(2)  # Wait 2 seconds between tests
    
    # Test 3: Aid Application
    print("🧪 TEST 3: Aid Application Email")
    print("-" * 30)
    
    aid_test_data = {
        'fullName': 'Test Aid Applicant',
        'cnic': '12345-1234567-1',
        'phone': '+92-300-5555555',
        'email': 'test.aid@example.com',
        'address': 'Test House, Test Street, Test Area, Barikot',
        'city': 'Swat',
        'aidType': 'Medical',
        'monthlyIncome': '20000',
        'familyMembers': '5',
        'urgencyLevel': 'Medium',
        'reasonForAid': 'This is a test aid application to verify that the email system correctly formats and sends aid requests to the appropriate recipients.'
    }
    
    try:
        success = bot.send_aid_application(aid_test_data)
        if success:
            print("✅ Aid application email sent successfully!")
        else:
            print("❌ Failed to send aid application email")
    except Exception as e:
        print(f"❌ Error sending aid email: {e}")
    
    print()
    print("🎉 Email System Testing Completed!")
    print("=" * 50)
    print("📝 Please check the following inboxes:")
    print("   • preetykhan88@gmail.com (volunteer & aid applications)")
    print("   • admykjcs2023@gmail.com (volunteer & aid applications)")
    print("   • khegarha.falahi.tanzeem@gmail.com (contact messages)")
    print()
    print("⏰ Note: Emails may take a few minutes to arrive.")
    print("📧 Check spam/junk folders if emails don't appear in inbox.")

if __name__ == "__main__":
    test_email_system()
