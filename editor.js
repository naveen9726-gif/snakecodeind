/* CodeMirror Editor Module - SnakeCode */

class CodeEditor {
    constructor(containerId, options = {}) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        
        if (!this.container) {
            console.error(`Container with ID '${containerId}' not found`);
            return;
        }

        // Default options
        this.options = {
            mode: 'python',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true,
            indentUnit: 4,
            indentWithTabs: false,
            tabSize: 4,
            styleActiveLine: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            autoCloseTags: false,
            highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
            ...options
        };

        // Initialize CodeMirror
        this.init();
        this.attachEventHandlers();
    }

    init() {
        // Create editor instance
        this.editor = CodeMirror(this.container, {
            value: this.options.initialValue || '',
            mode: this.options.mode,
            theme: this.options.theme,
            lineNumbers: this.options.lineNumbers,
            lineWrapping: this.options.lineWrapping,
            indentUnit: this.options.indentUnit,
            indentWithTabs: this.options.indentWithTabs,
            tabSize: this.options.tabSize,
            styleActiveLine: this.options.styleActiveLine,
            matchBrackets: this.options.matchBrackets,
            autoCloseBrackets: this.options.autoCloseBrackets,
            highlightSelectionMatches: this.options.highlightSelectionMatches,
            extraKeys: {
                'Enter': this.handleEnter.bind(this),
                'Backspace': this.handleBackspace.bind(this),
                'Tab': this.handleTab.bind(this),
                'Shift-Tab': 'indentLess',
                'Ctrl-/': 'toggleComment',
                'Cmd-/': 'toggleComment'
            }
        });

        // Set height to fill container
        this.editor.setSize('100%', '100%');
    }

    attachEventHandlers() {
        // Prevent backspace from triggering browser navigation
        this.editor.getWrapperElement().addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                e.preventDefault();
                // Handle backspace in our custom handler
                this.editor.execCommand('goCharLeft');
                if (this.editor.somethingSelected()) {
                    this.editor.replaceSelection('');
                } else {
                    const cursor = this.editor.getCursor();
                    if (cursor.ch > 0) {
                        this.editor.replaceRange('', 
                            { line: cursor.line, ch: cursor.ch - 1 },
                            cursor
                        );
                    } else if (cursor.line > 0) {
                        const prevLine = this.editor.getLine(cursor.line - 1);
                        this.editor.replaceRange('', 
                            { line: cursor.line - 1, ch: prevLine.length },
                            cursor
                        );
                    }
                }
            }
        });

        // Focus handling
        this.editor.on('focus', () => {
            this.container.classList.add('editor-focused');
        });

        this.editor.on('blur', () => {
            this.container.classList.remove('editor-focused');
        });

        // Change handling
        if (this.options.onChange) {
            this.editor.on('change', this.options.onChange.bind(this));
        }
    }

    handleEnter(cm) {
        // Handle Enter key with auto-indentation
        const cursor = cm.getCursor();
        const line = cm.getLine(cursor.line);
        const indent = line.match(/^\s*/)[0];
        
        // Get the trimmed line to check for keywords
        const trimmedLine = line.trim();
        const keywordPattern = /^(if|elif|else|for|while|def|class|try|except|finally|with)[\s:]/;
        
        // Insert newline
        cm.replaceSelection('\n');
        
        // Add proper indentation
        let newIndent = indent;
        
        // Check if the previous line ends with a colon (indicating a block)
        if (trimmedLine.endsWith(':')) {
            newIndent = indent + '    '; // Add 4 spaces for Python indentation
        } else if (keywordPattern.test(trimmedLine)) {
            newIndent = indent + '    ';
        }
        
        cm.replaceSelection(newIndent);
        
        // Move cursor to the end of inserted indentation
        const newCursor = cm.getCursor();
        cm.setCursor(newCursor.line, newIndent.length);
    }

    handleBackspace(cm) {
        // Prevent default backspace and handle it ourselves
        if (cm.somethingSelected()) {
            // Delete selection
            cm.replaceSelection('');
        } else {
            const cursor = cm.getCursor();
            if (cursor.ch > 0) {
                // Delete character before cursor
                cm.replaceRange('', 
                    { line: cursor.line, ch: cursor.ch - 1 },
                    cursor
                );
            } else if (cursor.line > 0) {
                // Join with previous line
                const prevLine = cm.getLine(cursor.line - 1);
                cm.replaceRange('', 
                    { line: cursor.line - 1, ch: prevLine.length },
                    cursor
                );
            }
        }
        return false; // Prevent default behavior
    }

    handleTab(cm) {
        // Handle Tab with smart indentation
        if (cm.somethingSelected()) {
            cm.indentSelection('add');
        } else {
            // Insert spaces instead of tab
            cm.replaceSelection('    ');
        }
        return false; // Prevent default behavior
    }

    getValue() {
        return this.editor.getValue();
    }

    setValue(code) {
        this.editor.setValue(code);
    }

    focus() {
        this.editor.focus();
    }

    clearHistory() {
        this.editor.clearHistory();
    }

    on(event, handler) {
        this.editor.on(event, handler);
    }

    off(event, handler) {
        this.editor.off(event, handler);
    }

    getEditor() {
        return this.editor;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CodeEditor;
}
