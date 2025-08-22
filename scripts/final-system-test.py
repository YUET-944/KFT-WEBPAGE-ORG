from email_bot import KFTEmailBot
import time

def final_comprehensive_test():
    """Final comprehensive test with corrected email addresses"""
    
    print("🎯 FINAL COMPREHENSIVE EMAIL SYSTEM TEST")
    print("=" * 60)
    
    bot = KFTEmailBot()
    
    print("📧 CORRECTED EMAIL CONFIGURATION:")
    print(f"   Volunteer Recipients: {', '.join(bot.VOLUNTEER_RECIPIENTS)}")
    print(f"   Contact Recipients: {', '.join(bot.CONTACT_RECIPIENTS)}")
    
    # Test 1: Volunteer Application
    print("\n🧪 TEST 1: Volunteer Application")
    print("-" * 30)
    
    volunteer_data = {
        'fullName': 'Final Test Volunteer',
        'email': 'final.test@example.com',
        'phone': '+92-300-9999999',
        'age': '30',
        'city': 'Swat',
        'profession': 'Final Tester',
        'interests': ['Final Testing', 'Email Verification'],
        'availability': 'Now',
        'experience': 'Testing corrected email system',
        'skills': 'Email system validation',
        'motivation': 'To confirm mykjcs2023@gmail.com receives volunteer applications'
    }
    
    try:
        success = bot.send_volunteer_application(volunteer_data)
        if success:
            print("✅ Volunteer application sent successfully!")
            print("📬 Should arrive at: preetykhan88@gmail.com + mykjcs2023@gmail.com")
        else:
            print("❌ Failed to send volunteer application")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    time.sleep(3)
    
    # Test 2: Contact Message
    print("\n🧪 TEST 2: Contact Message")
    print("-" * 30)
    
    contact_data = {
        'name': 'Final Test Contact',
        'email': 'final.contact@example.com',
        'phone': '+92-300-8888888',
        'subject': 'Final Email System Test',
        'message': 'This is the final test to confirm the email system works with corrected addresses. The mykjcs2023@gmail.com address should now receive emails properly.'
    }
    
    try:
        success = bot.send_contact_message(contact_data)
        if success:
            print("✅ Contact message sent successfully!")
            print("📬 Should arrive at: khegarha.falahi.tanzeem@gmail.com")
        else:
            print("❌ Failed to send contact message")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    time.sleep(3)
    
    # Test 3: Aid Application
    print("\n🧪 TEST 3: Aid Application")
    print("-" * 30)
    
    aid_data = {
        'fullName': 'Final Test Aid Applicant',
        'cnic': '99999-9999999-9',
        'phone': '+92-300-7777777',
        'email': 'final.aid@example.com',
        'address': 'Final Test Address, Swat',
        'city': 'Swat',
        'aidType': 'Testing',
        'monthlyIncome': '1',
        'familyMembers': '1',
        'urgencyLevel': 'Testing',
        'reasonForAid': 'Final test to verify aid applications reach mykjcs2023@gmail.com correctly'
    }
    
    try:
        success = bot.send_aid_application(aid_data)
        if success:
            print("✅ Aid application sent successfully!")
            print("📬 Should arrive at: preetykhan88@gmail.com + mykjcs2023@gmail.com")
        else:
            print("❌ Failed to send aid application")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    print("\n🎉 FINAL COMPREHENSIVE TEST COMPLETED!")
    print("=" * 60)
    print("📧 CHECK THESE EMAIL ACCOUNTS:")
    print("   1. preetykhan88@gmail.com (volunteer + aid applications)")
    print("   2. mykjcs2023@gmail.com (volunteer + aid applications) ← CORRECTED!")
    print("   3. khegarha.falahi.tanzeem@gmail.com (contact messages)")
    print()
    print("🔍 SEARCH FOR: 'Final Test' in subject lines")
    print("⏰ Check emails in next 2-5 minutes")
    print("📞 Confirm receipt: +92-300-907-7229")

if __name__ == "__main__":
    final_comprehensive_test()
