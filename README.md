### Approach

1. **Sliding Window Technique**:
   - We use two pointers (`left` and `right`) to represent the current window of characters being considered.
   - We move the `right` pointer to expand the window and check for repeating characters.
   - If a character is repeated, we move the `left` pointer to the right of the previous occurrence of the character to ensure no characters are repeated in the current window.

2. **Hashmap for Tracking**:
   - We use a hashmap to store the characters and their latest positions in the string.
   - This allows us to quickly determine if a character is repeated and where to move the `left` pointer.

3. **Updating the Maximum Length**:
   - Throughout the process, we keep track of the maximum length of substrings without repeating characters.

Here is the JavaScript code to implement this approach:

```javascript
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;
    let left = 0;
    let charIndexMap = new Map();

    for (let right = 0; right < n; right++) {
        let currentChar = s[right];

        if (charIndexMap.has(currentChar)) {
            // Move the left pointer to the right of the previous occurrence of currentChar
            left = Math.max(charIndexMap.get(currentChar) + 1, left);
        }

        // Update the character's index in the map
        charIndexMap.set(currentChar, right);

        // Calculate the current length of the window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3 ("abc")

s = "bbbbb";
console.log(lengthOfLongestSubstring(s)); // Output: 1 ("b")

s = "pwwkew";
console.log(lengthOfLongestSubstring(s)); // Output: 3 ("wke")
```

### Explanation of Example

1. **Example 1: "abcabcbb"**:
   - The longest substring without repeating characters is "abc", which has a length of 3.

2. **Example 2: "bbbbb"**:
   - The longest substring without repeating characters is "b", which has a length of 1.

3. **Example 3: "pwwkew"**:
   - The longest substring without repeating characters is "wke", which has a length of 3.

### Detailed Steps

- **Initialization**: 
  - `left` pointer at the start of the string.
  - `maxLength` to keep track of the maximum length found.
  - `charIndexMap` to store characters and their latest positions.

- **Iteration**:
  - For each character in the string, check if it is already in the `charIndexMap`.
  - If it is, update the `left` pointer to skip the previous occurrence of this character.
  - Update the position of the current character in the `charIndexMap`.
  - Calculate the current window length and update `maxLength` if it's greater than the previous `maxLength`.

This approach ensures that each character is processed in linear time, resulting in an overall time complexity of \(O(n)\), where \(n\) is the length of the string. This makes the solution efficient for large inputs.
