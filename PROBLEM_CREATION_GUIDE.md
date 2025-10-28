# How to Create the "Two Sum" Problem from Frontend

Follow these steps to create the Two Sum problem using the Admin Panel:

## Basic Information

### Title
```
Two Sum
```

### Description
```
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
• 2 <= nums.length <= 10^4
• -10^9 <= nums[i] <= 10^9
• -10^9 <= target <= 10^9
• Only one valid answer exists.
```

### Difficulty
Select: **Easy**

### Tag
Select: **Array**

---

## Visible Test Cases

### Test Case 1
**Input:**
```
2 7 11 15
9
```

**Output:**
```
0 1
```

**Explanation:**
```
nums[0] + nums[1] = 2 + 7 = 9, so we return indices [0, 1]
```

### Test Case 2
**Input:**
```
3 2 4
6
```

**Output:**
```
1 2
```

**Explanation:**
```
nums[1] + nums[2] = 2 + 4 = 6, so we return indices [1, 2]
```

---

## Hidden Test Cases

### Hidden Test Case 1
**Input:**
```
3 3
6
```

**Output:**
```
0 1
```

### Hidden Test Case 2
**Input:**
```
1 5 3 7 9
12
```

**Output:**
```
2 3
```

### Hidden Test Case 3
**Input:**
```
-1 -2 -3 -4 -5
-8
```

**Output:**
```
2 4
```

---

## Code Templates

### C++ - Initial Code
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your code here
    
}

int main() {
    int n;
    vector<int> nums;
    while(cin >> n) nums.push_back(n);
    int target = nums.back();
    nums.pop_back();
    
    vector<int> result = twoSum(nums, target);
    cout << result[0] << " " << result[1];
    return 0;
}
```

### C++ - Reference Solution
```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    for(int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if(map.find(complement) != map.end()) {
            return {map[complement], i};
        }
        map[nums[i]] = i;
    }
    return {};
}

int main() {
    int n;
    vector<int> nums;
    while(cin >> n) nums.push_back(n);
    int target = nums.back();
    nums.pop_back();
    
    vector<int> result = twoSum(nums, target);
    cout << result[0] << " " << result[1];
    return 0;
}
```

---

### Java - Initial Code
```java
import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your code here
        
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> list = new ArrayList<>();
        while(sc.hasNextInt()) {
            list.add(sc.nextInt());
        }
        int[] nums = new int[list.size()-1];
        for(int i=0; i<nums.length; i++) {
            nums[i] = list.get(i);
        }
        int target = list.get(list.size()-1);
        
        int[] result = twoSum(nums, target);
        System.out.print(result[0] + " " + result[1]);
    }
}
```

### Java - Reference Solution
```java
import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if(map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> list = new ArrayList<>();
        while(sc.hasNextInt()) {
            list.add(sc.nextInt());
        }
        int[] nums = new int[list.size()-1];
        for(int i=0; i<nums.length; i++) {
            nums[i] = list.get(i);
        }
        int target = list.get(list.size()-1);
        
        int[] result = twoSum(nums, target);
        System.out.print(result[0] + " " + result[1]);
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

function twoSum(nums, target) {
    // Write your code here
    
}

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const nums = lines[0].split(' ').map(Number);
    const target = parseInt(lines[1]);
    const result = twoSum(nums, target);
    console.log(result[0] + ' ' + result[1]);
});
```

### JavaScript - Reference Solution
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function twoSum(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const nums = lines[0].split(' ').map(Number);
    const target = parseInt(lines[1]);
    const result = twoSum(nums, target);
    console.log(result[0] + ' ' + result[1]);
});
```

---

## Steps to Submit

1. Go to Admin Panel at `http://localhost:5173/admin`
2. Click on "Create Problem"
3. Fill in all the fields above
4. Click "Add Visible Case" to add the 2 visible test cases
5. Click "Add Hidden Case" to add the 3 hidden test cases
6. Fill in the code templates for all 3 languages (C++, Java, JavaScript)
7. Click "Create Problem"
8. Wait for validation (the backend will test your reference solutions)
9. If successful, you'll see a success message and be redirected to home

## Troubleshooting

If you see a network error:
1. Make sure your backend is running on `http://localhost:5000`
2. Make sure your frontend is running on `http://localhost:5173`
3. Make sure you're logged in as an admin
4. Check browser console for detailed error messages
5. Check backend terminal for error logs
