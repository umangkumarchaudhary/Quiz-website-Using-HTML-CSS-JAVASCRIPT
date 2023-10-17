//JSON array containing all questions
let questions = [
  {
      question: "What is the time complexity of the bubble sort algorithm?",
      answers: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(n^2)",
  },
  {
      question: "Which data structure is used for breadth-first traversal of a graph?",
      answers: ["Stack", "Queue", "Heap", "Array"],
      correctAnswer: "Queue",
  },
  {
      question: "What is the worst-case time complexity of the quicksort algorithm?",
      answers: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(n^2)",
  },
  {
      question: "Which search algorithm is known for its optimal time complexity for a sorted array?",
      answers: ["Linear Search", "Binary Search", "Hashing", "Breadth-First Search"],
      correctAnswer: "Binary Search",
  },
  {
      question: "What is a stack primarily used for?",
      answers: ["First-In-First-Out (FIFO) ordering", "Last-In-First-Out (LIFO) ordering", "Random access", "Breadth-first traversal"],
      correctAnswer: "Last-In-First-Out (LIFO) ordering",
  },
  {
      question: "In a binary search tree, which traversal visits nodes in ascending order?",
      answers: ["In-order", "Pre-order", "Post-order", "Level-order"],
      correctAnswer: "In-order",
  },
  {
      question: "What is the main purpose of hashing in data structures?",
      answers: ["Searching for an element", "Sorting elements", "Reversing elements", "Encrypting data"],
      correctAnswer: "Searching for an element",
  },
  {
      question: "Which data structure is used to implement recursion?",
      answers: ["Queue", "Stack", "Heap", "Array"],
      correctAnswer: "Stack",
  },
  {
      question: "What is the time complexity of inserting an element at the end of an array?",
      answers: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      correctAnswer: "O(1)",
  },
  {
      question: "Which sorting algorithm has a time complexity of O(n log n) in the average case?",
      answers: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"],
      correctAnswer: "Merge Sort",
  },
  {
      question: "What data structure is best for implementing a priority queue?",
      answers: ["Queue", "Stack", "Linked List", "Heap"],
      correctAnswer: "Heap",
  },
  {
      question: "Which data structure is suitable for implementing a dictionary?",
      answers: ["Stack", "Queue", "Linked List", "Hash Table"],
      correctAnswer: "Hash Table",
  },
  {
      question: "In a graph, what is the degree of a vertex?",
      answers: ["Number of edges connected to the vertex", "Number of vertices in the graph", "Number of triangles in the graph", "Number of nodes in the longest path"],
      correctAnswer: "Number of edges connected to the vertex",
  },
  {
      question: "Which algorithm is used to find the shortest path in a weighted graph?",
      answers: ["Breadth-First Search", "Depth-First Search", "Dijkstra's Algorithm", "Greedy Algorithm"],
      correctAnswer: "Dijkstra's Algorithm",
  },
  {
      question: "Which data structure is typically used for managing dynamic sets of distinct elements?",
      answers: ["Stack", "Queue", "Linked List", "Set"],
      correctAnswer: "Set",
  },
];



  //JSON array containing all questions
  let medium_questions = [
    {
        question: "What is the time complexity of the merge sort algorithm?",
        answers: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        correctAnswer: "O(n log n)",
    },
    {
        question: "In a binary search tree, which traversal visits nodes in pre-order?",
        answers: ["In-order", "Pre-order", "Post-order", "Level-order"],
        correctAnswer: "Pre-order",
    },
    {
        question: "Which sorting algorithm has a time complexity of O(n^2) in the worst case?",
        answers: ["Quick Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
        correctAnswer: "Selection Sort",
    },
    {
        question: "What is the purpose of dynamic programming in algorithms?",
        answers: ["Optimizing code for execution speed", "Storing computed results to avoid redundant calculations", "Parallel processing of data", "Memory management techniques"],
        correctAnswer: "Storing computed results to avoid redundant calculations",
    },
    {
        question: "What data structure is suitable for implementing a LIFO system?",
        answers: ["Queue", "Stack", "Heap", "Array"],
        correctAnswer: "Stack",
    },
    {
        question: "In a graph, what does a spanning tree do?",
        answers: ["Connect all vertices without forming cycles", "Connect some vertices while forming cycles", "Connect all vertices in a circular pattern", "Select a random vertex"],
        correctAnswer: "Connect all vertices without forming cycles",
    },
    {
        question: "Which sorting algorithm works well for a small number of elements?",
        answers: ["Bubble Sort", "Quick Sort", "Heap Sort", "Merge Sort"],
        correctAnswer: "Bubble Sort",
    },
    {
        question: "What is the primary data structure used to implement breadth-first search?",
        answers: ["Queue", "Stack", "Linked List", "Heap"],
        correctAnswer: "Queue",
    },
    {
        question: "Which algorithm is used to find the longest common subsequence of two strings?",
        answers: ["Quick Sort", "Merge Sort", "Insertion Sort", "Dynamic Programming"],
        correctAnswer: "Dynamic Programming",
    },
    {
        question: "What is the time complexity of the binary search algorithm?",
        answers: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        correctAnswer: "O(log n)",
    },
    {
        question: "What is the main goal of greedy algorithms?",
        answers: ["Solve problems optimally", "Reduce time complexity", "Reduce space complexity", "Find locally optimal solutions"],
        correctAnswer: "Find locally optimal solutions",
    },
    {
        question: "What is the primary data structure used to implement depth-first search?",
        answers: ["Queue", "Stack", "Linked List", "Heap"],
        correctAnswer: "Stack",
    },
    {
        question: "What is the primary data structure used to implement a heap?",
        answers: ["Queue", "Stack", "Linked List", "Binary Tree"],
        correctAnswer: "Binary Tree",
    },
    {
        question: "In the context of algorithms, what is a greedy choice?",
        answers: ["A choice that maximizes the immediate gain", "A random choice", "A choice that minimizes the time complexity", "A choice that uses recursion"],
        correctAnswer: "A choice that maximizes the immediate gain",
    },
    {
        question: "Which algorithm is used to find the shortest path in an unweighted graph?",
        answers: ["Breadth-First Search", "Depth-First Search", "Dijkstra's Algorithm", "Greedy Algorithm"],
        correctAnswer: "Breadth-First Search",
    },
    {
        question: "What is the purpose of backtracking in algorithms?",
        answers: ["Optimizing code for execution speed", "Storing computed results to avoid redundant calculations", "Reversing the order of elements", "Exploring multiple paths to find a solution"],
        correctAnswer: "Exploring multiple paths to find a solution",
    },
    {
        question: "What data structure is used for efficient search, insertion, and deletion operations?",
        answers: ["Queue", "Stack", "Linked List", "Hash Table"],
        correctAnswer: "Hash Table",
    },
    {
        question: "In a graph, what does a topological sort represent?",
        answers: ["A minimum spanning tree", "The shortest path", "A linear ordering of vertices", "A circular path"],
        correctAnswer: "A linear ordering of vertices",
    },
    {
        question: "Which sorting algorithm has a time complexity of O(n log n) in the average and worst cases?",
        answers: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Heap Sort"],
        correctAnswer: "Quick Sort",
    },
];


//JSON array containing all questions
let hardQuestions = [
  {
      question: "What is the time complexity of the Dijkstra's algorithm for finding the shortest path in a weighted graph?",
      answers: ["O(n)", "O(n log n)", "O(n^2)", "O(E + V log V)"],
      correctAnswer: "O(E + V log V)",
  },
  {
      question: "In the context of algorithms, what does NP stand for?",
      answers: ["Non-Polynomial", "No Problem", "Non-Prime", "No Permutations"],
      correctAnswer: "Non-Polynomial",
  },
  {
      question: "What is the worst-case time complexity of the Traveling Salesman Problem (TSP)?",
      answers: ["O(n)", "O(n log n)", "O(2^n * n^2)", "O(E + V log V)"],
      correctAnswer: "O(2^n * n^2)",
  },
  {
      question: "Which algorithm is used for optimal binary search trees?",
      answers: ["Greedy Algorithm", "Dynamic Programming", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
      correctAnswer: "Dynamic Programming",
  },
  {
      question: "What is the primary data structure used to implement a Red-Black Tree?",
      answers: ["Array", "Linked List", "Binary Search Tree", "Heap"],
      correctAnswer: "Binary Search Tree",
  },
  {
      question: "What is the primary data structure used to implement a B-Tree?",
      answers: ["Array", "Linked List", "Binary Search Tree", "Graph"],
      correctAnswer: "Array",
  },
  {
      question: "What is the time complexity of the Knapsack Problem with dynamic programming?",
      answers: ["O(n)", "O(n log n)", "O(nW)", "O(2^n)"],
      correctAnswer: "O(nW)",
  },
  {
      question: "In a graph, what does a minimum spanning tree represent?",
      answers: ["A tree with the minimum number of vertices", "The shortest path", "A tree with the maximum number of vertices", "A circular path"],
      correctAnswer: "A tree with the minimum number of vertices",
  },
  {
      question: "What is the purpose of the A* algorithm in pathfinding?",
      answers: ["Optimizing code for execution speed", "Storing computed results to avoid redundant calculations", "Finding the optimal path in weighted graphs", "Memory management techniques"],
      correctAnswer: "Finding the optimal path in weighted graphs",
  },
  {
      question: "What is the primary data structure used to implement a Trie data structure?",
      answers: ["Queue", "Stack", "Linked List", "Array"],
      correctAnswer: "Array",
  },
  {
      question: "Which sorting algorithm is considered in-place and stable?",
      answers: ["Merge Sort", "Heap Sort", "Quick Sort", "Radix Sort"],
      correctAnswer: "Quick Sort",
  },
  {
      question: "What is the time complexity of the Floyd-Warshall algorithm for all pairs shortest path in a weighted graph?",
      answers: ["O(n)", "O(n log n)", "O(n^2)", "O(V^3)"],
      correctAnswer: "O(V^3)",
  },
  {
      question: "What is the primary data structure used to implement a Suffix Tree?",
      answers: ["Queue", "Stack", "Linked List", "Array"],
      correctAnswer: "Array",
  },
  {
      question: "Which algorithm is used to find the maximum flow in a flow network?",
      answers: ["Dijkstra's Algorithm", "Prim's Algorithm", "Kruskal's Algorithm", "Ford-Fulkerson Algorithm"],
      correctAnswer: "Ford-Fulkerson Algorithm",
  },
  {
      question: "What is the primary data structure used to implement a Bloom Filter?",
      answers: ["Queue", "Stack", "Bit Array", "Graph"],
      correctAnswer: "Bit Array",
  },
  {
      question: "In the context of algorithms, what does AVL stand for?",
      answers: ["Advanced Variable List", "Automated Verification Language", "Adelson-Velsky and Landis", "Average Value Lookup"],
      correctAnswer: "Adelson-Velsky and Landis",
  },
  {
      question: "What is the primary data structure used to implement a Skip List?",
      answers: ["Queue", "Stack", "Linked List", "Array"],
      correctAnswer: "Linked List",
  },
  {
      question: "Which algorithm is used to solve the Longest Common Subsequence problem?",
      answers: ["Bellman-Ford Algorithm", "Dijkstra's Algorithm", "Kruskal's Algorithm", "Dynamic Programming"],
      correctAnswer: "Dynamic Programming",
  },
  {
      question: "What is the time complexity of the Bellman-Ford algorithm for single-source shortest path in a weighted graph?",
      answers: ["O(n)", "O(n log n)", "O(n^2)", "O(VE)"],
      correctAnswer: "O(VE)",
  },
];
