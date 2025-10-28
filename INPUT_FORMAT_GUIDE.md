# 📝 Input Format Guide for Test Cases

## Understanding Multi-line Input

When creating problems, you often need to provide multi-line input to Judge0. The input fields are now **textarea** elements that support multi-line input.

---

## ✅ How to Enter Multi-line Input

### Example: Array with Size
If you want to input:
- First line: array size (4)
- Second line: array elements (1 2 3 4)

**Type in the Input field:**
```
4
1 2 3 4
```

**How to type it:**
1. Click in the "Input" textarea
2. Type `4`
3. Press **Enter** (creates new line)
4. Type `1 2 3 4`

---

## 📋 Common Input Formats

### Format 1: Size then Elements (Separate Lines)
```
4
1 2 3 4
```
- Line 1: Size of array
- Line 2: Array elements separated by spaces

### Format 2: Multiple Arrays
```
3
1 2 3
4
5 6 7 8
```
- Line 1: Size of first array
- Line 2: First array elements
- Line 3: Size of second array
- Line 4: Second array elements

### Format 3: Size and Target
```
4
1 2 3 4
5
```
- Line 1: Array size
- Line 2: Array elements
- Line 3: Target value

### Format 4: Matrix Input
```
3 3
1 2 3
4 5 6
7 8 9
```
- Line 1: Rows and columns
- Lines 2-4: Matrix rows

---

## 🎯 Example Problem: Two Sum

### Problem Setup
**Input Format:**
- Line 1: Array elements (space-separated)
- Line 2: Target value

### Test Case Example

**Input field (multi-line textarea):**
```
2 7 11 15
9
```

**Output field:**
```
0 1
```

**Explanation field:**
```
nums[0] + nums[1] = 2 + 7 = 9, so we return indices [0, 1]
```

---

## 🔧 Updated Code Templates

### C++ Template for Multi-line Input

#### Example 1: Size on first line, elements on second line
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;  // Read size from first line
    
    vector<int> nums(n);
    for(int i = 0; i < n; i++) {
        cin >> nums[i];  // Read elements from second line
    }
    
    // Your solution here
    
    return 0;
}
```

#### Example 2: All elements on one line
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    vector<int> nums;
    
    while(cin >> n) {
        nums.push_back(n);  // Read all numbers
    }
    
    // Your solution here
    
    return 0;
}
```

#### Example 3: Size then elements, then target
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;  // First line: size
    
    vector<int> nums(n);
    for(int i = 0; i < n; i++) {
        cin >> nums[i];  // Second line: elements
    }
    
    int target;
    cin >> target;  // Third line: target
    
    // Your solution here
    
    return 0;
}
```

---

### Java Template for Multi-line Input

#### Example 1: Size then elements
```java
import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();  // First line: size
        int[] nums = new int[n];
        
        for(int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();  // Second line: elements
        }
        
        // Your solution here
    }
}
```

#### Example 2: Multiple lines with different data
```java
import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();  // Line 1
        int[] nums = new int[n];
        
        for(int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();  // Line 2
        }
        
        int target = sc.nextInt();  // Line 3
        
        // Your solution here
    }
}
```

---

### JavaScript Template for Multi-line Input

#### Example 1: Using readline (Node.js)
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const n = parseInt(lines[0]);  // First line: size
    const nums = lines[1].split(' ').map(Number);  // Second line: elements
    
    // Your solution here
});
```

#### Example 2: With target value
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const n = parseInt(lines[0]);  // Line 1: size
    const nums = lines[1].split(' ').map(Number);  // Line 2: elements
    const target = parseInt(lines[2]);  // Line 3: target
    
    // Your solution here
});
```

---

## 💡 Complete Example: Find Maximum with Size

### Problem Description
Given the size of an array on the first line and the array elements on the second line, find the maximum number.

### Test Case Input (in textarea):
```
5
3 7 2 9 1
```

### Test Case Output:
```
9
```

### C++ Solution:
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;  // Read size from line 1
    
    vector<int> nums(n);
    for(int i = 0; i < n; i++) {
        cin >> nums[i];  // Read elements from line 2
    }
    
    int maxNum = *max_element(nums.begin(), nums.end());
    cout << maxNum;
    
    return 0;
}
```

### Java Solution:
```java
import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();  // Read size from line 1
        int[] nums = new int[n];
        
        for(int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();  // Read elements from line 2
        }
        
        int max = nums[0];
        for(int i = 1; i < n; i++) {
            if(nums[i] > max) max = nums[i];
        }
        
        System.out.print(max);
    }
}
```

### JavaScript Solution:
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const n = parseInt(lines[0]);  // Read size from line 1
    const nums = lines[1].split(' ').map(Number);  // Read elements from line 2
    
    const max = Math.max(...nums);
    console.log(max);
});
```

---

## 🎨 UI Features

### New Textarea Features:
- ✅ **Multi-line support** - Press Enter to create new lines
- ✅ **Monospace font** - Better for reading code-like input
- ✅ **Auto-resize** - Default 3 rows for input, 2 for output
- ✅ **Helpful placeholders** - Shows example format
- ✅ **Clear labels** - "(use Enter for new line)" reminder

---

## ⚠️ Common Mistakes

### ❌ Wrong: Using `\n` literally
Don't type the characters `\` and `n`:
```
4\n1 2 3 4  ❌ WRONG
```

### ✅ Correct: Press Enter key
Actually press the Enter key on your keyboard:
```
4
1 2 3 4  ✅ CORRECT
```

---

## 🧪 Testing Your Input Format

### Step 1: Create a simple test
**Input:**
```
3
5 10 15
```

**Output:**
```
15
```

### Step 2: Verify with your code template
Make sure your code reads:
1. First line as a number (3)
2. Second line as array elements (5, 10, 15)

### Step 3: Check Judge0 behavior
When submitted to Judge0, your input is sent exactly as typed, with actual newline characters.

---

## 📚 Quick Reference

| Scenario | Input Format | Example |
|----------|-------------|---------|
| Single line | All on one line | `1 2 3 4 5` |
| Size + Elements | Two lines | `5`<br>`1 2 3 4 5` |
| Multiple arrays | Alternating lines | `3`<br>`1 2 3`<br>`4`<br>`5 6 7 8` |
| Matrix | Rows x Cols + data | `2 3`<br>`1 2 3`<br>`4 5 6` |
| With target | Elements + target | `2 7 11 15`<br>`9` |

---

## 🎯 Pro Tips

1. **Always test locally first** - Run your solution with the exact input format
2. **Match your code template** - Input format must match how your code reads data
3. **Use descriptive placeholders** - The placeholder shows "Example: 4\n1 2 3 4"
4. **Check spacing** - Judge0 is strict about exact output matches
5. **Newlines matter** - Make sure your output doesn't have extra newlines

---

## 🔗 Related Files

- `QUICK_START_TEST.md` - Updated with multi-line examples
- `PROBLEM_CREATION_GUIDE.md` - Two Sum problem with proper format
- `SIMPLE_ARRAY_PROBLEM.md` - Simple examples

---

**Happy Problem Creating! 🚀**
