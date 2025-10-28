# 🚀 Quick Start - Test Problem Creation

## ⚡ Fast Test (5 Minutes)

### 1️⃣ Start Servers

**Terminal 1 - Backend:**
```bash
cd ViCode_Backend
npm start
```
Wait for: `"Connected to Database"` and `"Server is listening at port no. 5000"`

**Terminal 2 - Frontend:**
```bash
cd ViCode_Frontend
npm run dev
```
Wait for: Local server running at `http://localhost:5173`

---

### 2️⃣ Login as Admin
1. Open browser: `http://localhost:5173`
2. Click "Login"
3. Enter admin credentials
4. Navigate to Admin Panel

---

### 3️⃣ Create Simple Test Problem

Copy and paste the following into the form:

#### Basic Info
- **Title:** `Find Maximum Number`
- **Description:** `Given an array of integers, find and return the maximum number.`
- **Difficulty:** `Easy`
- **Tag:** `Array`

#### Visible Test Case 1
Click "Add Visible Case"
- **Input:** (Type this exactly, pressing Enter after the first line)
```
1 5 3 9 2
```
- **Output:** `9`
- **Explanation:** `The maximum number is 9`

#### Visible Test Case 2
Click "Add Visible Case"
- **Input:**
```
-1 -5 -3
```
- **Output:** `-1`
- **Explanation:** `The maximum number is -1`

#### Hidden Test Case 1
Click "Add Hidden Case"
- **Input:**
```
100
```
- **Output:** `100`

#### Hidden Test Case 2
Click "Add Hidden Case"
- **Input:**
```
5 10 15 20 25
```
- **Output:** `25`

#### C++ Initial Code
```cpp
#include <iostream>
#include <vector>
using namespace std;

int findMax(vector<int>& nums) {
    // Write your code here
    
}

int main() {
    int n;
    vector<int> nums;
    while(cin >> n) nums.push_back(n);
    
    int result = findMax(nums);
    cout << result;
    return 0;
}
```

#### C++ Reference Solution
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int findMax(vector<int>& nums) {
    return *max_element(nums.begin(), nums.end());
}

int main() {
    int n;
    vector<int> nums;
    while(cin >> n) nums.push_back(n);
    
    int result = findMax(nums);
    cout << result;
    return 0;
}
```

#### Java Initial Code
```java
import java.util.*;

class Solution {
    public static int findMax(int[] nums) {
        // Write your code here
        
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> list = new ArrayList<>();
        while(sc.hasNextInt()) {
            list.add(sc.nextInt());
        }
        int[] nums = new int[list.size()];
        for(int i=0; i<nums.length; i++) {
            nums[i] = list.get(i);
        }
        
        int result = findMax(nums);
        System.out.print(result);
    }
}
```

#### Java Reference Solution
```java
import java.util.*;

class Solution {
    public static int findMax(int[] nums) {
        int max = nums[0];
        for(int i=1; i<nums.length; i++) {
            if(nums[i] > max) {
                max = nums[i];
            }
        }
        return max;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> list = new ArrayList<>();
        while(sc.hasNextInt()) {
            list.add(sc.nextInt());
        }
        int[] nums = new int[list.size()];
        for(int i=0; i<nums.length; i++) {
            nums[i] = list.get(i);
        }
        
        int result = findMax(nums);
        System.out.print(result);
    }
}
```

#### JavaScript Initial Code
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMax(nums) {
    // Write your code here
    
}

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const nums = lines[0].split(' ').map(Number);
    const result = findMax(nums);
    console.log(result);
});
```

#### JavaScript Reference Solution
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMax(nums) {
    return Math.max(...nums);
}

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const nums = lines[0].split(' ').map(Number);
    const result = findMax(nums);
    console.log(result);
});
```

---

### 4️⃣ Submit and Wait

1. Click **"Create Problem"** button
2. Wait 15-30 seconds (backend is validating solutions)
3. Watch for success message
4. Check browser console if any errors

---

## ✅ Success Indicators

- ✅ Alert: "Problem created successfully!"
- ✅ Redirected to home page
- ✅ Backend console: Multiple `status_id: 3` logs
- ✅ No errors in browser console

---

## ❌ Troubleshooting

### "Token is not present"
→ You're not logged in as admin. Login again.

### "Network Error"
→ Check backend is running on port 5000
→ Check browser console for details

### "Reference solution failed test cases"
→ Double-check you copied the code correctly
→ Ensure no extra spaces or missing characters

### Validation Taking Forever
→ This is normal! Backend tests all solutions
→ Wait up to 30 seconds

---

## 🎯 What Happens During Validation?

1. Backend receives your problem data
2. For each language (C++, Java, JavaScript):
   - Extracts reference solution
   - Gets Judge0 language ID
   - Creates batch submission with all visible test cases
   - Submits to Judge0 API
   - Waits for results
   - Checks if all test cases passed (status_id === 3)
3. If ALL tests pass → Problem saved to MongoDB
4. If ANY test fails → Error returned to frontend

---

## 📝 Notes

- Input format: Space-separated numbers on one line
- Output format: Single number
- Test cases must be EXACT matches
- Judge0 may have rate limits (use wisely)
- Validation ensures problem quality

---

## 🔗 More Examples

- **Detailed Guide:** See `PROBLEM_CREATION_GUIDE.md` for Two Sum problem
- **Simple Guide:** See `SIMPLE_ARRAY_PROBLEM.md` for this problem with more details
- **JSON Format:** See `sample_array_problem.json` for data structure

---

## 🐛 Still Having Issues?

1. Check `FIXES_APPLIED.md` for all changes made
2. Verify MongoDB and Redis are running
3. Check `.env` file has correct credentials
4. Clear browser cache and cookies
5. Restart both backend and frontend
6. Check network tab in browser DevTools

---

**Good Luck! 🚀**
