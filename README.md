# 🧮 Basic Calculator

A modern, responsive calculator built using **HTML**, **CSS**, and **JavaScript**. This project was created as part of a front-end assignment to practice UI design, input handling, and core JavaScript functionality.

## 🚀 Live Demo

[Click Here to Launch Calculator](https://vinayakgoyal2208.github.io/Calculator/)

---

## ✨ Features

Your calculator includes both standard and advanced utility functions:

| Feature Category | Detail | Description |
| :--- | :--- | :--- |
| **Core Arithmetic** | `+`, `-`, `*`, `/`, `%` | Supports all basic operations, including **Percentage** calculation. |
| **Order of Operations** | BODMAS/PEMDAS | Logic relies on JavaScript's native evaluation order for accurate results. |
| **Memory Functions** | `M+`, `M-`, `MR`, `MC` | Full memory bank support for storing and recalling values in expressions. |
| **Extra Controls** | `AC`, `⌫`, `00`, `.` | Clear All, Delete Last Character, and advanced numerical input. |
| **Robustness** | Error Handling | Automatically displays **"Error"** for division by zero and invalid syntax. |
| **Accessibility** | Keyboard Support | Full support for desktop input (Numbers, Operators, `Enter`, `Backspace`, `Esc`). |
| **Design** | Modern UI | **Glassmorphic** style with clear, differentiated buttons and interactive hover/press effects. |

---

## 📸 Project Screenshot

<img src="https://github.com/user-attachments/assets/16ef3113-1f49-40cf-9602-8c970015ae2c" alt="Basic Calculator User Interface" width="400"/>

---

## 🧠 Learning Outcomes

This project provided hands-on experience with critical front-end skills:

1.  **DOM Manipulation:** Dynamically updating the display and handling button/keyboard inputs.
2.  **State Management:** Implementing persistent logic for the calculation string and the separate memory value.
3.  **Complex Logic:** Developing custom logic for features like **Percentage** and **Memory Recall (MR)** within an `eval()` framework.
4.  **Modern CSS:** Designing a professional, user-friendly interface using modern CSS techniques (e.g., gradients, shadows).

---

## 🖥️ Usage Guide

### Getting Started

1.  Clone or download this repository.
2.  Open the `index.html` file in any modern web browser.

### Performing Calculations

The calculator supports both mouse and keyboard input.

* **Mouse:** Simply click the buttons on the screen.
* **Keyboard:** Use the numeric keypad and keys like `+`, `-`, `*`, `/`. Press `Enter` for `=`, `Backspace` for `⌫`, and `Esc` for `AC`.

### Memory Example

1.  **Store a value:** Enter `9 * 5`, then press `M+`. The memory now holds `45`.
2.  **Continue calculating:** Enter `10 + 5`, press `=`. The screen shows `15`.
3.  **Recall Memory:** Press `MR`. The expression becomes `15 + 45`. Press `=` again to get `60`.

---

## 📂 Project Structure

This project is structured for simplicity and easy deployment:
```
Calculator/ ├── index.html # Contains the HTML structure, CSS styles, and JavaScript logic. └── README.md # Project documentation (this file).
```

*(Note: All CSS and JavaScript are embedded directly in `index.html` for single-file deployment.)*
