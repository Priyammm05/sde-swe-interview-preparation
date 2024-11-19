import React, { useEffect, useState } from "react";

const problems = [
  {
    id: 1,
    name: "Minimum Consecutive Cards to Pick Up",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 2,
    name: "Count Prefixes of a Given String",
    pattern: "Prefix Sum",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/count-prefixes-of-a-given-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 3,
    name: "Find the Difference of Two Arrays",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/find-the-difference-of-two-arrays/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 4,
    name: "Find All K-Distant Indices in an Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 5,
    name: "Most Frequent Number Following Key In an Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 6,
    name: "Counting Words With a Given Prefix",
    pattern: "Prefix Sum",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/counting-words-with-a-given-prefix/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 7,
    name: "All Divisions With the Highest Score of a Binary Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 8,
    name: "Find All Lonely Numbers in the Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 9,
    name: "Destroying Asteroids",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/destroying-asteroids/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 10,
    name: "Maximum Number of Words Found in Sentences",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 11,
    name: "Rings and Rods",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/rings-and-rods/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 12,
    name: "Find Target Indices After Sorting Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/find-target-indices-after-sorting-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 13,
    name: "Watering Plants",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/watering-plants/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 14,
    name: "Smallest Index With Equal Value",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/smallest-index-with-equal-value/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 15,
    name: "Stock Price Fluctuation",
    pattern: "General",
    difficulty: "Medium",
    count: 30,
    link: "https://leetcode.com/problems/stock-price-fluctuation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 16,
    name: "Convert 1D Array Into 2D Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/convert-1d-array-into-2d-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 17,
    name: "Check if Word Can Be Placed In Crossword",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 18,
    name: "Find Original Array From Doubled Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 14,
    link: "https://leetcode.com/problems/find-original-array-from-doubled-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 19,
    name: "The Number of Weak Characters in the Game",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 20,
    name: "Find if Path Exists in Graph",
    pattern: "Graph",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/find-if-path-exists-in-graph/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 21,
    name: "Binary Searchable Numbers in an Unsorted Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 22,
    name: "Concatenation of Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/concatenation-of-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 23,
    name: "Build Array from Permutation",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/build-array-from-permutation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 24,
    name: "Remove All Occurrences of a Substring",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/remove-all-occurrences-of-a-substring/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 25,
    name: "Minimize Maximum Pair Sum in Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 26,
    name: "Minimize Product Sum of Two Arrays",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/minimize-product-sum-of-two-arrays/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 27,
    name: "Sorting the Sentence",
    pattern: "Sorting",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/sorting-the-sentence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 28,
    name: "Maximum Population Year",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/maximum-population-year/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 29,
    name: "Replace All Digits with Characters",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/replace-all-digits-with-characters/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 30,
    name: "Queries on Number of Points Inside a Circle",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 31,
    name: "Sentence Similarity III",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/sentence-similarity-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 32,
    name: "Evaluate the Bracket Pairs of a String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 33,
    name: "Minimum Number of Operations to Reinitialize a Permutation",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 34,
    name: "Sum of Beauty of All Substrings",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 35,
    name: "Map of Highest Peak",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/map-of-highest-peak/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 36,
    name: "Design Most Recently Used Queue",
    pattern: "Queue",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/design-most-recently-used-queue/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 37,
    name: "Latest Time by Replacing Hidden Digits",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 39,
    name: "Tuple with Same Product",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/tuple-with-same-product/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 40,
    name: "Maximum Score From Removing Substrings",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/maximum-score-from-removing-substrings/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 41,
    name: "Largest Subarray Length K",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/largest-subarray-length-k/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 42,
    name: "Concatenation of Consecutive Binary Numbers",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 43,
    name: "Find the Most Competitive Subsequence",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/find-the-most-competitive-subsequence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 44,
    name: "Minimum Operations to Reduce X to Zero",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 45,
    name: "Lowest Common Ancestor of a Binary Tree III",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 46,
    name: "Furthest Building You Can Reach",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/furthest-building-you-can-reach/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 47,
    name: "Count Sorted Vowel Strings",
    pattern: "Sorting",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/count-sorted-vowel-strings/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 48,
    name: "Sort Array by Increasing Frequency",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/sort-array-by-increasing-frequency/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 49,
    name: "Largest Substring Between Two Equal Characters",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/largest-substring-between-two-equal-characters/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 50,
    name: "Mean of Array After Removing Some Elements",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/mean-of-array-after-removing-some-elements/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 51,
    name: "Special Array With X Elements Greater Than or Equal X",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 52,
    name: "Rearrange Spaces Between Words",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/rearrange-spaces-between-words/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 53,
    name: "Dot Product of Two Sparse Vectors",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/dot-product-of-two-sparse-vectors/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 54,
    name: "Minimum Number of Vertices to Reach All Nodes",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 55,
    name: "Make The String Great",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/make-the-string-great/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 56,
    name: "Kth Missing Positive Number",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/kth-missing-positive-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 57,
    name: "Count Good Triplets",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/count-good-triplets/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 58,
    name: "Shuffle String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/shuffle-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 59,
    name: "Minimum Number of Increments on Subarrays to Form a Target Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 60,
    name: "Number of Sub-arrays With Odd Sum",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 61,
    name: "Path with Maximum Probability",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/path-with-maximum-probability/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 62,
    name: "Range Sum of Sorted Subarray Sums",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 63,
    name: "Path Crossing",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/path-crossing/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 64,
    name: "Clone N-ary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/clone-n-ary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 65,
    name: "Minimum Number of Days to Make m Bouquets",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 66,
    name: "The k Strongest Values in an Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/the-k-strongest-values-in-an-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 67,
    name: "Check If a String Contains All Binary Codes of Size K",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 68,
    name: "People Whose List of Favorite Companies Is Not a Subset of Another List",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 69,
    name: "Simplified Fractions",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/simplified-fractions/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 70,
    name: "Consecutive Characters",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/consecutive-characters/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 71,
    name: "Build an Array With Stack Operations",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/build-an-array-with-stack-operations/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 72,
    name: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 73,
    name: "Destination City",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/destination-city/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 74,
    name: "Leftmost Column with at Least a One",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/leftmost-column-with-at-least-a-one/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 75,
    name: "Maximum Points You Can Obtain from Cards",
    pattern: "General",
    difficulty: "Medium",
    count: 17,
    link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 76,
    name: "Maximum Score After Splitting a String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/maximum-score-after-splitting-a-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 77,
    name: "Reformat The String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/reformat-the-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 78,
    name: "Pizza With 3n Slices",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/pizza-with-3n-slices/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 79,
    name: "Frog Position After T Seconds",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/frog-position-after-t-seconds/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 80,
    name: "Time Needed to Inform All Employees",
    pattern: "General",
    difficulty: "Medium",
    count: 11,
    link: "https://leetcode.com/problems/time-needed-to-inform-all-employees/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 81,
    name: "Rank Teams by Votes",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/rank-teams-by-votes/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 82,
    name: "Product of the Last K Numbers",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/product-of-the-last-k-numbers/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 83,
    name: "Check If N and Its Double Exist",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/check-if-n-and-its-double-exist/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 84,
    name: "Jump Game IV",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/jump-game-iv/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 85,
    name: "Rank Transform of an Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/rank-transform-of-an-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 86,
    name: "All Elements in Two Binary Search Trees",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/all-elements-in-two-binary-search-trees/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 87,
    name: "Divide Array in Sets of K Consecutive Numbers",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 88,
    name: "Minimum Falling Path Sum II",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/minimum-falling-path-sum-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 89,
    name: "Element Appearing More Than 25% In Sorted Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 90,
    name: "Count Square Submatrices with All Ones",
    pattern: "General",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 91,
    name: "Find Winner on a Tic Tac Toe Game",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 11,
    link: "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 92,
    name: "Search Suggestions System",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/search-suggestions-system/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 93,
    name: "Find Elements in a Contaminated Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 94,
    name: "Cells with Odd Values in a Matrix",
    pattern: "Matrix Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 95,
    name: "Minimum Remove to Make Valid Parentheses",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 96,
    name: "Find Positive Integer Solution for a Given Equation",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 97,
    name: "Unique Number of Occurrences",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/unique-number-of-occurrences/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 98,
    name: "Minimum Absolute Difference",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/minimum-absolute-difference/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 99,
    name: "Distance Between Bus Stops",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/distance-between-bus-stops/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 100,
    name: "Single-Row Keyboard",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/single-row-keyboard/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 101,
    name: "Find Words That Can Be Formed by Characters",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 102,
    name: "Snapshot Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 36,
    link: "https://leetcode.com/problems/snapshot-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 103,
    name: "Relative Sort Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/relative-sort-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 104,
    name: "Compare Strings by Frequency of the Smallest Character",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 105,
    name: "Print in Order",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/print-in-order/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 106,
    name: "Delete Nodes And Return Forest",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/delete-nodes-and-return-forest/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 107,
    name: "Defanging an IP Address",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/defanging-an-ip-address/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 108,
    name: "Car Pooling",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/car-pooling/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 109,
    name: "Largest Values From Labels",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/largest-values-from-labels/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 110,
    name: "Shortest Path in Binary Matrix",
    pattern: "Shortest Path Algorithms",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 111,
    name: "Brace Expansion",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/brace-expansion/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 112,
    name: "Letter Tile Possibilities",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/letter-tile-possibilities/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 113,
    name: "Occurrences After Bigram",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/occurrences-after-bigram/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 114,
    name: "Campus Bikes II",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/campus-bikes-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 115,
    name: "Confusing Number",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/confusing-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 116,
    name: "Valid Boomerang",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/valid-boomerang/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 117,
    name: "Maximum Difference Between Node and Ancestor",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 118,
    name: "Divisor Game",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/divisor-game/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 119,
    name: "Video Stitching",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/video-stitching/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 120,
    name: "Number of Enclaves",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/number-of-enclaves/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 121,
    name: "Best Sightseeing Pair",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/best-sightseeing-pair/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 122,
    name: "Max Consecutive Ones III",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 123,
    name: "Time Based Key-Value Store",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/time-based-key-value-store/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 124,
    name: "Find the Town Judge",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/find-the-town-judge/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 125,
    name: "Squares of a Sorted Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 126,
    name: "K Closest Points to Origin",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/k-closest-points-to-origin/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 127,
    name: "Univalued Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/univalued-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 128,
    name: "Array of Doubled Pairs",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/array-of-doubled-pairs/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 129,
    name: "Flip Equivalent Binary Trees",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/flip-equivalent-binary-trees/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 130,
    name: "Delete Columns to Make Sorted",
    pattern: "Sorting",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/delete-columns-to-make-sorted/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 131,
    name: "Minimum Falling Path Sum",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/minimum-falling-path-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 132,
    name: "Long Pressed Name",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/long-pressed-name/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 133,
    name: "Maximum Sum Circular Subarray",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 134,
    name: "X of a Kind in a Deck of Cards",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 135,
    name: "RLE Iterator",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/rle-iterator/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 136,
    name: "Uncommon Words from Two Sentences",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/uncommon-words-from-two-sentences/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 137,
    name: "Middle of the Linked List",
    pattern: "Linked List",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/middle-of-the-linked-list/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 138,
    name: "Leaf-Similar Trees",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/leaf-similar-trees/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 139,
    name: "Peak Index in a Mountain Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 140,
    name: "Maximize Distance to Closest Person",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/maximize-distance-to-closest-person/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 141,
    name: "Backspace String Compare",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/backspace-string-compare/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 142,
    name: "Magic Squares In Grid",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/magic-squares-in-grid/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 143,
    name: "Flipping an Image",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/flipping-an-image/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 144,
    name: "Positions of Large Groups",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/positions-of-large-groups/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 145,
    name: "Ambiguous Coordinates",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/ambiguous-coordinates/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 146,
    name: "Largest Triangle Area",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/largest-triangle-area/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 147,
    name: "Expressive Words",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/expressive-words/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 148,
    name: "Max Increase to Keep City Skyline",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/max-increase-to-keep-city-skyline/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 149,
    name: "Similar RGB Color",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/similar-rgb-color/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 150,
    name: "Number of Matching Subsequences",
    pattern: "General",
    difficulty: "Medium",
    count: 15,
    link: "https://leetcode.com/problems/number-of-matching-subsequences/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 151,
    name: "Escape The Ghosts",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/escape-the-ghosts/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 152,
    name: "Rotated Digits",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/rotated-digits/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 153,
    name: "Split BST",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/split-bst/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 154,
    name: "Global and Local Inversions",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/global-and-local-inversions/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 155,
    name: "Jewels and Stones",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/jewels-and-stones/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 156,
    name: "Reorganize String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/reorganize-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 157,
    name: "Partition Labels",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/partition-labels/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 158,
    name: "Find Anagram Mappings",
    pattern: "Anagram Patterns",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/find-anagram-mappings/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 159,
    name: "Bold Words in String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/bold-words-in-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 160,
    name: "Pyramid Transition Matrix",
    pattern: "Matrix Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/pyramid-transition-matrix/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 161,
    name: "Shortest Completing Word",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/shortest-completing-word/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 162,
    name: "Network Delay Time",
    pattern: "General",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/network-delay-time/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 163,
    name: "Delete and Earn",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/delete-and-earn/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 164,
    name: "Sentence Similarity",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/sentence-similarity/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 165,
    name: "My Calendar I",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/my-calendar-i/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 166,
    name: "Minimum Window Subsequence",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/minimum-window-subsequence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 167,
    name: "Find Pivot Index",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/find-pivot-index/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 168,
    name: "Accounts Merge",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/accounts-merge/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 169,
    name: "Longest Word in Dictionary",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/longest-word-in-dictionary/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 170,
    name: "Binary Search",
    pattern: "Binary Search",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/binary-search/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 171,
    name: "Kth Largest Element in a Stream",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 172,
    name: "Partition to K Equal Sum Subsets",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 173,
    name: "Max Area of Island",
    pattern: "General",
    difficulty: "Medium",
    count: 9,
    link: "https://leetcode.com/problems/max-area-of-island/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 174,
    name: "Top K Frequent Words",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/top-k-frequent-words/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 175,
    name: "Employee Importance",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/employee-importance/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 176,
    name: "Repeated String Match",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/repeated-string-match/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 177,
    name: "Redundant Connection",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/redundant-connection/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 178,
    name: "K Empty Slots",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/k-empty-slots/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 179,
    name: "24 Game",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/24-game/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 180,
    name: "Valid Parenthesis String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/valid-parenthesis-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 181,
    name: "Map Sum Pairs",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/map-sum-pairs/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 182,
    name: "Implement Magic Dictionary",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/implement-magic-dictionary/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 183,
    name: "Number of Longest Increasing Subsequence",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 184,
    name: "Beautiful Arrangement II",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/beautiful-arrangement-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 185,
    name: "Strange Printer",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/strange-printer/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 186,
    name: "Maximum Width of Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 187,
    name: "Remove 9",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/remove-9/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 188,
    name: "Split Array into Consecutive Subsequences",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/split-array-into-consecutive-subsequences/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 189,
    name: "Find K Closest Elements",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/find-k-closest-elements/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 190,
    name: "Coin Path",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/coin-path/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 191,
    name: "Find Duplicate Subtrees",
    pattern: "Tree",
    difficulty: "Medium",
    count: 13,
    link: "https://leetcode.com/problems/find-duplicate-subtrees/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 192,
    name: "Maximum Average Subarray II",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/maximum-average-subarray-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 193,
    name: "Design Search Autocomplete System",
    pattern: "General",
    difficulty: "Medium",
    count: 9,
    link: "https://leetcode.com/problems/design-search-autocomplete-system/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 194,
    name: "Solve the Equation",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/solve-the-equation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 195,
    name: "Shopping Offers",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/shopping-offers/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 196,
    name: "Exclusive Time of Functions",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/exclusive-time-of-functions/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 197,
    name: "Design Excel Sum Formula",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/design-excel-sum-formula/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 198,
    name: "Design Compressed String Iterator",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/design-compressed-string-iterator/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 199,
    name: "Valid Square",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/valid-square/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 200,
    name: "N-ary Tree Preorder Traversal",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/n-ary-tree-preorder-traversal/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 201,
    name: "Design In-Memory File System",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/design-in-memory-file-system/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 202,
    name: "Erect the Fence",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/erect-the-fence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 203,
    name: "Subtree of Another Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/subtree-of-another-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 204,
    name: "Permutation in String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/permutation-in-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 205,
    name: "Longest Line of Consecutive One in Matrix",
    pattern: "Matrix Manipulation",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 206,
    name: "Subarray Sum Equals K",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 15,
    link: "https://leetcode.com/problems/subarray-sum-equals-k/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 207,
    name: "Student Attendance Record II",
    pattern: "General",
    difficulty: "Medium",
    count: 14,
    link: "https://leetcode.com/problems/student-attendance-record-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 208,
    name: "Student Attendance Record I",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/student-attendance-record-i/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 209,
    name: "Binary Tree Longest Consecutive Sequence II",
    pattern: "Tree",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 210,
    name: "Diameter of Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/diameter-of-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 211,
    name: "01 Matrix",
    pattern: "Matrix Manipulation",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/01-matrix/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 212,
    name: "Single Element in a Sorted Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 213,
    name: "Minimum Time Difference",
    pattern: "General",
    difficulty: "Medium",
    count: 30,
    link: "https://leetcode.com/problems/minimum-time-difference/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 214,
    name: "Lonely Pixel II",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/lonely-pixel-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 215,
    name: "Lonely Pixel I",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/lonely-pixel-i/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 216,
    name: "Minimum Absolute Difference in BST",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 217,
    name: "Random Pick with Weight",
    pattern: "General",
    difficulty: "Medium",
    count: 27,
    link: "https://leetcode.com/problems/random-pick-with-weight/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 218,
    name: "Word Abbreviation",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/word-abbreviation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 219,
    name: "Longest Word in Dictionary through Deleting",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 220,
    name: "Continuous Subarray Sum",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/continuous-subarray-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 221,
    name: "Longest Uncommon Subsequence I",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/longest-uncommon-subsequence-i/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 222,
    name: "Detect Capital",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/detect-capital/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 223,
    name: "Coin Change 2",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/coin-change-2/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 224,
    name: "Freedom Trail",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/freedom-trail/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 225,
    name: "Fibonacci Number",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/fibonacci-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 226,
    name: "Relative Ranks",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/relative-ranks/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 227,
    name: "The Maze II",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/the-maze-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 228,
    name: "Base 7",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/base-7/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 229,
    name: "The Maze III",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/the-maze-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 230,
    name: "Diagonal Traverse",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/diagonal-traverse/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 231,
    name: "Target Sum",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/target-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 232,
    name: "Increasing Subsequences",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/increasing-subsequences/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 233,
    name: "The Maze",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/the-maze/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 234,
    name: "Predict the Winner",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/predict-the-winner/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 235,
    name: "Max Consecutive Ones",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/max-consecutive-ones/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 236,
    name: "Find Permutation",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/find-permutation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 237,
    name: "License Key Formatting",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/license-key-formatting/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 238,
    name: "Magical String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/magical-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 239,
    name: "Encode String with Shortest Length",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/encode-string-with-shortest-length/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 240,
    name: "Convex Polygon",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/convex-polygon/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 241,
    name: "Optimal Account Balancing",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/optimal-account-balancing/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 242,
    name: "Island Perimeter",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/island-perimeter/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 243,
    name: "Hamming Distance",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/hamming-distance/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 244,
    name: "LFU Cache",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/lfu-cache/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 245,
    name: "Repeated Substring Pattern",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/repeated-substring-pattern/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 246,
    name: "Minimum Number of Arrows to Burst Balloons",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 247,
    name: "Delete Node in a BST",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/delete-node-in-a-bst/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 248,
    name: "Number of Boomerangs",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/number-of-boomerangs/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 249,
    name: "Arithmetic Slices II - Subsequence",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/arithmetic-slices-ii-subsequence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 250,
    name: "Sequence Reconstruction",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/sequence-reconstruction/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 251,
    name: "Find All Duplicates in an Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 252,
    name: "Find All Anagrams in a String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 253,
    name: "Path Sum III",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/path-sum-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 254,
    name: "Flatten a Multilevel Doubly Linked List",
    pattern: "Linked List",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 255,
    name: "Word Squares",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/word-squares/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 256,
    name: "Longest Repeating Character Replacement",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 257,
    name: "Valid Word Square",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/valid-word-square/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 258,
    name: "Strong Password Checker",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/strong-password-checker/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 259,
    name: "Battleships in a Board",
    pattern: "General",
    difficulty: "Medium",
    count: 10,
    link: "https://leetcode.com/problems/battleships-in-a-board/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 260,
    name: "Sentence Screen Fitting",
    pattern: "General",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/sentence-screen-fitting/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 261,
    name: "Pacific Atlantic Water Flow",
    pattern: "Flow Network",
    difficulty: "Medium",
    count: 10,
    link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 262,
    name: "Partition Equal Subset Sum",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/partition-equal-subset-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 263,
    name: "Add Strings",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/add-strings/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 264,
    name: "Third Maximum Number",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/third-maximum-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 265,
    name: "Minimum Unique Word Abbreviation",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/minimum-unique-word-abbreviation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 266,
    name: "Split Array Largest Sum",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/split-array-largest-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 267,
    name: "Valid Word Abbreviation",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/valid-word-abbreviation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 268,
    name: "Trapping Rain Water II",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/trapping-rain-water-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 269,
    name: "Convert a Number to Hexadecimal",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 270,
    name: "Frog Jump",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/frog-jump/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 271,
    name: "Remove K Digits",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/remove-k-digits/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 272,
    name: "Binary Watch",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/binary-watch/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 273,
    name: "Evaluate Division",
    pattern: "General",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/evaluate-division/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 274,
    name: "Random Pick Index",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/random-pick-index/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 275,
    name: "Rotate Function",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/rotate-function/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 276,
    name: "Decode String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 19,
    link: "https://leetcode.com/problems/decode-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 277,
    name: "Is Subsequence",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/is-subsequence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 278,
    name: "Perfect Rectangle",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/perfect-rectangle/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 279,
    name: "Find the Difference",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/find-the-difference/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 280,
    name: "Longest Absolute File Path",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/longest-absolute-file-path/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 281,
    name: "Ransom Note",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/ransom-note/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 282,
    name: "Linked List Random Node",
    pattern: "Linked List",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/linked-list-random-node/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 283,
    name: "Insert Delete GetRandom O(1)",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 284,
    name: "Kth Smallest Element in a Sorted Matrix",
    pattern: "Sorting",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 285,
    name: "Combination Sum IV",
    pattern: "Combinatorics",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/combination-sum-iv/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 286,
    name: "Guess Number Higher or Lower II",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/guess-number-higher-or-lower-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 287,
    name: "Plus One Linked List",
    pattern: "Linked List",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/plus-one-linked-list/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 288,
    name: "Largest Divisible Subset",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/largest-divisible-subset/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 289,
    name: "Valid Perfect Square",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/valid-perfect-square/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 290,
    name: "Find Leaves of Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 75,
    link: "https://leetcode.com/problems/find-leaves-of-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 291,
    name: "Design Hit Counter",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/design-hit-counter/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 292,
    name: "Logger Rate Limiter",
    pattern: "General",
    difficulty: "Medium",
    count: 22,
    link: "https://leetcode.com/problems/logger-rate-limiter/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 293,
    name: "Rearrange String k Distance Apart",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/rearrange-string-k-distance-apart/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 294,
    name: "Design Twitter",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/design-twitter/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 295,
    name: "Russian Doll Envelopes",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/russian-doll-envelopes/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 296,
    name: "Design Snake Game",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/design-snake-game/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 297,
    name: "Intersection of Two Arrays",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/intersection-of-two-arrays/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 298,
    name: "Design Tic-Tac-Toe",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/design-tic-tac-toe/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 299,
    name: "Top K Frequent Elements",
    pattern: "General",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/top-k-frequent-elements/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 300,
    name: "Moving Average from Data Stream",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/moving-average-from-data-stream/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 301,
    name: "Longest Substring with At Most K Distinct Characters",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 302,
    name: "Counting Bits",
    pattern: "Bit Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/counting-bits/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 303,
    name: "House Robber III",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/house-robber-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 304,
    name: "Palindrome Pairs",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/palindrome-pairs/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 305,
    name: "Self Crossing",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/self-crossing/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 306,
    name: "Increasing Triplet Subsequence",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/increasing-triplet-subsequence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 307,
    name: "Reconstruct Itinerary",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/reconstruct-itinerary/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 308,
    name: "Verify Preorder Serialization of a Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 309,
    name: "Number of Connected Components in an Undirected Graph",
    pattern: "Graph",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 310,
    name: "Coin Change",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/coin-change/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 311,
    name: "Create Maximum Number",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/create-maximum-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 312,
    name: "Generalized Abbreviation",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/generalized-abbreviation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 313,
    name: "Shortest Distance from All Buildings",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/shortest-distance-from-all-buildings/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 314,
    name: "Count of Smaller Numbers After Self",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 315,
    name: "Super Ugly Number",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/super-ugly-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 316,
    name: "Burst Balloons",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/burst-balloons/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 317,
    name: "Range Sum Query 2D - Mutable",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 318,
    name: "Range Sum Query - Mutable",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/range-sum-query-mutable/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 319,
    name: "Number of Islands II",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/number-of-islands-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 320,
    name: "Range Sum Query 2D - Immutable",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 321,
    name: "Smallest Rectangle Enclosing Black Pixels",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 322,
    name: "Bulls and Cows",
    pattern: "General",
    difficulty: "Medium",
    count: 12,
    link: "https://leetcode.com/problems/bulls-and-cows/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 323,
    name: "Binary Tree Longest Consecutive Sequence",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 324,
    name: "Serialize and Deserialize Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 325,
    name: "Best Meeting Point",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/best-meeting-point/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 326,
    name: "Flip Game II",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/flip-game-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 327,
    name: "Flip Game",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/flip-game/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 328,
    name: "Game of Life",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/game-of-life/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 329,
    name: "Unique Word Abbreviation",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/unique-word-abbreviation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 330,
    name: "Find the Duplicate Number",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/find-the-duplicate-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 331,
    name: "Walls and Gates",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/walls-and-gates/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 332,
    name: "Inorder Successor In BST",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/inorder-successor-in-bst/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 333,
    name: "Peeking Iterator",
    pattern: "General",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/peeking-iterator/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 334,
    name: "Zigzag Iterator",
    pattern: "General",
    difficulty: "Medium",
    count: 1,
    link: "https://leetcode.com/problems/zigzag-iterator/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 335,
    name: "Perfect Squares",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/perfect-squares/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 336,
    name: "First Bad Version",
    pattern: "General",
    difficulty: "Medium",
    count: 19,
    link: "https://leetcode.com/problems/first-bad-version/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 337,
    name: "Paint Fence",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/paint-fence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 338,
    name: "H-Index",
    pattern: "General",
    difficulty: "Medium",
    count: 9,
    link: "https://leetcode.com/problems/h-index/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 339,
    name: "Closest Binary Search Tree Value II",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/closest-binary-search-tree-value-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 340,
    name: "Alien Dictionary",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/alien-dictionary/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 341,
    name: "Palindrome Permutation II",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/palindrome-permutation-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 342,
    name: "Graph Valid Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/graph-valid-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 343,
    name: "Single Number III",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/single-number-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 344,
    name: "Binary Tree Paths",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/binary-tree-paths/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 345,
    name: "Meeting Rooms II",
    pattern: "General",
    difficulty: "Medium",
    count: 22,
    link: "https://leetcode.com/problems/meeting-rooms-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 346,
    name: "Meeting Rooms",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/meeting-rooms/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 347,
    name: "Count Univalue Subtrees",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/count-univalue-subtrees/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 348,
    name: "Group Shifted Strings",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/group-shifted-strings/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 349,
    name: "Strobogrammatic Number III",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/strobogrammatic-number-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 350,
    name: "Strobogrammatic Number II",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/strobogrammatic-number-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 351,
    name: "Valid Anagram",
    pattern: "Anagram Patterns",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/valid-anagram/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 352,
    name: "Different Ways to Add Parentheses",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/different-ways-to-add-parentheses/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 353,
    name: "Sliding Window Maximum",
    pattern: "Sliding Window",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/sliding-window-maximum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 354,
    name: "Lowest Common Ancestor of a Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 355,
    name: "Lowest Common Ancestor of a Binary Search Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 356,
    name: "Palindrome Linked List",
    pattern: "Linked List",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/palindrome-linked-list/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 357,
    name: "Number of Digit One",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/number-of-digit-one/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 358,
    name: "Implement Queue using Stacks",
    pattern: "Stack",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/implement-queue-using-stacks/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 359,
    name: "Power of Two",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/power-of-two/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 360,
    name: "Invert Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/invert-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 361,
    name: "Basic Calculator",
    pattern: "General",
    difficulty: "Medium",
    count: 12,
    link: "https://leetcode.com/problems/basic-calculator/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 362,
    name: "Count Complete Tree Nodes",
    pattern: "Tree",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/count-complete-tree-nodes/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 363,
    name: "Maximal Square",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/maximal-square/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 364,
    name: "Contains Duplicate III",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/contains-duplicate-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 365,
    name: "Contains Duplicate II",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/contains-duplicate-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 366,
    name: "The Skyline Problem",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/the-skyline-problem/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 367,
    name: "Contains Duplicate",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/contains-duplicate/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 368,
    name: "Combination Sum III",
    pattern: "Combinatorics",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/combination-sum-iii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 369,
    name: "Kth Largest Element in an Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 370,
    name: "House Robber II",
    pattern: "General",
    difficulty: "Medium",
    count: 9,
    link: "https://leetcode.com/problems/house-robber-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 371,
    name: "Word Search II",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/word-search-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 372,
    name: "Add and Search Word - Data structure design",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 373,
    name: "Course Schedule II",
    pattern: "General",
    difficulty: "Medium",
    count: 11,
    link: "https://leetcode.com/problems/course-schedule-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 374,
    name: "Minimum Size Subarray Sum",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 375,
    name: "Implement Trie",
    pattern: "Trie",
    difficulty: "Medium",
    count: 9,
    link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 376,
    name: "Course Schedule",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/course-schedule/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 377,
    name: "Reverse Linked List",
    pattern: "Linked List",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/reverse-linked-list/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 378,
    name: "Isomorphic Strings",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/isomorphic-strings/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 379,
    name: "Happy Number",
    pattern: "General",
    difficulty: "Medium",
    count: 22,
    link: "https://leetcode.com/problems/happy-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 380,
    name: "Number of Islands",
    pattern: "General",
    difficulty: "Medium",
    count: 21,
    link: "https://leetcode.com/problems/number-of-islands/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 381,
    name: "House Robber",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/house-robber/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 382,
    name: "Number of 1 Bits",
    pattern: "Bit Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/number-of-1-bits/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 383,
    name: "Reverse Bits",
    pattern: "Bit Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/reverse-bits/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 384,
    name: "Rotate Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/rotate-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 385,
    name: "Best Time to Buy and Sell Stock IV",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 386,
    name: "Binary Search Tree Iterator",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/binary-search-tree-iterator/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 387,
    name: "Excel Sheet Column Number",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/excel-sheet-column-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 388,
    name: "Majority Element",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/majority-element/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 389,
    name: "Excel Sheet Column Title",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/excel-sheet-column-title/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 390,
    name: "Two Sum II - Input array is sorted",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 391,
    name: "Find Peak Element",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/find-peak-element/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 392,
    name: "One Edit Distance",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/one-edit-distance/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 393,
    name: "Read N Characters Given Read4 II - Call multiple times",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 394,
    name: "Min Stack",
    pattern: "Stack",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/min-stack/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 395,
    name: "Find Minimum in Rotated Sorted Array II",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 396,
    name: "Maximum Product Subarray",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/maximum-product-subarray/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 397,
    name: "Reverse Words in a String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/reverse-words-in-a-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 398,
    name: "Evaluate Reverse Polish Notation",
    pattern: "General",
    difficulty: "Medium",
    count: 73,
    link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 399,
    name: "Max Points on a Line",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/max-points-on-a-line/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 400,
    name: "Insertion Sort List",
    pattern: "Sorting",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/insertion-sort-list/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 401,
    name: "LRU Cache",
    pattern: "General",
    difficulty: "Medium",
    count: 9,
    link: "https://leetcode.com/problems/lru-cache/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 402,
    name: "Binary Tree Preorder Traversal",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 403,
    name: "Linked List Cycle",
    pattern: "Linked List",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/linked-list-cycle/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 404,
    name: "Word Break II",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/word-break-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 405,
    name: "Word Break",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/word-break/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 406,
    name: "Copy List with Random Pointer",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 407,
    name: "Single Number",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/single-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 408,
    name: "Clone Graph",
    pattern: "Graph",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/clone-graph/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 409,
    name: "Palindrome Partitioning",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/palindrome-partitioning/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 410,
    name: "Surrounded Regions",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/surrounded-regions/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 411,
    name: "Longest Consecutive Sequence",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/longest-consecutive-sequence/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 412,
    name: "Binary Tree Maximum Path Sum",
    pattern: "Tree",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 413,
    name: "Best Time to Buy and Sell Stock II",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 414,
    name: "Best Time to Buy and Sell Stock",
    pattern: "General",
    difficulty: "Medium",
    count: 12,
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 415,
    name: "Distinct Subsequences",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/distinct-subsequences/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 416,
    name: "Path Sum II",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/path-sum-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 417,
    name: "Balanced Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/balanced-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 418,
    name: "Convert Sorted List to Binary Search Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 419,
    name: "Construct Binary Tree from Preorder and Inorder Traversal",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 420,
    name: "Maximum Depth of Binary Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 421,
    name: "Binary Tree Zigzag Level Order Traversal",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 422,
    name: "Binary Tree Level Order Traversal",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 423,
    name: "Symmetric Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/symmetric-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 424,
    name: "Same Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/same-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 425,
    name: "Recover Binary Search Tree",
    pattern: "Tree",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/recover-binary-search-tree/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 426,
    name: "Interleaving String",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/interleaving-string/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 427,
    name: "Reverse Linked List II",
    pattern: "Linked List",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/reverse-linked-list-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 428,
    name: "Decode Ways",
    pattern: "General",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/decode-ways/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 429,
    name: "Maximal Rectangle",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/maximal-rectangle/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 430,
    name: "Subsets",
    pattern: "General",
    difficulty: "Medium",
    count: 7,
    link: "https://leetcode.com/problems/subsets/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 431,
    name: "Combinations",
    pattern: "Combinatorics",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/combinations/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 432,
    name: "Edit Distance",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/edit-distance/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 433,
    name: "Simplify Path",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/simplify-path/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 434,
    name: "Climbing Stairs",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/climbing-stairs/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 435,
    name: "Sqrt(x)",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/sqrtx/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 436,
    name: "Text Justification",
    pattern: "General",
    difficulty: "Medium",
    count: 24,
    link: "https://leetcode.com/problems/text-justification/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 437,
    name: "Add Binary",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/add-binary/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 438,
    name: "Plus One",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/plus-one/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 439,
    name: "Minimum Path Sum",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/minimum-path-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 440,
    name: "Unique Paths II",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/unique-paths-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 441,
    name: "Unique Paths",
    pattern: "General",
    difficulty: "Medium",
    count: 15,
    link: "https://leetcode.com/problems/unique-paths/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 442,
    name: "Insert Intervals",
    pattern: "Intervals",
    difficulty: "Medium",
    count: 11,
    link: "https://leetcode.com/problems/insert-interval/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 443,
    name: "Merge Intervals",
    pattern: "Intervals",
    difficulty: "Medium",
    count: 28,
    link: "https://leetcode.com/problems/merge-intervals/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 444,
    name: "Jump Game",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/jump-game/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 445,
    name: "Spiral Matrix",
    pattern: "Matrix Manipulation",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/spiral-matrix/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 446,
    name: "Maximum Subarray",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 11,
    link: "https://leetcode.com/problems/maximum-subarray/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 447,
    name: "N-Queens",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/n-queens/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 448,
    name: "Pow(x, n)",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/powx-n/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 449,
    name: "Group Anagrams",
    pattern: "Anagram Patterns",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/group-anagrams/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 450,
    name: "Rotate Image",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/rotate-image/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 451,
    name: "Permutations",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/permutations/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 452,
    name: "Jump Game II",
    pattern: "Game Theory",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/jump-game-ii/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 453,
    name: "Wildcard Matching",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/wildcard-matching/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 454,
    name: "Multiply Strings",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/multiply-strings/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 455,
    name: "Trapping Rain Water",
    pattern: "General",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/trapping-rain-water/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 456,
    name: "First Missing Positive",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/first-missing-positive/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 457,
    name: "Count and Say",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/count-and-say/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 458,
    name: "Sudoku Solver",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/sudoku-solver/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 459,
    name: "Search Insert Position",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/search-insert-position/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 460,
    name: "Search in Rotated Sorted Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 461,
    name: "Substring with Concatenation of All Words",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 462,
    name: "Divide Two Integers",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/divide-two-integers/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 463,
    name: "Implement strStr()",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/implement-strstr/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 464,
    name: "Remove Element",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/remove-element/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 465,
    name: "Remove Duplicates from Sorted Array",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 466,
    name: "Reverse Nodes in k-Group",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 467,
    name: "Merge k Sorted Lists",
    pattern: "Sorting",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/merge-k-sorted-lists/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 468,
    name: "Generate Parentheses",
    pattern: "General",
    difficulty: "Medium",
    count: 4,
    link: "https://leetcode.com/problems/generate-parentheses/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 469,
    name: "Merge Two Sorted Lists",
    pattern: "Sorting",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/merge-two-sorted-lists/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 470,
    name: "Valid Parentheses",
    pattern: "General",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/valid-parentheses/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 471,
    name: "Remove Nth Node From End of List",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 472,
    name: "4 Sum",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/4sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 473,
    name: "Letter Combinations of a Phone Number",
    pattern: "Combinatorics",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 474,
    name: "3Sum Closest",
    pattern: "General",
    difficulty: "Medium",
    count: 3,
    link: "https://leetcode.com/problems/3sum-closest/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 475,
    name: "3Sum",
    pattern: "General",
    difficulty: "Medium",
    count: 8,
    link: "https://leetcode.com/problems/3sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 476,
    name: "Longest Common Prefix",
    pattern: "Prefix Sum",
    difficulty: "Medium",
    count: 12,
    link: "https://leetcode.com/problems/longest-common-prefix/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 477,
    name: "Roman to Integer",
    pattern: "General",
    difficulty: "Medium",
    count: 10,
    link: "https://leetcode.com/problems/roman-to-integer",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 478,
    name: "Integer to Roman",
    pattern: "General",
    difficulty: "Medium",
    count: 2,
    link: "https://leetcode.com/problems/integer-to-roman/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 479,
    name: "Container With Most Water",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/container-with-most-water/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 480,
    name: "Regular Expression Matching",
    pattern: "General",
    difficulty: "Medium",
    count: 9,
    link: "https://leetcode.com/problems/regular-expression-matching/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 481,
    name: "Palindrome Number",
    pattern: "General",
    difficulty: "Medium",
    count: 11,
    link: "https://leetcode.com/problems/palindrome-number/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 482,
    name: "String to Integer (atoi)",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 6,
    link: "https://leetcode.com/problems/string-to-integer-atoi/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 483,
    name: "Reverse Integer",
    pattern: "General",
    difficulty: "Medium",
    count: 5,
    link: "https://leetcode.com/problems/reverse-integer/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 484,
    name: "Longest Palindromic Substring",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 12,
    link: "https://leetcode.com/problems/longest-palindromic-substring/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 485,
    name: "Median of Two Sorted Arrays",
    pattern: "Arrays",
    difficulty: "Medium",
    count: 14,
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 486,
    name: "Longest Substring Without Repeating Characters",
    pattern: "String Manipulation",
    difficulty: "Medium",
    count: 13,
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 487,
    name: "Add Two Numbers",
    pattern: "General",
    difficulty: "Medium",
    count: 10,
    link: "https://leetcode.com/problems/add-two-numbers/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
  {
    id: 488,
    name: "Two Sum",
    pattern: "Arrays",
    difficulty: "Easy",
    count: 44,
    link: "https://leetcode.com/problems/two-sum/",
    approach:
      "General strategy or common algorithm approach for the problem type",
  },
];

// Group problems by pattern and difficulty
const difficultyColors = {
  Easy: { bg: "#dcfce7", text: "#166534" },
  Medium: { bg: "#fef3c7", text: "#92400e" },
  Hard: { bg: "#fee2e2", text: "#991b1b" },
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
  },
  patternSection: {
    marginBottom: "32px",
  },
  patternTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "16px",
    paddingBottom: "8px",
    borderBottom: "2px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  difficultySection: {
    marginBottom: "24px",
  },
  difficultyTitle: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "12px",
    paddingLeft: "8px",
    borderLeft: "4px solid #3b82f6",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    marginBottom: "12px",
    padding: "16px",
    transition: "box-shadow 0.2s",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "12px",
  },
  titleSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  checkbox: {
    width: "20px",
    height: "20px",
  },
  title: {
    color: "#3b82f6",
    fontWeight: "500",
    textDecoration: "none",
    fontSize: "16px",
  },
  tags: {
    display: "flex",
    gap: "8px",
    marginTop: "4px",
  },
  tag: {
    padding: "4px 8px",
    borderRadius: "9999px",
    fontSize: "12px",
  },
  patternTag: {
    backgroundColor: "#f3f4f6",
    color: "#4b5563",
  },
  difficultyTag: {
    borderRadius: "4px",
    padding: "4px 8px",
    color: "#fff",
    fontWeight: "bold",
  },
  approach: {
    marginTop: "12px",
    padding: "12px",
    backgroundColor: "#f9fafb",
    borderRadius: "6px",
    fontSize: "14px",
    color: "#4b5563",
  },
  stats: {
    marginTop: "32px",
    padding: "16px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
  },
  statsTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "8px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },
  statCard: {
    backgroundColor: "white",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  searchBar: {
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "20px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid #e5e7eb",
  },
  height: {
    height: "10px",
  },
};

const ProblemCard = ({ problem, solved, toggleSolve }) => (
  <div style={styles.card}>
    <div style={styles.header}>
      <div style={styles.titleSection}>
        <input
          type="checkbox"
          style={styles.checkbox}
          checked={solved}
          onChange={() => toggleSolve(problem.id)}
        />
        <div>
          <a
            href={problem.link}
            style={styles.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {problem.name}
          </a>
          <div style={styles.tags}>
            <span
              style={{
                ...styles.tag,
                ...styles.difficultyTag,
                backgroundColor: difficultyColors[problem.difficulty].bg,
                color: difficultyColors[problem.difficulty].text,
              }}
            >
              {problem.difficulty}
            </span>
          </div>
        </div>
      </div>
      <button style={styles.actionButton}>⋮</button>
    </div>
    <div style={styles.approach}>
      <span style={{ fontWeight: "500", color: "#374151" }}>Approach: </span>
      {problem.approach}
    </div>
  </div>
);

const ProblemList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [solvedProblems, setSolvedProblems] = useState(
    JSON.parse(localStorage.getItem("solvedProblems")) || []
  );

  useEffect(() => {
    localStorage.setItem("solvedProblems", JSON.stringify(solvedProblems));
  }, [solvedProblems]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleSolve = (id) => {
    const updatedSolvedProblems = solvedProblems.includes(id)
      ? solvedProblems.filter((problemId) => problemId !== id)
      : [...solvedProblems, id];

    setSolvedProblems(updatedSolvedProblems);
  };

  // Filter problems based on search query
  const filteredProblems = problems.filter(
    (problem) =>
      problem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.pattern.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group problems by pattern and sort by difficulty (Easy, Medium, Hard)
  const groupedProblems = filteredProblems.reduce((groups, problem) => {
    const { pattern } = problem;
    if (!groups[pattern]) {
      groups[pattern] = {
        problems: [],
        counts: { Easy: 0, Medium: 0, Hard: 0 },
      };
    }
    groups[pattern].problems.push(problem);
    groups[pattern].counts[problem.difficulty]++;
    return groups;
  }, {});

  const totalSolved = solvedProblems.length;

  return (
    <div style={styles.container}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        SDE / SWE DSA QUESTIONS
      </h1>

      <input
        type="text"
        placeholder="Search problems..."
        style={styles.searchBar}
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Display total number of problems solved */}
      <div style={styles.stats}>
        <div style={styles.statsTitle}>
          Total Problems Solved: {totalSolved} / {problems.length}
        </div>
      </div>

      <div style={styles.height}></div>

      {/* Display grouped problems */}
      {Object.keys(groupedProblems).map((pattern) => {
        const patternData = groupedProblems[pattern];
        const totalPatternSolved = patternData.problems.filter((problem) =>
          solvedProblems.includes(problem.id)
        ).length;

        return (
          <div key={pattern} style={styles.patternSection}>
            <div style={styles.patternTitle}>
              {pattern} ({patternData.problems.length})
              <span>Total Solved: {totalPatternSolved}</span>
            </div>

            {["Easy", "Medium", "Hard"].map((difficulty) => {
              const problemsByDifficulty = patternData.problems.filter(
                (problem) => problem.difficulty === difficulty
              );
              const solvedCount = problemsByDifficulty.filter((problem) =>
                solvedProblems.includes(problem.id)
              ).length;

              return (
                problemsByDifficulty.length > 0 && (
                  <div key={difficulty} style={styles.difficultySection}>
                    <div style={styles.difficultyTitle}>
                      {difficulty} ({problemsByDifficulty.length}) - Solved:{" "}
                      {solvedCount}
                    </div>
                    {problemsByDifficulty.map((problem) => (
                      <ProblemCard
                        key={problem.id}
                        problem={problem}
                        solved={solvedProblems.includes(problem.id)}
                        toggleSolve={toggleSolve}
                      />
                    ))}
                  </div>
                )
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProblemList;
