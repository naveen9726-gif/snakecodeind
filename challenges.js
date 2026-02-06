// Challenges Page Logic - Safe Mode

// DOM Elements
const els = {
    intro: document.getElementById('intro-overlay'),
    codeEditor: document.getElementById('code-editor'),
    runCodeBtn: document.getElementById('run-code-btn'),
    submitCodeBtn: document.getElementById('submit-code-btn'),
    feedbackArea: document.getElementById('feedback-area')
};

// State
const state = {
    codeEditor: null
};

// Safe Intro Removal
function removeIntro() {
    if (els.intro) {
        els.intro.classList.add('fade-out');

        // Force removal from DOM after transition to prevent blocking
        setTimeout(() => {
            els.intro.style.display = 'none';
        }, 1000); // Matches CSS transition duration
    }
    // Ensure body is scrollable
    document.body.style.overflowY = 'auto';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log("Challenges Page Loaded");

    // Initialize CodeMirror editor
    if (els.codeEditor) {
        state.codeEditor = new CodeEditor('code-editor', {
            initialValue: 'print("Hello, World!")\n',
            mode: 'python',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true,
            indentUnit: 4,
            indentWithTabs: false,
            tabSize: 4,
            styleActiveLine: true,
            matchBrackets: true,
            autoCloseBrackets: true
        });
    }

    // Play intro for a short duration then remove
    setTimeout(removeIntro, 2000); // 2 seconds reading time

    // Fallback safety: ensure it removes even if something laggy happens
    setTimeout(removeIntro, 4000);

    // Setup button handlers
    if (els.runCodeBtn) {
        els.runCodeBtn.addEventListener('click', () => {
            const code = state.codeEditor ? state.codeEditor.getValue() : '';
            if (els.feedbackArea) {
                els.feedbackArea.innerHTML = '<p style="color: #00ff88;">Run functionality to be implemented</p>';
            }
        });
    }

    if (els.submitCodeBtn) {
        els.submitCodeBtn.addEventListener('click', () => {
            const code = state.codeEditor ? state.codeEditor.getValue() : '';
            if (els.feedbackArea) {
                els.feedbackArea.innerHTML = '<p style="color: #00ff88;">Submit functionality to be implemented</p>';
            }
        });
    }
