const questions = {
    beginner: [
        {
            text: "What is a key feature of Python?",
            options: [
                "It requires manual memory management",
                "It is a compiled-only language",
                "It is an interpreted, high-level language",
                "It does not support Object-Oriented Programming"
            ],
            correct: 2,
            explanation: "Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability.",
            example: "You can run Python code directly without a separate compilation step (like in C++ or Java)."
        },
        {
            text: "What is the primary difference between a list, a tuple, and a set in Python?",
            options: [
                "Lists are immutable, Tuples are mutable, Sets are for math",
                "Lists are mutable, Tuples are immutable, Sets are for unique elements",
                "They are all the same, just different syntax",
                "Lists use (), Tuples use [], Sets use {}"
            ],
            correct: 1,
            explanation: "Lists are mutable (ordered), Tuples are immutable (ordered), and Sets are unordered collections of unique elements.",
            example: "[1,2,2] is a list, (1,2) is a tuple, and {1,2} is a set (no duplicates)."
        },
        {
            text: "Which of the following describes mutable vs immutable objects in Python?",
            options: [
                "Mutable objects can be changed after creation; Immutable objects cannot",
                "Immutable objects are faster but use more memory",
                "Strings are mutable, Lists are immutable",
                "Only integers are immutable"
            ],
            correct: 0,
            explanation: "Mutable objects (like Lists and Dictionaries) can be modified in place. Immutable objects (like Strings, Tuples, and Integers) cannot be changed once created.",
            example: "If you try to change a character in a 'string', Python creates a new string instead of modifying the old one."
        },
        {
            text: "How does Python handle memory management?",
            options: [
                "It uses manual allocation like malloc()",
                "Automatic memory management via reference counting and garbage collection",
                "It saves all variables to the hard drive",
                "Memory is never freed in Python"
            ],
            correct: 1,
            explanation: "Python uses a private heap to manage memory. It employs reference counting and a cycle-detecting garbage collector to reclaim unused memory.",
            example: "When a variable goes out of scope, Python automatically handles the cleanup for you."
        },
        {
            text: "What is the difference between 'is' and '==' in Python?",
            options: [
                "'is' checks for equality, '==' checks for identity",
                "They are interchangeable in all cases",
                "'is' checks for identity (memory address), '==' checks for equality (value)",
                "'is' only works for numbers"
            ],
            correct: 2,
            explanation: "'==' checks if the values are equal. 'is' checks if two variables point to the exact same object in memory.",
            example: "a = [1]; b = [1]. a == b is True, but a is b is False."
        }
    ],
    intermediate: [
        {
            text: "How would you implement a stack and a queue using Python lists?",
            options: [
                "Stack: append()/pop(); Queue: append()/pop(0)",
                "Stack: insert(0)/pop(); Queue: append()/pop()",
                "Lists cannot implement stacks",
                "Stack: add(); Queue: remove()"
            ],
            correct: 0,
            explanation: "For a stack (LIFO), use append() and pop(). For a queue (FIFO), append() and pop(0) work, though collections.deque is faster for queues.",
            example: "stack = [1]; stack.append(2); stack.pop() -> returns 2."
        },
        {
            text: "Which of the following is an efficient way to reverse a string in Python?",
            options: [
                "Using a for loop and adding chars backward",
                "string[::-1] slicing",
                "string.reverse() function",
                "Strings cannot be reversed"
            ],
            correct: 1,
            explanation: "Slicing with a step of -1 (string[::-1]) is the most idiomatic and efficient way to reverse a string in Python.",
            example: "'hello'[::-1] resulting in 'olleh'."
        },
        {
            text: "How can you find the second largest element in a list efficiently?",
            options: [
                "Sort the list and take the second to last item",
                "Iterate once, tracking the largest and second largest",
                "Call max() twice",
                "Use a while loop until the list is empty"
            ],
            correct: 1,
            explanation: "Tracking both in a single pass O(n) is more efficient than sorting O(n log n).",
            example: "largest = -inf; second = -inf; if num > largest: second = largest; largest = num."
        },
        {
            text: "What is the difference between shallow copy and deep copy?",
            options: [
                "Shallow copy is for small files, deep is for large",
                "Shallow copies only the top level; Deep copies nested objects recursively",
                "Shallow copy is an alias; Deep copy is a mirror",
                "There is no difference in Python"
            ],
            correct: 1,
            explanation: "A shallow copy creates a new collection object but populates it with references to identical nested items. A deep copy creates copies of the nested items too.",
            example: "copy.copy() vs copy.deepcopy(). With shallow copy, if you change a list inside a list, both see the change."
        },
        {
            text: "What are Python decorators?",
            options: [
                "Tools to change the UI of Python apps",
                "Functions that modify the behavior of another function",
                "Special markers to delete variables",
                "A type of CSS for Python"
            ],
            correct: 1,
            explanation: "Decorators are a powerful tool to wrap a function, modifying its behavior without permanently changing the original function's code.",
            example: "@login_required is a common decorator in web apps."
        }
    ],
    advanced: [
        {
            text: "What is the difference between @staticmethod, @classmethod, and instance methods?",
            options: [
                "@classmethod is for classes, @staticmethod is for numbers",
                "Instance methods need 'self', @classmethod needs 'cls', @staticmethod needs nothing",
                "They are all the same",
                "Only instance methods can access variables"
            ],
            correct: 1,
            explanation: "Instance methods operate on an object. @classmethod operates on the class. @staticmethod doesn't receive 'self' or 'cls' and acts like a regular function.",
            example: "@classmethod can be used for factory methods; @staticmethod for utility functions."
        },
        {
            text: "How does Python handle inheritance and polymorphism?",
            options: [
                "Python does not support inheritance",
                "Allows child classes to inherit from parents and override methods",
                "Polymorphism only works for integers",
                "Inheritance requires the 'super' keyword for every line"
            ],
            correct: 1,
            explanation: "Python supports single and multiple inheritance. Polymorphism allows different classes to define their own versions of the same method.",
            example: "Class Dog(Animal): inherit speak(). Both Dog and Cat can speak() differently (Polymorphism)."
        },
        {
            text: "What is the role of __init__ and __str__ methods?",
            options: [
                "__init__ is for input, __str__ is for strings",
                "__init__ is a constructor; __str__ provides a readable string representation",
                "They are used to delete objects",
                "__init__ is only for integers"
            ],
            correct: 1,
            explanation: "__init__ initializes the object state. __str__ returns a string that is meant to be readable by users (informal).",
            example: "def __str__(self): return f'Person: {self.name}'"
        },
        {
            text: "How does Python handle exceptions?",
            options: [
                "Programs crash immediately on error",
                "Using try, except, else, and finally blocks",
                "Using 'if' statements after every line",
                "Exceptions are ignored automatically"
            ],
            correct: 1,
            explanation: "Python uses a 'try' block to run code, 'except' to catch errors, 'else' for success, and 'finally' for cleanup.",
            example: "try: result = 10/0; except ZeroDivisionError: print('Cannot divide by zero')"
        },
        {
            text: "What are generators and how are they different from iterators?",
            options: [
                "Generators are for power, Iterators are for loops",
                "Generators use 'yield' and produce values on the fly (lazy evaluation)",
                "Iterators are faster",
                "Generators can only be used once"
            ],
            correct: 1,
            explanation: "Generators are a simple way to create iterators using 'yield'. They produce items one at a time, saving memory compared to lists.",
            example: "range() is a generator-like object. It doesn't store all numbers in memory at once."
        }
    ],
    coding: [
        {
            text: "How do you check if a string is a palindrome in Python?",
            options: [
                "Loop through and count letters",
                "Check if s == s[::-1]",
                "Use the palindrome() function",
                "Strings cannot be palindromes"
            ],
            correct: 1,
            explanation: "A string is a palindrome if it reads the same forward and backward. 's[::-1]' reverses the string for a simple comparison.",
            example: "'radar' == 'radar'[::-1] is True."
        },
        {
            text: "Which of the following implements Binary Search using recursion?",
            options: [
                "Keep dividing the list in half and calling the same function on the half",
                "Loop through every item once",
                "Check the first and last item only",
                "Sort the list twice"
            ],
            correct: 0,
            explanation: "Binary search compares the target with the middle element and recursively searches the left or right half.",
            example: "Each recursive call reduces the problem size by half."
        },
        {
            text: "How would you count the frequency of words in a text using a Python data structure?",
            options: [
                "Using a list for every word",
                "Using a Dictionary (or collections.Counter)",
                "Using a Tuple",
                "Frequency cannot be counted in Python"
            ],
            correct: 1,
            explanation: "A dictionary stores words as keys and their counts as values. Counter is a specialized dictionary for this.",
            example: "counts = {}; for word in words: counts[word] = counts.get(word, 0) + 1"
        },
        {
            text: "How do you parse a JSON file and extract specific values?",
            options: [
                "Read it as a text file and use string search",
                "Use the csv module",
                "Use json.load(f) to convert it to a Python Dictionary",
                "JSON cannot be parsed in Python"
            ],
            correct: 2,
            explanation: "The 'json' module provides load() and loads() to convert JSON data into Python-native lists and dictionaries.",
            example: "data = json.load(open('config.json')); print(data['id'])"
        },
        {
            text: "Which library is commonly used to build a simple REST API in Python?",
            options: [
                "Tkinter",
                "PyGame",
                "Flask (or FastAPI/Django)",
                "NumPy"
            ],
            correct: 2,
            explanation: "Flask is a lightweight micro-framework ideal for quickly building RESTful web services.",
            example: "from flask import Flask; app = Flask(__name__); @app.route('/') ..."
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
        scoreMessage.innerText = "Excellent! You are TCS-ready for this level.";
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
