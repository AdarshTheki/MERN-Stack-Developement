## Data Structures & Algorithms

### **Array and String Manipulation**

1. **Reverse a String**:

    - Write a function to reverse a string without using built-in reverse functions.
    - _Logic Building_: Think about how to swap characters from both ends of the string moving towards the center.

2. **Find the Maximum Product of Two Integers in an Array**:

    - Given an array of integers, find the pair of adjacent elements that have the largest product.
    - _Logic Building_: Consider edge cases with negative numbers and zero.

3. **Find the Missing Number in an Array**:

    - Given an array containing `n-1` integers, where the integers are in the range of `1` to `n`, find the missing integer.
    - _Logic Building_: Use mathematical formulas or XOR operations to find the missing number.

4. **Rotate an Array**:

    - Rotate the elements of an array to the right by `k` steps.
    - _Logic Building_: Think about the effect of rotating multiple times and how to optimize the solution.

5. **Longest Common Prefix**:
    - Write a function to find the longest common prefix string amongst an array of strings.
    - _Logic Building_: Consider iterating through each character of the strings to find the common prefix.

### **Linked Lists**

6. **Reverse a Linked List**:

    - Write a function to reverse a singly linked list.
    - _Logic Building_: Use pointers to iteratively reverse the direction of the linked list.

7. **Detect a Cycle in a Linked List**:

    - Determine if a linked list has a cycle in it.
    - _Logic Building_: Use Floyd's Cycle-Finding Algorithm (two-pointer technique) to detect cycles.

8. **Merge Two Sorted Linked Lists**:

    - Given two sorted linked lists, merge them into a single sorted linked list.
    - _Logic Building_: Compare elements from both lists, maintaining order as you merge them.

9. **Remove N-th Node from End of Linked List**:
    - Remove the N-th node from the end of a linked list.
    - _Logic Building_: Use two pointers to efficiently find the N-th node from the end.

### **Stacks and Queues**

10. **Implement a Stack Using Queues**:

    -   Implement a stack using two queues.
    -   _Logic Building_: Think about how to simulate the LIFO (Last In, First Out) behavior using FIFO (First In, First Out) queues.

11. **Evaluate Reverse Polish Notation**:

    -   Evaluate the value of an arithmetic expression in Reverse Polish Notation (postfix notation).
    -   _Logic Building_: Use a stack to handle operands and operators as you evaluate the expression.

12. **Implement a Queue Using Stacks**:

    -   Implement a queue using two stacks.
    -   _Logic Building_: Understand how to use two stacks to reverse the order of elements to simulate FIFO behavior.

13. **Valid Parentheses**:
    -   Given a string containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.
    -   _Logic Building_: Use a stack to ensure every opening bracket has a corresponding closing bracket in the correct order.

### **Trees and Graphs**

14. **Binary Tree Inorder Traversal**:

    -   Implement an inorder traversal of a binary tree.
    -   _Logic Building_: Understand the recursive nature of tree traversal and how to implement it iteratively using a stack.

15. **Level Order Traversal of Binary Tree**:

    -   Perform a level order traversal (breadth-first search) of a binary tree.
    -   _Logic Building_: Use a queue to manage nodes at each level before moving to the next level.

16. **Check if a Binary Tree is a Valid Binary Search Tree**:

    -   Validate if a binary tree is a binary search tree (BST).
    -   _Logic Building_: Recursively ensure that all nodes satisfy the BST property (left child < root < right child).

17. **Find the Lowest Common Ancestor in a Binary Tree**:
    -   Given a binary tree, find the lowest common ancestor (LCA) of two given nodes.
    -   _Logic Building_: Use recursion to trace the path from the root to both nodes and find their divergence point.

### **Dynamic Programming**

18. **Fibonacci Sequence**:

    -   Implement a function to return the N-th Fibonacci number using dynamic programming.
    -   _Logic Building_: Use memoization or tabulation to optimize the computation of Fibonacci numbers.

19. **0/1 Knapsack Problem**:

    -   Given weights and values of items, determine the maximum value that can be obtained with a knapsack of a fixed capacity.
    -   _Logic Building_: Build a DP table to consider the inclusion or exclusion of each item.

20. **Longest Increasing Subsequence**:

    -   Find the length of the longest increasing subsequence in an array.
    -   _Logic Building_: Use dynamic programming to store the length of the LIS ending at each index.

21. **Coin Change Problem**:
    -   Given an amount and a list of coin denominations, find the minimum number of coins needed to make the amount.
    -   _Logic Building_: Develop a DP solution that builds up the solution from smaller subproblems.

### **Recursion and Backtracking**

22. **Generate All Permutations of a String**:

    -   Write a function to generate all permutations of a string.
    -   _Logic Building_: Use recursion to explore all possible permutations by swapping characters.

23. **N-Queens Problem**:

    -   Place N queens on an N×N chessboard so that no two queens threaten each other.
    -   _Logic Building_: Use backtracking to explore and prune possible queen placements.

24. **Sudoku Solver**:

    -   Implement a Sudoku solver using backtracking.
    -   _Logic Building_: Use recursion to try placing numbers and backtrack when a number placement leads to a conflict.

25. **Combination Sum**:
    -   Given an array of distinct integers and a target, return all unique combinations that sum to the target.
    -   _Logic Building_: Use recursion and backtracking to explore different combinations of numbers.

### **Sorting and Searching**

26. **Merge Sort**:

    -   Implement merge sort, an efficient, stable, comparison-based sorting algorithm.
    -   _Logic Building_: Understand the divide-and-conquer approach and how to merge two sorted arrays.

27. **Quick Sort**:

    -   Implement quicksort, a highly efficient sorting algorithm using the partitioning method.
    -   _Logic Building_: Explore different partitioning schemes and understand the importance of choosing the right pivot.

28. **Binary Search**:

    -   Implement binary search to find the position of a target value within a sorted array.
    -   _Logic Building_: Practice recursively dividing the search space to locate the target efficiently.

29. **Find Peak Element**:

    -   A peak element in an array is an element that is greater than its neighbors. Find any peak element.
    -   _Logic Building_: Use binary search logic to efficiently find a peak element in logarithmic time.

30. **Count Inversions in an Array**:
    -   Given an array, count the number of inversions required to sort the array.
    -   _Logic Building_: Use modified merge sort to count inversions as you sort.

### **Graph Algorithms**

31. **Depth-First Search (DFS)**:

    -   Implement DFS to traverse or search through a graph or tree.
    -   _Logic Building_: Explore the recursive nature of DFS and how to track visited nodes.

32. **Breadth-First Search (BFS)**:

    -   Implement BFS to traverse or search through a graph or tree.
    -   _Logic Building_: Use a queue to explore each level before moving to the next.

33. **Dijkstra’s Algorithm**:

    -   Find the shortest path from a source node to all other nodes in a weighted graph.
    -   _Logic Building_: Use a priority queue to efficiently find the shortest paths in a graph.

34. **Detect Cycle in a Graph**:

    -   Determine if a graph contains a cycle.
    -   _Logic Building_: Use DFS and track visited nodes to detect back edges indicating a cycle.

35. **Topological Sort**:
    -   Perform a topological sort on a directed acyclic graph (DAG).
    -   _Logic Building_: Use DFS and stack-based logic to order nodes based on dependencies.

### **Hashing**

36. **Two Sum Problem**:

    -   Given an array of integers, find two numbers such that they add up to a specific target.
    -   _Logic Building_: Use a hash map to track the complement of each element as you iterate through the array.

37. **Longest Substring Without Repeating Characters**:

    -   Find the length of the longest substring without repeating characters.
    -   _Logic Building_: Use a sliding window approach with a hash map to track characters and their positions.

38. **Find All Anagrams in a String**:

    -   Given a string and a pattern, find all anagrams of the pattern in the string.
    -   _Logic Building_: Use a hash map to track character counts and a sliding window to compare substrings.

39. **Subarray Sum Equals K**:

    -   Given an array of integers, find the total number of continuous subarrays whose sum equals a given value.
    -   _Logic Building_: Use a hash map to store cumulative sums and count subarrays efficiently.

40. **Group Anagrams**:
    -   Given an array of strings, group anagrams together.
    -   _Logic Building_: Use hashing to map each string to its sorted version and group them accordingly.
