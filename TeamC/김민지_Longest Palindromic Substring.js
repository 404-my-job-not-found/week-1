var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }

  let start = 0;
  let maxLength = 1;

  for (let i = 0; i < s.length; i++) {
    let left = expandAroundCenter(s, i, i);
    let right = expandAroundCenter(s, i, i + 1);

    let max = Math.max(left, right);

    if (maxLength < max) {
      start = i - Math.floor((max - 1) / 2);
      maxLength = max;
    }
  }

  return s.substring(start, start + maxLength);
};

function expandAroundCenter(s, left, right) {
  while (0 <= left && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

// DP
// var longestPalindrome = function (s) {
//   const n = s.length;

//   if (n < 2) {
//     return s;
//   }

//   const dp = Array(n)
//     .fill()
//     .map(() => Array(n).fill(false));

//   let start = 0;
//   let maxLength = 1;

//   for (let i = 0; i < n; i++) {
//     dp[i][i] = true;
//   }

//   for (let i = 0; i < n - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       dp[i][i + 1] = true;
//       start = i;
//       maxLength = 2;
//     }
//   }

//   for (let len = 3; len <= n; len++) {
//     for (let i = 0; i <= n - len; i++) {
//       const j = i + len - 1;

//       if (s[i] === s[j] && dp[i + 1][j - 1]) {
//         dp[i][j] = true;

//         if (maxLength < len) {
//           start = i;
//           maxLength = len;
//         }
//       }
//     }
//   }

//   return s.substring(start, start + maxLength);
// };

// Manacher 알고리즘
// var longestPalindrome = function (s) {
//   if (s.length < 2) {
//     return s;
//   }

//   const t = '#' + s.split('').join('#') + '#';
//   const n = t.length;

//   const p = new Array(n).fill(0);
//   let center = 0;
//   let right = 0;

//   for (let i = 0; i < n; i++) {
//     if (i < right) {
//       p[i] = Math.min(right - i, p[2 * center - i]);
//     }

//     let left = i - (p[i] + 1);
//     let r = i + (p[i] + 1);

//     while (left >= 0 && r < n && t[left] === t[r]) {
//       p[i]++;
//       left--;
//       r++;
//     }

//     if (i + p[i] > right) {
//       center = i;
//       right = i + p[i];
//     }
//   }

//   let maxLen = 0;
//   let maxCenter = 0;

//   for (let i = 0; i < n; i++) {
//     if (maxLen < p[i]) {
//       maxLen = p[i];
//       maxCenter = i;
//     }
//   }

//   const start = Math.floor((maxCenter - maxLen) / 2);

//   return s.substring(start, start + maxLen);
// };
