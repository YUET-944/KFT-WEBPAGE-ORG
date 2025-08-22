import time
import requests
import json
from datetime import datetime

def test_component_loading():
    """Test all components and pages for loading and functionality"""
    
    print("🧪 COMPREHENSIVE KFT WEBSITE COMPONENT TESTING")
    print("=" * 60)
    print(f"Test Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    # Base URL - update this to your actual deployment URL
    base_url = "https://your-kft-website.vercel.app"  # Replace with actual URL
    
    # Test pages and their expected status
    test_pages = [
        {"path": "/", "name": "Homepage", "critical": True},
        {"path": "/about", "name": "About Page", "critical": True},
        {"path": "/services", "name": "Services Page", "critical": True},
        {"path": "/apply-aid", "name": "Apply Aid Page", "critical": True},
        {"path": "/volunteer", "name": "Volunteer Page", "critical": True},
        {"path": "/contact", "name": "Contact Page", "critical": True},
        {"path": "/gallery", "name": "Gallery Page", "critical": False},
        {"path": "/donate", "name": "Donate Page", "critical": True},
        {"path": "/transparency", "name": "Transparency Page", "critical": False},
        {"path": "/news", "name": "News Page", "critical": False},
    ]
    
    # API endpoints to test
    api_endpoints = [
        {"path": "/api/send-contact-email", "name": "Contact Email API", "method": "POST"},
        {"path": "/api/send-volunteer-email", "name": "Volunteer Email API", "method": "POST"},
        {"path": "/api/send-aid-email", "name": "Aid Application API", "method": "POST"},
    ]
    
    results = {
        "pages": [],
        "apis": [],
        "summary": {
            "total_tests": 0,
            "passed": 0,
            "failed": 0,
            "warnings": 0
        }
    }
    
    print("📄 TESTING PAGES")
    print("-" * 30)
    
    for page in test_pages:
        print(f"Testing {page['name']}... ", end="")
        start_time = time.time()
        
        try:
            response = requests.get(f"{base_url}{page['path']}", timeout=10)
            load_time = round((time.time() - start_time) * 1000, 2)
            
            if response.status_code == 200:
                status = "✅ PASS"
                results["summary"]["passed"] += 1
                
                # Check for common issues
                content = response.text.lower()
                issues = []
                
                if "error" in content:
                    issues.append("Contains error text")
                if "404" in content:
                    issues.append("Contains 404 reference")
                if len(content) < 1000:
                    issues.append("Content seems too short")
                if load_time > 3000:
                    issues.append(f"Slow loading ({load_time}ms)")
                
                if issues:
                    status = "⚠️ PASS (with warnings)"
                    results["summary"]["warnings"] += 1
                    print(f"{status} - {load_time}ms")
                    for issue in issues:
                        print(f"    ⚠️ {issue}")
                else:
                    print(f"{status} - {load_time}ms")
                    
            else:
                status = "❌ FAIL"
                results["summary"]["failed"] += 1
                print(f"{status} - HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            status = "❌ FAIL"
            results["summary"]["failed"] += 1
            print(f"{status} - Connection Error: {str(e)}")
            load_time = 0
        
        results["pages"].append({
            "name": page["name"],
            "path": page["path"],
            "status": status,
            "load_time": load_time,
            "critical": page["critical"]
        })
        
        results["summary"]["total_tests"] += 1
        time.sleep(0.5)  # Small delay between requests
    
    print()
    print("🔌 TESTING API ENDPOINTS")
    print("-" * 30)
    
    # Test API endpoints with sample data
    sample_data = {
        "contact": {
            "name": "Test User",
            "email": "test@example.com",
            "subject": "Test Message",
            "message": "This is a test message from automated testing."
        },
        "volunteer": {
            "fullName": "Test Volunteer",
            "email": "volunteer@example.com",
            "phone": "+92-300-1234567",
            "age": "25",
            "city": "Test City",
            "availability": "weekends",
            "motivation": "Test motivation for volunteering",
            "agreeToTerms": True,
            "interests": ["Food Distribution"]
        },
        "aid": {
            "fullName": "Test Applicant",
            "cnic": "12345-1234567-1",
            "phone": "+92-300-1234567",
            "address": "Test Address",
            "city": "Test City",
            "aidType": "food",
            "monthlyIncome": "15000",
            "familyMembers": "4",
            "reasonForAid": "Test reason for aid application",
            "urgencyLevel": "medium",
            "agreeToTerms": True
        }
    }
    
    for api in api_endpoints:
        print(f"Testing {api['name']}... ", end="")
        start_time = time.time()
        
        try:
            # Determine which sample data to use
            if "contact" in api["path"]:
                data = sample_data["contact"]
            elif "volunteer" in api["path"]:
                data = sample_data["volunteer"]
            elif "aid" in api["path"]:
                data = sample_data["aid"]
            else:
                data = {}
            
            response = requests.post(
                f"{base_url}{api['path']}", 
                json=data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            load_time = round((time.time() - start_time) * 1000, 2)
            
            if response.status_code == 200:
                try:
                    result = response.json()
                    if result.get("success"):
                        status = "✅ PASS"
                        results["summary"]["passed"] += 1
                        print(f"{status} - {load_time}ms")
                    else:
                        status = "⚠️ PARTIAL"
                        results["summary"]["warnings"] += 1
                        print(f"{status} - API responded but returned error: {result.get('message', 'Unknown error')}")
                except json.JSONDecodeError:
                    status = "⚠️ PARTIAL"
                    results["summary"]["warnings"] += 1
                    print(f"{status} - Invalid JSON response")
            else:
                status = "❌ FAIL"
                results["summary"]["failed"] += 1
                print(f"{status} - HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            status = "❌ FAIL"
            results["summary"]["failed"] += 1
            print(f"{status} - Connection Error: {str(e)}")
            load_time = 0
        
        results["apis"].append({
            "name": api["name"],
            "path": api["path"],
            "status": status,
            "load_time": load_time
        })
        
        results["summary"]["total_tests"] += 1
        time.sleep(0.5)
    
    print()
    print("📊 TEST SUMMARY")
    print("=" * 60)
    print(f"Total Tests: {results['summary']['total_tests']}")
    print(f"✅ Passed: {results['summary']['passed']}")
    print(f"⚠️ Warnings: {results['summary']['warnings']}")
    print(f"❌ Failed: {results['summary']['failed']}")
    
    success_rate = (results['summary']['passed'] / results['summary']['total_tests']) * 100
    print(f"Success Rate: {success_rate:.1f}%")
    
    print()
    print("🔍 DETAILED RESULTS")
    print("-" * 30)
    
    # Critical failures
    critical_failures = [p for p in results["pages"] if p["critical"] and "FAIL" in p["status"]]
    if critical_failures:
        print("❌ CRITICAL FAILURES:")
        for failure in critical_failures:
            print(f"  • {failure['name']} ({failure['path']})")
    
    # Slow pages
    slow_pages = [p for p in results["pages"] if p["load_time"] > 2000]
    if slow_pages:
        print("🐌 SLOW LOADING PAGES:")
        for page in slow_pages:
            print(f"  • {page['name']}: {page['load_time']}ms")
    
    # API issues
    api_issues = [a for a in results["apis"] if "FAIL" in a["status"]]
    if api_issues:
        print("🔌 API ISSUES:")
        for api in api_issues:
            print(f"  • {api['name']} ({api['path']})")
    
    print()
    print("💡 RECOMMENDATIONS")
    print("-" * 30)
    
    if critical_failures:
        print("1. Fix critical page failures immediately")
    if slow_pages:
        print("2. Optimize slow-loading pages")
    if api_issues:
        print("3. Check API endpoint configurations")
    if results['summary']['failed'] == 0:
        print("✅ All tests passed! Website is functioning well.")
    
    print()
    print(f"Test Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    return results

def test_component_specific_features():
    """Test specific component features and functionality"""
    
    print()
    print("🎯 COMPONENT-SPECIFIC FEATURE TESTS")
    print("=" * 60)
    
    features_to_test = [
        {
            "component": "Header",
            "features": [
                "Logo display",
                "Navigation menu",
                "Mobile menu toggle",
                "Donate button",
                "Emergency contact"
            ]
        },
        {
            "component": "Footer", 
            "features": [
                "Organization info",
                "Quick links",
                "Contact information",
                "Social media links"
            ]
        },
        {
            "component": "Homepage",
            "features": [
                "Hero section",
                "Impact statistics",
                "Services preview",
                "Call to action"
            ]
        },
        {
            "component": "Contact Form",
            "features": [
                "Form validation",
                "Email sending",
                "Success message",
                "Error handling"
            ]
        },
        {
            "component": "Volunteer Form",
            "features": [
                "Multi-step form",
                "Checkbox handling",
                "Form submission",
                "Email notification"
            ]
        },
        {
            "component": "Aid Application",
            "features": [
                "Form validation",
                "File upload (UI)",
                "Terms agreement",
                "Email notification"
            ]
        },
        {
            "component": "Gallery",
            "features": [
                "Image slideshow",
                "Facebook integration",
                "Image categories",
                "Responsive design"
            ]
        },
        {
            "component": "Services Page",
            "features": [
                "Service cards",
                "Image display",
                "Application process",
                "Call to action"
            ]
        }
    ]
    
    for component in features_to_test:
        print(f"📋 {component['component']} Component:")
        for feature in component['features']:
            print(f"  • {feature}")
        print()
    
    print("Note: These features should be manually tested in the browser")
    print("for complete functionality verification.")

def test_responsive_design():
    """Test responsive design considerations"""
    
    print()
    print("📱 RESPONSIVE DESIGN CHECKLIST")
    print("=" * 60)
    
    responsive_tests = [
        "Mobile navigation menu works",
        "Images scale properly on mobile",
        "Forms are usable on small screens",
        "Text is readable on all devices",
        "Buttons are touch-friendly",
        "Cards stack properly on mobile",
        "Gallery works on touch devices",
        "Contact information is accessible"
    ]
    
    for i, test in enumerate(responsive_tests, 1):
        print(f"{i}. {test}")
    
    print()
    print("📏 Test these breakpoints:")
    print("  • Mobile: 320px - 768px")
    print("  • Tablet: 768px - 1024px") 
    print("  • Desktop: 1024px+")

def test_accessibility():
    """Test accessibility features"""
    
    print()
    print("♿ ACCESSIBILITY CHECKLIST")
    print("=" * 60)
    
    accessibility_tests = [
        "Alt text for all images",
        "Proper heading hierarchy (h1, h2, h3)",
        "Form labels are associated with inputs",
        "Focus indicators are visible",
        "Color contrast meets WCAG standards",
        "Keyboard navigation works",
        "Screen reader compatibility",
        "ARIA labels where needed"
    ]
    
    for i, test in enumerate(accessibility_tests, 1):
        print(f"{i}. {test}")

if __name__ == "__main__":
    print("🚀 Starting Comprehensive KFT Website Testing...")
    print()
    
    # Note: Update the base_url in test_component_loading() function
    # to your actual deployment URL before running
    
    print("⚠️  IMPORTANT: Update the base_url in the script to your actual deployment URL")
    print("   Example: https://your-kft-website.vercel.app")
    print()
    
    # Uncomment the line below and update the URL to run the tests
    # results = test_component_loading()
    
    # Run other tests
    test_component_specific_features()
    test_responsive_design() 
    test_accessibility()
    
    print()
    print("✅ Testing script completed!")
    print("📝 Manual testing is still required for complete verification.")
