import time
import requests
from datetime import datetime

def test_page_performance():
    """Test page loading performance"""
    
    print("⚡ PERFORMANCE TESTING")
    print("=" * 50)
    print(f"Started: {datetime.now().strftime('%H:%M:%S')}")
    print()
    
    # Update this URL to your actual deployment
    base_url = "https://your-kft-website.vercel.app"
    
    pages_to_test = [
        {"path": "/", "name": "Homepage"},
        {"path": "/about", "name": "About"},
        {"path": "/services", "name": "Services"},
        {"path": "/contact", "name": "Contact"},
        {"path": "/volunteer", "name": "Volunteer"},
        {"path": "/apply-aid", "name": "Apply Aid"},
        {"path": "/gallery", "name": "Gallery"},
        {"path": "/donate", "name": "Donate"}
    ]
    
    results = []
    
    for page in pages_to_test:
        print(f"Testing {page['name']}... ", end="")
        
        # Test multiple times for average
        times = []
        for i in range(3):
            start_time = time.time()
            try:
                response = requests.get(f"{base_url}{page['path']}", timeout=15)
                load_time = (time.time() - start_time) * 1000
                times.append(load_time)
            except Exception as e:
                print(f"Error: {e}")
                times.append(0)
            time.sleep(1)
        
        avg_time = sum(times) / len(times) if times else 0
        
        # Performance rating
        if avg_time < 1000:
            rating = "🟢 Excellent"
        elif avg_time < 2000:
            rating = "🟡 Good"
        elif avg_time < 3000:
            rating = "🟠 Fair"
        else:
            rating = "🔴 Poor"
        
        print(f"{avg_time:.0f}ms - {rating}")
        
        results.append({
            "page": page["name"],
            "avg_time": avg_time,
            "rating": rating
        })
    
    print()
    print("📊 PERFORMANCE SUMMARY")
    print("-" * 30)
    
    total_time = sum(r["avg_time"] for r in results)
    avg_overall = total_time / len(results)
    
    print(f"Average Load Time: {avg_overall:.0f}ms")
    
    fast_pages = [r for r in results if r["avg_time"] < 1000]
    slow_pages = [r for r in results if r["avg_time"] > 3000]
    
    print(f"Fast Pages (< 1s): {len(fast_pages)}")
    print(f"Slow Pages (> 3s): {len(slow_pages)}")
    
    if slow_pages:
        print("\n🐌 Slow Pages:")
        for page in slow_pages:
            print(f"  • {page['page']}: {page['avg_time']:.0f}ms")
    
    print()
    print("💡 Performance Recommendations:")
    if avg_overall > 2000:
        print("• Consider image optimization")
        print("• Enable compression")
        print("• Minimize JavaScript bundles")
    else:
        print("✅ Performance looks good!")

if __name__ == "__main__":
    print("⚠️  Update base_url to your deployment URL before running")
    print()
    # Uncomment to run: test_page_performance()
