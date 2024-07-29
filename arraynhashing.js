console.log('array & hashing');
let s = '()[{}()]';

let open = ['(', '[', '{'];
let close = [')', ']', '}'];

function isBalanceParanthesis(s) {
  if (close.includes(s[0])) {
    return false;
  }

  let paran = [];

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      paran.push(s[i]);
    }

    if (close.includes(s[i])) {
      let topSymbol = paran[paran.length - 1];
      let openIndex = open.indexOf(topSymbol);
      let closeIndex = close.indexOf(s[i]);

      console.log(openIndex, closeIndex);

      if (openIndex === closeIndex) {
        paran.pop();
      }
    }
  }

  console.log(paran);

  return paran.length === 0;
}

var containsDuplicate = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      return true;
    } else {
      hash[nums[i]] = 1;
    }
  }

  return false;

  let set = new Set(nums);

  return set.size !== nums.length;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  if (s === t) {
    return true;
  }

  let sHash = {};
  let tHash = {};

  for (let i = 0; i < s.length; i++) {
    sHash[s[i]] = sHash[s[i]] !== undefined ? ++sHash[s[i]] : 1;
    tHash[t[i]] = tHash[t[i]] !== undefined ? ++tHash[t[i]] : 1;
  }

  return (
    Object.keys(sHash).filter((key) => sHash[key] !== tHash[key]).length === 0
  );
};

let nums = [2, 3, 11, 15, 7];
function twoSum(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hash[complement] !== undefined) {
      return [hash[complement], i];
    } else {
      hash[nums[i]] = i;
    }
  }

  return [];
}

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
let strs2 = ['c', 'c'];

var groupAnagrams = function (strs) {
  let myMap = new Map();
  strs.forEach((ele) => {
    let eleSorted = ele.split('').sort().join('');
    if (myMap.has(eleSorted)) {
      myMap.set(eleSorted, [ele, ...myMap.get(eleSorted)]);
    } else myMap.set(eleSorted, [ele]);
  });

  return Array.from(myMap.keys());
};
