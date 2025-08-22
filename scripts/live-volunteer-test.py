from email_bot import KFTEmailBot
from datetime import datetime

def send_live_volunteer_test():
    """Send a live volunteer application test that mimics real form submission"""
    
    print("🔴 LIVE VOLUNTEER FORM TEST - SIMULATING REAL SUBMISSION")
    print("=" * 60)
    
    bot = KFTEmailBot()
    
    # Get current time for realistic timestamp
    current_time = datetime.now()
    
    # Realistic volunteer data as if someone just filled the form
    live_volunteer_data = {
        'fullName': 'Syed Imran Ali',
        'email': 'imran.ali.swat@gmail.com',
        'phone': '+92-345-1234567',
        'age': '26',
        'city': 'Kabal, Swat',
        'profession': 'Civil Engineer',
        'interests': [
            'Food Distribution',
            'Event Organization', 
            'Administrative Support',
            'Documentation'
        ],
        'availability': 'Both weekdays and weekends',
        'experience': 'I have volunteered with Pakistan Red Crescent Society during flood relief operations in 2022. Also helped organize community events in my village including health awareness campaigns and tree plantation drives. Have experience in coordinating with local government officials for development projects.',
        'skills': 'Project management, Engineering surveying, Computer skills (MS Office, AutoCAD), Photography, Event coordination, Public speaking in Pashto and Urdu, Motorcycle driving license for field visits',
        'motivation': 'Growing up in Swat, I have witnessed both the natural beauty and the socio-economic challenges of our region. After completing my engineering degree, I realized that technical knowledge alone is not enough - we need to actively participate in community welfare. KFT\'s comprehensive approach to addressing food security, healthcare, and education resonates with my belief that sustainable development requires addressing multiple needs simultaneously. I want to use my engineering background to help with infrastructure-related projects while also contributing to direct service delivery. My goal is to help KFT expand its reach to more remote villages in upper Swat where I have family connections and local knowledge.'
    }
    
    print("🎯 LIVE TEST DETAILS:")
    print(f"   📅 Submission Time: {current_time.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"   👤 Volunteer: {live_volunteer_data['fullName']}")
    print(f"   📧 Email: {live_volunteer_data['email']}")
    print(f"   📱 Phone: {live_volunteer_data['phone']}")
    print(f"   🏙️ Location: {live_volunteer_data['city']}")
    print(f"   💼 Profession: {live_volunteer_data['profession']}")
    print(f"   🎯 Interests: {len(live_volunteer_data['interests'])} areas selected")
    print(f"   ⏰ Availability: {live_volunteer_data['availability']}")
    
    print(f"\n📧 EMAIL RECIPIENTS (CORRECTED):")
    for i, email in enumerate(bot.VOLUNTEER_RECIPIENTS, 1):
        print(f"   {i}. {email}")
    
    try:
        print(f"\n📤 SENDING LIVE VOLUNTEER APPLICATION...")
        print("   (This simulates what happens when someone submits the volunteer form)")
        
        success = bot.send_volunteer_application(live_volunteer_data)
        
        if success:
            print("\n🎉 LIVE VOLUNTEER APPLICATION SENT SUCCESSFULLY!")
            print("=" * 50)
            print("✅ EMAIL DELIVERY STATUS: SENT")
            print(f"✅ TIMESTAMP: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
            print("✅ RECIPIENTS: Both volunteer email addresses")
            print("✅ CONTENT: Complete volunteer application with all details")
            
            print(f"\n📬 IMMEDIATE ACTION REQUIRED:")
            print("1. 🔍 Check preetykhan88@gmail.com RIGHT NOW")
            print("2. 🔍 Check mykjcs2023@gmail.com RIGHT NOW")
            print("3. 📧 Look for subject: '🤝 New Volunteer Application - Syed Imran Ali'")
            print("4. 🗂️ Check SPAM/JUNK folders if not in inbox")
            print("5. 📞 Call +92-300-907-7229 to confirm receipt")
            
            print(f"\n⏰ EXPECTED DELIVERY: Within 2-5 minutes")
            print(f"🔍 SEARCH KEYWORDS: 'Syed Imran Ali', 'KFT', 'Volunteer Application'")
            
            return True
        else:
            print("\n❌ FAILED TO SEND LIVE VOLUNTEER APPLICATION")
            print("🔧 Check email configuration and try again")
            return False
            
    except Exception as e:
        print(f"\n❌ ERROR IN LIVE TEST: {e}")
        return False

def verify_email_system_status():
    """Verify the current status of the email system"""
    
    print("\n🔍 EMAIL SYSTEM STATUS VERIFICATION")
    print("-" * 40)
    
    bot = KFTEmailBot()
    
    print("📧 CURRENT CONFIGURATION:")
    print(f"   Sender: {bot.EMAIL_ADDRESS}")
    print(f"   Password: {'✅ Configured' if bot.EMAIL_PASSWORD else '❌ Missing'}")
    
    print(f"\n👥 VOLUNTEER RECIPIENTS:")
    for i, email in enumerate(bot.VOLUNTEER_RECIPIENTS, 1):
        print(f"   {i}. {email}")
    
    print(f"\n📬 CONTACT RECIPIENTS:")
    for i, email in enumerate(bot.CONTACT_RECIPIENTS, 1):
        print(f"   {i}. {email}")
    
    print(f"\n✅ RECENT CORRECTIONS:")
    print("   • Fixed: admykjcs2023@gmail.com → mykjcs2023@gmail.com")
    print("   • Status: Email addresses updated in system")
    print("   • Ready: System ready for live testing")

if __name__ == "__main__":
    print("🚀 STARTING LIVE VOLUNTEER FORM TEST...")
    
    # Verify system status first
    verify_email_system_status()
    
    print("\n" + "="*60)
    
    # Send live test
    success = send_live_volunteer_test()
    
    if success:
        print("\n🎯 LIVE TEST COMPLETED SUCCESSFULLY!")
        print("📧 Now check both email accounts immediately!")
        print("📞 Report results: +92-300-907-7229")
    else:
        print("\n❌ Live test failed - system needs attention")
