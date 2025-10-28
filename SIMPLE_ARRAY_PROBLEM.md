# Simple Array Problem - Find Maximum

This is a very simple problem to test the frontend problem creation.

## Basic Information

**Title:** Find Maximum Number

**Description:**
```
Given an array of integers, find and return the maximum number in the array.

Example 1:
Input: [1, 5, 3, 9, 2]
Output: 9

Example 2:
Input: [-1, -5, -3]
Output: -1

Constraints:
• 1 <= array.length <= 1000
• -10^9 <= array[i] <= 10^9
```

**Difficulty:** Easy

**Tag:** Array

---

## Visible Test Cases

### Test Case 1
**Input:** `1 5 3 9 2`
**Output:** `9`
**Explanation:** `The maximum number in [1,5,3,9,2] is 9`

### Test Case 2
**Input:** `-1 -5 -3`
**Output:** `-1`
**Explanation:** `The maximum number in [-1,-5,-3] is -1`

---

## Hidden Test Cases

### Hidden Test Case 1
**Input:** `100`
**Output:** `100`

### Hidden Test Case 2
**Input:** `5 10 15 20 25`
**Output:** `25`

### Hidden Test Case 3
**Input:** `-100 -50 -200`
**Output:** `-50`

---

## C++ Code

### Initial Code:
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

### Reference Solution:
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

---

## Java Code

### Initial Code:
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

### Reference Solution:
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

---

## JavaScript Code

### Initial Code:
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

### Reference Solution:
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
