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
