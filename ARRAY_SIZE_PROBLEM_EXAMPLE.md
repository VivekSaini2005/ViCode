# Complete Example: Sum of Array Elements

This example demonstrates how to create a problem with **size on first line, elements on second line** format.

---

## Problem Statement

### Title
**Sum of Array Elements**

### Description
```
Given an array of integers, calculate and return the sum of all elements.

Input Format:
- First line: n (size of array)
- Second line: n space-separated integers

Output Format:
- Single integer (sum of all elements)

Example 1:
Input:
5
1 2 3 4 5
Output:
15
Explanation: 1 + 2 + 3 + 4 + 5 = 15

Example 2:
Input:
3
10 20 30
Output:
60
Explanation: 10 + 20 + 30 = 60

Constraints:
• 1 <= n <= 1000
• -10^6 <= array[i] <= 10^6
```

### Difficulty
Easy

### Tag
Array

---

## Test Cases

### Visible Test Case 1

**Input:** (Press Enter after first line!)
```
5
1 2 3 4 5
```

**Output:**
```
15
```

**Explanation:**
```
Sum of elements: 1 + 2 + 3 + 4 + 5 = 15
```

---

### Visible Test Case 2

**Input:**
```
3
10 20 30
```

**Output:**
```
60
```

**Explanation:**
```
Sum of elements: 10 + 20 + 30 = 60
```

---

### Hidden Test Case 1

**Input:**
```
1
100
```

**Output:**
```
100
```

---

### Hidden Test Case 2

**Input:**
```
4
-5 10 -3 8
```

**Output:**
```
10
```

---

### Hidden Test Case 3

**Input:**
```
6
0 0 0 0 0 0
```

**Output:**
```
0
```

---

## Code Templates

### C++ - Initial Code
```cpp
#include <iostream>
#include <vector>
using namespace std;

int sumArray(vector<int>& nums) {
    // Write your code here
    
}

int main() {
    int n;
    cin >> n;  // Read size from first line
    
    vector<int> nums(n);
    for(int i = 0; i < n; i++) {
        cin >> nums[i];  // Read elements from second line
    }
    
    int result = sumArray(nums);
    cout << result;
    return 0;
}
```

### C++ - Reference Solution
```cpp
#include <iostream>
#include <vector>
using namespace std;

int sumArray(vector<int>& nums) {
    int sum = 0;
    for(int num : nums) {
        sum += num;
    }
    return sum;
}

int main() {
    int n;
    cin >> n;  // Read size from first line
    
    vector<int> nums(n);
    for(int i = 0; i < n; i++) {
        cin >> nums[i];  // Read elements from second line
    }
    
    int result = sumArray(nums);
    cout << result;
    return 0;
}
```

---

### Java - Initial Code
```java
import java.util.*;

class Solution {
    public static int sumArray(int[] nums) {
        // Write your code here
        
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();  // Read size from first line
        int[] nums = new int[n];
        
        for(int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();  // Read elements from second line
        }
        
        int result = sumArray(nums);
        System.out.print(result);
    }
}
```

### Java - Reference Solution
```java
import java.util.*;

class Solution {
    public static int sumArray(int[] nums) {
        int sum = 0;
        for(int num : nums) {
            sum += num;
        }
        return sum;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();  // Read size from first line
        int[] nums = new int[n];
        
        for(int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();  // Read elements from second line
        }
        
        int result = sumArray(nums);
        System.out.print(result);
    }
}
```

---

### JavaScript - Initial Code
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumArray(nums) {
    // Write your code here
    
}

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const n = parseInt(lines[0]);  // Read size from first line
    const nums = lines[1].split(' ').map(Number);  // Read elements from second line
    
    const result = sumArray(nums);
    console.log(result);
});
```

### JavaScript - Reference Solution
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumArray(nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const n = parseInt(lines[0]);  // Read size from first line
    const nums = lines[1].split(' ').map(Number);  // Read elements from second line
    
    const result = sumArray(nums);
    console.log(result);
});
```

---

## 📋 Step-by-Step Form Filling

### 1. Basic Information
- **Title:** `Sum of Array Elements`
- **Difficulty:** Select `Easy`
- **Tag:** Select `Array`
- **Description:** Copy the description from above

---

### 2. Visible Test Cases

#### Test Case 1
Click "Add Visible Case"

**Input field:** (Type exactly as shown, press Enter after "5")
```
5
1 2 3 4 5
```

**Output field:**
```
15
```

**Explanation field:**
```
Sum of elements: 1 + 2 + 3 + 4 + 5 = 15
```

#### Test Case 2
Click "Add Visible Case"

**Input field:**
```
3
10 20 30
```

**Output field:**
```
60
```

**Explanation field:**
```
Sum of elements: 10 + 20 + 30 = 60
```

---

### 3. Hidden Test Cases

#### Hidden Test 1
Click "Add Hidden Case"

**Input:**
```
1
100
```

**Output:**
```
100
```

#### Hidden Test 2
Click "Add Hidden Case"

**Input:**
```
4
-5 10 -3 8
```

**Output:**
```
10
```

#### Hidden Test 3
Click "Add Hidden Case"

**Input:**
```
6
0 0 0 0 0 0
```

**Output:**
```
0
```

---

### 4. Code Templates

Copy each code template into the respective language section:
- C++ Initial Code → C++ section (Initial Code textarea)
- C++ Reference Solution → C++ section (Reference Solution textarea)
- Java Initial Code → Java section (Initial Code textarea)
- Java Reference Solution → Java section (Reference Solution textarea)
- JavaScript Initial Code → JavaScript section (Initial Code textarea)
- JavaScript Reference Solution → JavaScript section (Reference Solution textarea)

---

### 5. Submit

Click **"Create Problem"** and wait 15-30 seconds for validation.

---

## 🎯 Expected Behavior

### During Submission:
1. Button shows "Creating Problem..."
2. Button is disabled
3. Backend validates each reference solution
4. Judge0 runs all visible test cases
5. Each test must return `status_id: 3` (Accepted)

### On Success:
- ✅ Alert: "Problem created successfully!"
- ✅ Redirect to home page
- ✅ Problem saved in MongoDB

### On Failure:
- ❌ Error alert with message
- ❌ Check console for details
- ❌ Verify input format matches code templates

---

## 🔍 How Input is Processed

When you type in the textarea:
```
5
1 2 3 4 5
```

What gets sent to Judge0:
```
"5\n1 2 3 4 5"
```

How C++ reads it:
```cpp
int n;
cin >> n;  // Reads "5"
// Now cin is at the newline, next read gets "1 2 3 4 5"
for(int i = 0; i < n; i++) {
    cin >> nums[i];  // Reads 1, then 2, then 3, then 4, then 5
}
```

How Java reads it:
```java
int n = sc.nextInt();  // Reads 5
// Scanner automatically skips whitespace (spaces and newlines)
for(int i = 0; i < n; i++) {
    nums[i] = sc.nextInt();  // Reads 1, 2, 3, 4, 5
}
```

How JavaScript reads it:
```javascript
const n = parseInt(lines[0]);  // lines[0] = "5"
const nums = lines[1].split(' ').map(Number);  // lines[1] = "1 2 3 4 5" → [1,2,3,4,5]
```

---

## ✅ Verification Checklist

Before clicking "Create Problem":
- [ ] All test case inputs use multi-line format (press Enter, don't type \n)
- [ ] Output values are exact (no extra spaces or newlines)
- [ ] All 3 languages have initial code
- [ ] All 3 languages have reference solutions
- [ ] Reference solutions match the input format
- [ ] At least 2 visible test cases added
- [ ] At least 1 hidden test case added

---

## 🚀 Quick Test

Want to test locally before submitting?

### Save this as `test.cpp`:
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    vector<int> nums(n);
    for(int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    int sum = 0;
    for(int num : nums) {
        sum += num;
    }
    
    cout << sum;
    return 0;
}
```

### Create input file `input.txt`:
```
5
1 2 3 4 5
```

### Run:
```bash
g++ test.cpp -o test
test < input.txt
```

### Expected output:
```
15
```

---

**Perfect! Now you understand multi-line input format! 🎉**
