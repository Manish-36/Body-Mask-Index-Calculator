# Body Mass Index (BMI) Calculator

A clean, responsive web application built with vanilla HTML, CSS, and JavaScript that calculates Body Mass Index (BMI) from height in centimeters and weight in kilograms, and classifies the resulting weight condition.

## Preview

<img width="1917" height="855" alt="Screenshot 2026-11-19 182742" src="https://github.com/user-attachments/assets/34efba6b-434c-4872-b7c9-471ac7c33809" />

## Features

* **Instant BMI Calculation:** Converts height from centimeters (`cm`) to meters (`m`) and computes BMI (`weight / (height * height)`) when clicking **Compute BMI**.
* **Weight Condition Classification:** Categorizes results into **Under weight** (`< 18.5`), **Normal weight** (`18.5 – 24.9`), **Over weight** (`25 – 29.9`), or **Obesity** (`>= 30`).
* **Pre-filled Default Values:** Comes with default inputs (`180` cm and `80` kg) so you can test calculations right away.
* **Glassmorphic Card UI:** Styled with Flexbox, a soft `lightgreen` to `lightblue` linear gradient background, translucent card styling, and monospaced typography.

---

## Project Structure

```text
├── index.html      # BMI calculator form inputs, button, and result display
├── style.css       # Gradient background, glassmorphic card, and button styles
├── index.js        # BMI formula logic, category checks, and click event handler
└── preview.png     # Application screenshot for the README
