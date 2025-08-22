from email_bot import KFTEmailBot
import time
from datetime import datetime

def test_volunteer_form_with_dummy_data():
    """Test volunteer form with realistic dummy data"""
    
    print("🧪 TESTING VOLUNTEER FORM WITH DUMMY DATA")
    print("=" * 50)
    
    bot = KFTEmailBot()
    
    # Realistic dummy volunteer data
    dummy_volunteer_data = {
        'fullName': 'Muhammad Ahmad Khan',
        'email': 'ahmad.khan.volunteer@gmail.com',
        'phone': '+92-300-1234567',
        'age': '28',
        'city': 'Mingora, Swat',
        'profession': 'Software Engineer',
        'interests': [
            'Education Support', 
            'Medical Support', 
            'Food Distribution',
            'Event Organization'
        ],
        'availability': 'Weekends',
        'experience': 'I have been volunteering with local NGOs for the past 3 years. Previously worked with Sarhad Rural Support Programme (SRSP) for community development projects in Swat district. Also helped organize medical camps in remote villages.',
        'skills': 'Computer programming, Web development, Teaching mathematics and science, First aid certified, Photography and videography, Fluent in Pashto, Urdu, and English',
        'motivation': 'I was born and raised in Swat, and I have seen firsthand the challenges faced by families in remote areas. After completing my education and establishing my career, I want to give back to my community. KFT\'s work in providing food assistance, healthcare, and education support aligns perfectly with my values. I believe technology can help improve the efficiency of welfare programs, and I would love to contribute my technical skills while also participating in direct community service.'
    }
    
    print("👤 DUMMY VOLUNTEER DATA:")
    print(f"   Name: {dummy_volunteer_data['fullName']}")
    print(f"   Email: {dummy_volunteer_data['email']}")
    print(f"   Phone: {dummy_volunteer_data['phone']}")
    print(f"   City: {dummy_volunteer_data['city']}")
    print(f"   Profession: {dummy_volunteer_data['profession']}")
    print(f"   Interests: {', '.join(dummy_volunteer_data['interests'])}")
    print(f"   Availability: {dummy_volunteer_data['availability']}")
    
    print(f"\n📧 EMAIL WILL BE SENT TO:")
    for email in bot.VOLUNTEER_RECIPIENTS:
        print(f"   ✅ {email}")
    
    try:
        print(f"\n📤 Sending volunteer application...")
        success = bot.send_volunteer_application(dummy_volunteer_data)
        
        if success:
            print("✅ VOLUNTEER APPLICATION SENT SUCCESSFULLY!")
            print(f"⏰ Sent at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
            print("\n📬 CHECK THESE EMAIL ACCOUNTS:")
            print("   1. preetykhan88@gmail.com")
            print("   2. mykjcs2023@gmail.com ← CORRECTED ADDRESS!")
            print("\n🔍 SEARCH FOR:")
            print("   Subject: '🤝 New Volunteer Application - Muhammad Ahmad Khan'")
            print("   From: khegarha.falahi.tanzeem@gmail.com")
            print("\n⏰ Emails should arrive within 2-5 minutes")
            print("📞 Please confirm receipt: +92-300-907-7229")
            return True
        else:
            print("❌ FAILED TO SEND VOLUNTEER APPLICATION")
            return False
            
    except Exception as e:
        print(f"❌ ERROR SENDING VOLUNTEER APPLICATION: {e}")
        return False

def test_multiple_volunteer_applications():
    """Send multiple volunteer applications to thoroughly test the system"""
    
    print("\n🔄 SENDING MULTIPLE TEST APPLICATIONS...")
    print("-" * 40)
    
    bot = KFTEmailBot()
    
    # Multiple dummy volunteers
    volunteers = [
        {
            'fullName': 'Fatima Bibi',
            'email': 'fatima.volunteer@gmail.com',
            'phone': '+92-300-2345678',
            'age': '25',
            'city': 'Barikot, Swat',
            'profession': 'Teacher',
            'interests': ['Education Support', 'Food Distribution'],
            'availability': 'Weekdays',
            'experience': 'Teaching at government school for 2 years',
            'skills': 'Teaching, Child psychology, Local language skills',
            'motivation': 'I want to help improve education in our community'
        },
        {
            'fullName': 'Ali Hassan',
            'email': 'ali.hassan.help@gmail.com',
            'phone': '+92-300-3456789',
            'age': '32',
            'city': 'Kalam, Swat',
            'profession': 'Medical Assistant',
            'interests': ['Medical Support', 'Event Organization'],
            'availability': 'Flexible',
            'experience': 'Working in healthcare for 5 years',
            'skills': 'Medical assistance, First aid, Patient care',
            'motivation': 'Healthcare is my passion and I want to serve those in need'
        },
        {
            'fullName': 'Zainab Shah',
            'email': 'zainab.community@gmail.com',
            'phone': '+92-300-4567890',
            'age': '30',
            'city': 'Matta, Swat',
            'profession': 'Social Worker',
            'interests': ['Community Outreach', 'Administrative Support'],
            'availability': 'Both weekdays and weekends',
            'experience': 'Community development work for 4 years',
            'skills': 'Community mobilization, Documentation, Event planning',
            'motivation': 'I believe in empowering communities through collective action'
        }
    ]
    
    for i, volunteer in enumerate(volunteers, 1):
        print(f"\n📤 Sending application {i}/3: {volunteer['fullName']}")
        
        try:
            success = bot.send_volunteer_application(volunteer)
            if success:
                print(f"✅ Application {i} sent successfully!")
            else:
                print(f"❌ Application {i} failed to send")
        except Exception as e:
            print(f"❌ Error sending application {i}: {e}")
        
        time.sleep(3)  # Wait 3 seconds between applications
    
    print(f"\n🎉 ALL TEST APPLICATIONS SENT!")
    print(f"📧 Total emails sent to each recipient: {len(volunteers) + 1}")  # +1 for the first test
    print(f"📬 Check both volunteer email accounts for multiple test emails")

if __name__ == "__main__":
    print("🚀 TESTING VOLUNTEER FORM WITH DUMMY DATA...")
    
    # Send first comprehensive test
    success = test_volunteer_form_with_dummy_data()
    
    if success:
        print("\n" + "="*50)
        # Send multiple applications for thorough testing
        test_multiple_volunteer_applications()
        
        print("\n📋 TESTING SUMMARY:")
        print("✅ Corrected email address: mykjcs2023@gmail.com")
        print("✅ Sent realistic volunteer application with dummy data")
        print("✅ Sent multiple test applications")
        print("✅ All emails should arrive at both volunteer recipients")
        print("\n📞 NEXT STEPS:")
        print("1. Check preetykhan88@gmail.com inbox and spam")
        print("2. Check mykjcs2023@gmail.com inbox and spam")
        print("3. Confirm receipt by calling +92-300-907-7229")
        print("4. If emails arrive, the system is working perfectly!")
    else:
        print("\n❌ Initial test failed - check email configuration")
