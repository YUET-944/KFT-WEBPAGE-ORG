import json
from datetime import datetime

def create_manual_testing_checklist():
    """Create a comprehensive manual testing checklist"""
    
    checklist = {
        "test_date": datetime.now().strftime('%Y-%m-%d'),
        "tester_name": "",
        "browser_info": "",
        "device_info": "",
        "categories": {
            "navigation": {
                "name": "Navigation & Header",
                "tests": [
                    {"test": "Logo displays correctly", "status": "pending", "notes": ""},
                    {"test": "All navigation links work", "status": "pending", "notes": ""},
                    {"test": "Mobile menu opens/closes", "status": "pending", "notes": ""},
                    {"test": "Donate button is prominent", "status": "pending", "notes": ""},
                    {"test": "Emergency contact visible", "status": "pending", "notes": ""},
                    {"test": "Navigation highlights current page", "status": "pending", "notes": ""}
                ]
            },
            "homepage": {
                "name": "Homepage Components",
                "tests": [
                    {"test": "Hero section loads properly", "status": "pending", "notes": ""},
                    {"test": "KFT logo displays in hero", "status": "pending", "notes": ""},
                    {"test": "Mission statement is clear", "status": "pending", "notes": ""},
                    {"test": "Impact statistics show correctly", "status": "pending", "notes": ""},
                    {"test": "Service cards display properly", "status": "pending", "notes": ""},
                    {"test": "Call-to-action buttons work", "status": "pending", "notes": ""},
                    {"test": "Background gradients render", "status": "pending", "notes": ""}
                ]
            },
            "forms": {
                "name": "Form Functionality",
                "tests": [
                    {"test": "Contact form validates required fields", "status": "pending", "notes": ""},
                    {"test": "Contact form sends email successfully", "status": "pending", "notes": ""},
                    {"test": "Volunteer form handles checkboxes", "status": "pending", "notes": ""},
                    {"test": "Volunteer form sends application", "status": "pending", "notes": ""},
                    {"test": "Aid application form validates", "status": "pending", "notes": ""},
                    {"test": "Aid application sends email", "status": "pending", "notes": ""},
                    {"test": "Success messages display", "status": "pending", "notes": ""},
                    {"test": "Error handling works", "status": "pending", "notes": ""}
                ]
            },
            "content": {
                "name": "Content & Images",
                "tests": [
                    {"test": "All images load correctly", "status": "pending", "notes": ""},
                    {"test": "Image alt text is descriptive", "status": "pending", "notes": ""},
                    {"test": "Text content is accurate", "status": "pending", "notes": ""},
                    {"test": "Contact information is correct", "status": "pending", "notes": ""},
                    {"test": "Social media links work", "status": "pending", "notes": ""},
                    {"test": "Gallery slideshow functions", "status": "pending", "notes": ""},
                    {"test": "Facebook integration works", "status": "pending", "notes": ""}
                ]
            },
            "responsive": {
                "name": "Responsive Design",
                "tests": [
                    {"test": "Mobile layout looks good", "status": "pending", "notes": ""},
                    {"test": "Tablet layout is functional", "status": "pending", "notes": ""},
                    {"test": "Desktop layout is optimal", "status": "pending", "notes": ""},
                    {"test": "Touch targets are adequate", "status": "pending", "notes": ""},
                    {"test": "Text is readable on all sizes", "status": "pending", "notes": ""},
                    {"test": "Images scale appropriately", "status": "pending", "notes": ""}
                ]
            },
            "performance": {
                "name": "Performance & Loading",
                "tests": [
                    {"test": "Pages load within 3 seconds", "status": "pending", "notes": ""},
                    {"test": "Images load progressively", "status": "pending", "notes": ""},
                    {"test": "No console errors", "status": "pending", "notes": ""},
                    {"test": "Smooth scrolling and animations", "status": "pending", "notes": ""},
                    {"test": "Forms submit quickly", "status": "pending", "notes": ""}
                ]
            },
            "accessibility": {
                "name": "Accessibility",
                "tests": [
                    {"test": "Keyboard navigation works", "status": "pending", "notes": ""},
                    {"test": "Focus indicators are visible", "status": "pending", "notes": ""},
                    {"test": "Screen reader compatibility", "status": "pending", "notes": ""},
                    {"test": "Color contrast is adequate", "status": "pending", "notes": ""},
                    {"test": "Form labels are proper", "status": "pending", "notes": ""}
                ]
            },
            "functionality": {
                "name": "Core Functionality",
                "tests": [
                    {"test": "Email system works in production", "status": "pending", "notes": ""},
                    {"test": "All external links open correctly", "status": "pending", "notes": ""},
                    {"test": "Google Maps integration works", "status": "pending", "notes": ""},
                    {"test": "Phone numbers are clickable", "status": "pending", "notes": ""},
                    {"test": "Email addresses are clickable", "status": "pending", "notes": ""}
                ]
            }
        }
    }
    
    return checklist

def print_testing_checklist():
    """Print a formatted testing checklist"""
    
    print("📋 MANUAL TESTING CHECKLIST")
    print("=" * 80)
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("Tester: ________________")
    print("Browser: _______________")
    print("Device: ________________")
    print()
    
    checklist = create_manual_testing_checklist()
    
    for category_key, category in checklist["categories"].items():
        print(f"📂 {category['name'].upper()}")
        print("-" * 50)
        
        for i, test in enumerate(category["tests"], 1):
            print(f"{i:2d}. [ ] {test['test']}")
            print(f"     Notes: _________________________________")
            print()
        
        print()
    
    print("📊 SUMMARY")
    print("-" * 50)
    print("Total Tests Passed: _____ / _____")
    print("Critical Issues Found: _____")
    print("Minor Issues Found: _____")
    print()
    print("Overall Status: [ ] PASS  [ ] FAIL  [ ] NEEDS WORK")
    print()
    print("Additional Notes:")
    print("_" * 50)
    print("_" * 50)
    print("_" * 50)

def create_browser_testing_matrix():
    """Create a browser compatibility testing matrix"""
    
    print()
    print("🌐 BROWSER COMPATIBILITY TESTING MATRIX")
    print("=" * 80)
    
    browsers = [
        "Chrome (Latest)",
        "Firefox (Latest)", 
        "Safari (Latest)",
        "Edge (Latest)",
        "Chrome Mobile",
        "Safari Mobile"
    ]
    
    key_features = [
        "Page Loading",
        "Form Submission", 
        "Image Display",
        "Responsive Design",
        "JavaScript Functions",
        "CSS Styling"
    ]
    
    print("Browser".ljust(20), end="")
    for feature in key_features:
        print(feature[:12].ljust(13), end="")
    print()
    print("-" * 100)
    
    for browser in browsers:
        print(browser.ljust(20), end="")
        for feature in key_features:
            print("[ ]".ljust(13), end="")
        print()
    
    print()
    print("Legend: [✓] Pass  [✗] Fail  [~] Partial  [ ] Not Tested")

def create_device_testing_checklist():
    """Create device-specific testing checklist"""
    
    print()
    print("📱 DEVICE TESTING CHECKLIST")
    print("=" * 80)
    
    devices = {
        "Mobile Phones": [
            "iPhone (iOS Safari)",
            "Android (Chrome)",
            "Small screen (320px)",
            "Large screen (414px)"
        ],
        "Tablets": [
            "iPad (Safari)",
            "Android Tablet (Chrome)",
            "Portrait orientation",
            "Landscape orientation"
        ],
        "Desktop": [
            "1920x1080 resolution",
            "1366x768 resolution",
            "4K resolution",
            "Ultrawide monitor"
        ]
    }
    
    for device_type, device_list in devices.items():
        print(f"📱 {device_type}")
        print("-" * 30)
        for device in device_list:
            print(f"[ ] {device}")
        print()

if __name__ == "__main__":
    print("📋 KFT Website Manual Testing Documentation")
    print()
    
    print_testing_checklist()
    create_browser_testing_matrix()
    create_device_testing_checklist()
    
    print()
    print("💡 TESTING TIPS:")
    print("1. Test on real devices when possible")
    print("2. Use browser developer tools for responsive testing")
    print("3. Test with slow internet connections")
    print("4. Verify email functionality with real email addresses")
    print("5. Check console for JavaScript errors")
    print("6. Test form validation with invalid data")
    print("7. Verify all links and buttons work")
    print("8. Test accessibility with keyboard navigation")
    print()
    print("✅ Happy Testing!")
