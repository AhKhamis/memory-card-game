# Memory Card Game

A simple and interactive memory card game built with HTML, CSS, and JavaScript.

The goal is to match all 6 pairs as quickly as possible and beat your best time.

## Features

- 12 cards with 6 matching pairs
- Random card arrangement
- Card flip animation
- Timer
- Best time tracking using localStorage
- Win screen
- Play again option
- Card flip, match, wrong match, and win sound effects
- Background music
- Responsive layout

## Technologies

- HTML5
- CSS3
- JavaScript

## How to Play

1. Click **Start Game**.
2. Flip two cards.
3. Find all matching pairs.
4. Complete the game as quickly as possible.
5. Try to beat your best time.

## Game Rules

- The game contains 12 cards.
- There are 6 matching pairs.
- Only two cards can be selected at a time.
- Matching cards remain revealed.
- Non-matching cards are flipped back.
- The timer starts when the game begins.
- The timer stops when all pairs are matched.
- Your best time is saved in the browser.

## Sound Effects

The game includes sound effects for:

- Card flip
- Matching cards
- Winning
- Background music

## Best Time

The best time is stored using the browser's `localStorage`.

This allows your best time to remain saved when you refresh or reopen the game in the same browser.

## Project Structure

```text
memory-card-game/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── assets/
│   ├── images/
│   └── sounds/
│
└── README.md
```
