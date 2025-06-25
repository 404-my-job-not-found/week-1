var longestPalindrome = function (s) {
  if (!s || s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);

    let len = Math.max(len1, len2);

    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLen);
};

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};
