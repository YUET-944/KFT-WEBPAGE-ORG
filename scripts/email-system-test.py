import requests
import json
import time
from datetime import datetime

def test_email_system():
    """Test all email endpoints thoroughly"""
    
    print("📧 EMAIL SYSTEM TESTING")
    print("=" * 50)
    print(f"Started: {datetime.now().strftime('%H:%M:%S')}")
    print()
    
    # Update this URL
    base_url = "https://your-kft-website.vercel.app"
    
    # Test data for different forms
    test_cases = {
        "contact": {
            "endpoint": "/api/send-contact-email",
            "data": {
                "name": "Test User",
                "email": "test@example.com",
                "phone": "+92-300-1234567",
                "subject": "Test Contact Message",
                "message": "This is a test message to verify the contact form email system is working properly."
            }
        },
        "volunteer": {
            "endpoint": "/api/send-volunteer-email", 
            "data": {
                "fullName": "Test Volunteer",
                "email": "volunteer@example.com",
                "phone": "+92-300-1234567",
                "age": "25",
                "city": "Islamabad",
                "profession": "Software Developer",
                "availability": "weekends",
                "interests": ["Food Distribution", "Medical Support"],
                "experience": "Previous volunteer experience with local NGO",
                "skills": "Communication, Organization, First Aid",
                "motivation": "I want to help my community and make a positive impact in people's lives.",
                "agreeToTerms": True
            }
        },
        "aid": {
            "endpoint": "/api/send-aid-email",
            "data": {
                "fullName": "Test Applicant",
                "cnic": "12345-1234567-1",
                "phone": "+92-300-1234567",
                "email": "applicant@example.com",
                "address": "Test Address, Test Area, Test City",
                "city": "Swat",
                "aidType": "food",
                "monthlyIncome": "15000",
                "familyMembers": "5",
                "reasonForAid": "Lost job due to economic conditions and need food assistance for family.",
                "urgencyLevel": "high",
                "hasAppliedBefore": False,
                "agreeToTerms": True
            }
        }
    }
    
    results = []
    
    for form_type, test_case in test_cases.items():
        print(f"Testing {form_type.title()} Form Email... ", end="")
        
        start_time = time.time()
        
        try:
            response = requests.post(
                f"{base_url}{test_case['endpoint']}",
                json=test_case['data'],
                headers={"Content-Type": "application/json"},
                timeout=15
            )
            
            response_time = (time.time() - start_time) * 1000
            
            if response.status_code == 200:
                try:
                    result = response.json()
                    if result.get("success"):
                        status = "✅ SUCCESS"
                        print(f"{status} ({response_time:.0f}ms)")
                    else:
                        status = "❌ FAILED"
                        print(f"{status} - {result.get('message', 'Unknown error')}")
                except json.JSONDecodeError:
                    status = "⚠️ PARTIAL"
                    print(f"{status} - Invalid JSON response")
            else:
                status = "❌ FAILED"
                print(f"{status} - HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            status = "❌ ERROR"
            response_time = 0
            print(f"{status} - {str(e)}")
        
        results.append({
            "form": form_type,
            "status": status,
            "response_time": response_time
        })
        
        time.sleep(2)  # Delay between tests
    
    print()
    print("📊 EMAIL SYSTEM SUMMARY")
    print("-" * 30)
    
    successful = [r for r in results if "SUCCESS" in r["status"]]
    failed = [r for r in results if "FAILED" in r["status"] or "ERROR" in r["status"]]
    
    print(f"✅ Successful: {len(successful)}/{len(results)}")
    print(f"❌ Failed: {len(failed)}/{len(results)}")
    
    if failed:
        print("\n❌ Failed Tests:")
        for result in failed:
            print(f"  • {result['form'].title()} Form")
    
    avg_response_time = sum(r["response_time"] for r in results if r["response_time"] > 0) / len(results)
    print(f"\n⏱️ Average Response Time: {avg_response_time:.0f}ms")
    
    print()
    print("📝 MANUAL VERIFICATION NEEDED:")
    print("1. Check email inboxes:")
    print("   • khegarha.falahi.tanzeem@gmail.com")
    print("   • preetykhan88@gmail.com") 
    print("   • mykjcs2023@gmail.com")
    print("2. Verify email content is properly formatted")
    print("3. Check that all form data is included")
    print("4. Confirm emails are not going to spam")

def test_email_validation():
    """Test email validation and error handling"""
    
    print()
    print("🔍 EMAIL VALIDATION TESTING")
    print("-" * 30)
    
    base_url = "https://your-kft-website.vercel.app"
    
    # Test invalid data
    invalid_tests = [
        {
            "name": "Empty Contact Form",
            "endpoint": "/api/send-contact-email",
            "data": {}
        },
        {
            "name": "Invalid Email Format",
            "endpoint": "/api/send-contact-email", 
            "data": {
                "name": "Test",
                "email": "invalid-email",
                "message": "Test"
            }
        },
        {
            "name": "Missing Required Fields",
            "endpoint": "/api/send-volunteer-email",
            "data": {
                "fullName": "Test"
                # Missing required fields
            }
        }
    ]
    
    for test in invalid_tests:
        print(f"Testing {test['name']}... ", end="")
        
        try:
            response = requests.post(
                f"{base_url}{test['endpoint']}",
                json=test['data'],
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 400 or response.status_code == 500:
                print("✅ PASS (Properly rejected)")
            elif response.status_code == 200:
                result = response.json()
                if not result.get("success"):
                    print("✅ PASS (Error handled)")
                else:
                    print("⚠️ WARNING (Should have been rejected)")
            else:
                print(f"❓ UNKNOWN (HTTP {response.status_code})")
                
        except Exception as e:
            print(f"❌ ERROR - {str(e)}")

if __name__ == "__main__":
    print("⚠️  Update base_url to your deployment URL before running")
    print()
    # Uncomment to run:
    # test_email_system()
    # test_email_validation()
