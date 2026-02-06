const questions = {
    beginner: [
        {
            text: "Which of the following is NOT a core feature of Python?",
            options: [
                "Interpreted Language",
                "Dynamically Typed",
                "Pointers for manual memory management",
                "Extensive Standard Library"
            ],
            correct: 2,
            explanation: "Python is a high-level language that handles memory management automatically via garbage collection. Unlike C/C++, it does not provide manual pointer manipulation to ensure safety and simplicity.",
            example: "Think of Python as an Automatic Car; you don't need to manually change gears (manage memory) like you do in a Manual Car (C++)."
        },
        {
            text: "What is the primary difference between a List and a Tuple?",
            options: [
                "Lists are faster than Tuples",
                "Tuples are mutable, Lists are immutable",
                "Lists use (), Tuples use []",
                "Lists are mutable, Tuples are immutable"
            ],
            correct: 3,
            explanation: "Lists are mutable, meaning you can change, add, or remove elements after creation. Tuples are immutable; once created, they cannot be modified.",
            example: "A 'Shopping List' is a List (items change), while 'Coordinates of a City' (Latitude, Longitude) is a Tuple (values don't change)."
        },
        {
            text: "How does Python handle memory management?",
            options: [
                "Requires manual 'free' commands",
                "Automatic Garbage Collection (Reference Counting)",
                "It doesn't manage memory",
                "Uses static allocation only"
            ],
            correct: 1,
            explanation: "Python uses reference counting and a cyclic garbage collector to automatically reclaim memory from objects that are no longer in use.",
            example: "Imagine a library where books are automatically returned to shelves the moment everyone stops reading them."
        },
        {
            text: "What is the difference between 'is' and '==' symbols in Python?",
            options: [
                "'is' checks for value, '==' checks for identity",
                "'is' checks for identity, '==' checks for value",
                "They are exactly the same",
                "'is' is used for strings only"
            ],
            correct: 1,
            explanation: "'==' checks if the values of two objects are equal. 'is' checks if both variables point to the exact same object in memory (memory address comparison).",
            example: "Two identical keys are '==' (equal value). But they are not 'is' (not the same physical key)."
        },
        {
            text: "What is the purpose of 'if __name__ == \"__main__\":'?",
            options: [
                "To define a main function",
                "To prevent code from running when the script is imported as a module",
                "To speed up execution",
                "To initialize global variables"
            ],
            correct: 1,
            explanation: "This block allows you to run code when the script is executed directly, but prevents it from running if the script is imported into another module.",
            example: "It's like having a 'Self-Test' button on a machine. You want it to run when testing the machine itself, but not every time the machine is plugged into a factory line."
        }
    ],
    intermediate: [
        {
            text: "Which data structure is most efficient for implementing a Queue in Python?",
            options: [
                "list",
                "tuple",
                "collections.deque",
                "dictionary"
            ],
            correct: 2,
            explanation: "While lists can work, 'deque' (Double-Ended Queue) is optimized for O(1) appends and pops from both ends. Lists are O(n) for popping from the start.",
            example: "Using a list as a queue is like a line where every person has to take a step forward whenever the first person leaves. A deque is like a line where the head just moves."
        },
        {
            text: "What is the average time complexity of looking up a key in a Python Dictionary?",
            options: [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n^2)"
            ],
            correct: 0,
            explanation: "Dictionaries use Hash Tables, which provide O(1) average time complexity for searching, inserting, and deleting keys.",
            example: "It's like having an index in a book. You don't read every page (O(n)), you go straight to the page number (O(1))."
        },
        {
            text: "What is a Decorator in Python?",
            options: [
                "A tool to style the UI",
                "A function that modifies the behavior of another function",
                "A type of class inheritance",
                "A module for graphic design"
            ],
            correct: 1,
            explanation: "Decorators are functions that 'wrap' other functions to extend their behavior without permanently modifying them, often using the @ syntax.",
            example: "Think of a 'Gift Wrap'. The gift (original function) stays the same, but the wrap (decorator) adds extra appearance or features (like a bow/logging)."
        },
        {
            text: "Which block in Exception Handling always runs, regardless of whether an error occurred?",
            options: [
                "try",
                "except",
                "else",
                "finally"
            ],
            correct: 3,
            explanation: "The 'finally' block is used for cleanup actions (like closing files or database connections) and executes no matter what happens in try/except.",
            example: "No matter if your party was a success (try) or a disaster (except), you always have to clean up the house (finally)."
        },
        {
            text: "What is the difference between a shallow copy and a deep copy?",
            options: [
                "They are the same",
                "Shallow copy copies references; Deep copy copies nested objects",
                "Shallow copy is faster but uses more memory",
                "Deep copy only works for integers"
            ],
            correct: 1,
            explanation: "A shallow copy creates a new object but inserts references into it. A deep copy recursively copies every object found in the original.",
            example: "Shallow copy is like a shared cloud folder link. If you change a file inside, everyone sees it. Deep copy is like downloading the folder; your changes don't affect the original."
        }
    ],
    advanced: [
        {
            text: "What is the key difference between an Iterator and a Generator?",
            options: [
                "Generators use more memory",
                "Iterators are used for loops, Generators are for math",
                "Generators use the 'yield' keyword to produce values lazily",
                "There is no difference"
            ],
            correct: 2,
            explanation: "All generators are iterators. Generators simplify iterator creation by using 'yield', which pauses execution and maintains state, making them memory-efficient.",
            example: "An Iterator is like a printed book. A Generator is like a storyteller who only thinks of the next sentence when you ask 'And then?'."
        },
        {
            text: "What is the Global Interpreter Lock (GIL) in Python?",
            options: [
                "A lock that prevents multiple users from editing code",
                "A mechanism that allows only one thread to execute Python bytecode at a time",
                "A security feature for web servers",
                "A tool to lock variables"
            ],
            correct: 1,
            explanation: "The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once. This simplifies memory management but limits multi-core CPU performance.",
            example: "Imagine a kitchen with 4 chefs (threads) but only 1 sharp knife (the GIL). Only one chef can chop at a time, even if there's plenty of counter space."
        },
        {
            text: "How can you improve performance when processing large numerical datasets in Python?",
            options: [
                "Use more nested for loops",
                "Use basic list operations",
                "Use 'Vectorization' via libraries like NumPy",
                "Avoid writing functions"
            ],
            correct: 2,
            explanation: "Vectorization replaces explicit loops with array expressions, allowing operations to run in highly optimized C code instead of Python bytecode.",
            example: "Instead of telling 100 people 'Stand up' one by one (Loop), you shout 'Everybody stand up!' (Vectorization)."
        },
        {
            text: "What distinguishes a @classmethod from a @staticmethod?",
            options: [
                "@classmethod takes 'cls' as first argument; @staticmethod takes no implicit first argument",
                "@classmethod is for instances only",
                "@staticmethod can access class variables",
                "They are interchangeable"
            ],
            correct: 0,
            explanation: "@classmethod receives the class itself as an implicit first argument (cls), allowing it to access class state. @staticmethod is just a function that lives inside the class namespace.",
            example: "@classmethod is like a 'Manager' who knows about the whole Company. @staticmethod is like a 'Policy Handbook' sitting on the desk; it's related to the company but doesn't interact with people."
        },
        {
            text: "Which function allows you to apply a specific operation to every item in a list and return a new list?",
            options: [
                "filter()",
                "map()",
                "reduce()",
                "zip()"
            ],
            correct: 1,
            explanation: "The map() function applies a given function to each item of an iterable (list, tuple etc.) and returns a list of the results.",
            example: "Map is like a 'Price Scanner' at a supermarket. You pass every item through it to get the price of each item."
        }
    ],
    coding: [
        {
            text: "To reverse a Singly Linked List conceptually, what is the minimum number of pointers usually tracked per step?",
            options: [
                "1 (Current)",
                "2 (Current, Next)",
                "3 (Previous, Current, Next)",
                "4 (Head, Current, Next, Tail)"
            ],
            correct: 2,
            explanation: "You need 'Previous' to change the pointer, 'Current' to know where you are, and 'Next' to keep track of the rest of the list before you break the link.",
            example: "It's like three people holding hands. To turn around, you need to know who was behind you, who you are, and who is ahead of you before letting go."
        },
        {
            text: "What is the time complexity of a Binary Search algorithm?",
            options: [
                "O(n)",
                "O(n log n)",
                "O(log n)",
                "O(1)"
            ],
            correct: 2,
            explanation: "Binary search cuts the search space in half with every step, leading to logarithmic time complexity O(log n).",
            example: "If you have a 1000-page phone book, you only need about 10 'flips' (steps) to find any name by splitting the book in half repeatedly."
        },
        {
            text: "Which Python function converts a JSON string back into a Python Dictionary?",
            options: [
                "json.dumps()",
                "json.loads()",
                "json.parse()",
                "json.to_dict()"
            ],
            correct: 1,
            explanation: "json.loads() (Load String) is used to parse JSON strings. json.dumps() (Dump String) is used to convert a dictionary into a JSON string.",
            example: "loads is 'Unpacking' a suitcase (JSON) into your room (Dictionary). dumps is 'Packing' your room into a suitcase."
        },
        {
            text: "In a Flask REST API, which decorator is used to define a route that only accepts POST requests?",
            options: [
                "@app.route('/path', methods=['POST'])",
                "@app.post('/path')",
                "Both are valid",
                "None of these"
            ],
            correct: 2,
            explanation: "In modern Flask (2.0+), both the traditional @app.route with methods argument and the shorthand @app.post are valid ways to define POST routes.",
            example: "It's like a 'Mail Slot' labeled 'Only for Packages'. You can either put a sign on a general door (@route) or have a dedicated slot (@post)."
        },
        {
            text: "To find the second largest number in a list without using built-in sort() or max(), what is the logical first step?",
            options: [
                "Sort the list manually",
                "Initialize two variables (largest, second_largest) to negative infinity",
                "Compare every number with the first number",
                "Delete the largest number"
            ],
            correct: 1,
            explanation: "By tracking both the largest and second largest as you iterate once through the list, you achieve O(n) efficiency without extra overhead.",
            example: "You are watching a race. You keep track of who is currently 1st and who is currently 2nd. When someone new passes them, you update your list."
        }
    ]
};

let currentLevel = null;
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// DOM Elements
const levelCards = document.querySelectorAll('.level-card');
const quizIntro = document.getElementById('quiz-intro');
const quizQuestionContainer = document.getElementById('quiz-question-container');
const quizSummary = document.getElementById('quiz-summary');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const resultText = document.getElementById('result-text');
const explanationText = document.getElementById('explanation-text');
const exampleText = document.getElementById('example-text');
const questionProgress = document.getElementById('question-progress');
const questionCategory = document.getElementById('question-category');
const submitBtn = document.getElementById('submit-answer-btn');
const nextBtn = document.getElementById('next-question-btn');
const finalScore = document.getElementById('final-score');
const scoreMessage = document.getElementById('score-message');

// Level Selection
levelCards.forEach(card => {
    card.addEventListener('click', () => {
        const selectedLevel = card.getAttribute('data-level');
        startLevel(selectedLevel);

        // UI updates
        levelCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

function startLevel(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;

    quizIntro.classList.add('hidden');
    quizSummary.classList.add('hidden');
    quizQuestionContainer.classList.remove('hidden');

    showQuestion();
}

function showQuestion() {
    const question = questions[currentLevel][currentQuestionIndex];
    answered = false;

    // Header
    questionCategory.innerText = currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1);
    questionProgress.innerText = `Question ${currentQuestionIndex + 1}/${questions[currentLevel].length}`;

    // Content
    questionText.innerText = question.text;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = option;
        btn.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(btn);
    });

    // Reset feedback and buttons
    feedbackContainer.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    submitBtn.disabled = true;
}

let selectedOptionIndex = null;

function selectOption(index) {
    if (answered) return;

    selectedOptionIndex = index;
    const allOptions = optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });

    submitBtn.disabled = false;
}

submitBtn.addEventListener('click', () => {
    if (selectedOptionIndex === null || answered) return;

    answered = true;
    const question = questions[currentLevel][currentQuestionIndex];
    const allOptions = optionsContainer.querySelectorAll('.option-btn');

    const isCorrect = selectedOptionIndex === question.correct;
    if (isCorrect) score++;

    // UI Feedback
    allOptions[selectedOptionIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
        allOptions[question.correct].classList.add('correct');
    }

    feedbackContainer.classList.remove('hidden');
    feedbackContainer.className = `feedback-box ${isCorrect ? '' : 'wrong-feedback'}`;
    resultText.innerText = isCorrect ? "Correct!" : "Incorrect";
    resultText.className = isCorrect ? "result-text-correct" : "result-text-wrong";
    explanationText.innerText = question.explanation;
    exampleText.innerText = question.example;

    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
});

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentLevel].length) {
        showQuestion();
    } else {
        showSummary();
    }
});

function showSummary() {
    quizQuestionContainer.classList.add('hidden');
    quizSummary.classList.remove('hidden');

    const total = questions[currentLevel].length;
    const percent = Math.round((score / total) * 100);

    finalScore.innerText = `${percent}%`;

    if (percent >= 80) {
        scoreMessage.innerText = "Excellent! You are Infosys-ready for this level.";
    } else if (percent >= 50) {
        scoreMessage.innerText = "Good job! A bit more practice and you'll master it.";
    } else {
        scoreMessage.innerText = "Keep studying! Consistency is key to success.";
    }

    // Update sidebar progress
    const activeSidebarCard = document.querySelector(`.level-card[data-level="${currentLevel}"] .level-progress`);
    if (activeSidebarCard) {
        activeSidebarCard.innerText = `${score}/${total}`;
    }
}

document.getElementById('restart-lvl-btn').addEventListener('click', () => {
    startLevel(currentLevel);
});

document.getElementById('back-to-levels-btn').addEventListener('click', () => {
    quizSummary.classList.add('hidden');
    quizIntro.classList.remove('hidden');
});
