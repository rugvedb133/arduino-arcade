# Board Games on Arduino
### Tic-Tac-Toe & Checkers, built from scratch on Arduino

**[→ View the project write-up](https://rugvedb133.github.io/arduino-matrix-arcade/)**

![Tic-Tac-Toe winning screen on the LED matrix](../../tree/gh-pages/images/social-preview.png)

Two turn-based games sharing one hand-wired rig: an Arduino Mega, an 8×8 WS2812 LED matrix standing in for the board, a 16×2 LCD for status, and a 4×4 membrane keypad for input. Built for *CS122A — Intermediate Embedded Systems*.

## Demos

- 🎥 [Tic-Tac-Toe demo](https://youtu.be/Pk7ccf08vmk)
- 🎥 [Checkers demo](https://youtu.be/MfjVNr8zxWw)

## Highlights

- Two-player and player-vs-CPU modes in both games
- A minimax AI opponent for tic-tac-toe — near-unbeatable on "hard"
- Full king and capture rules implemented for checkers on a real 8×8 board
- Both games driven by an explicit state machine, ticked every 500ms
- Every peripheral — keypad, LED matrix, LCD — wired and addressed by hand, no pre-built game engine

## Hardware

| Component | Role |
|---|---|
| Arduino Mega 2560 | Main controller |
| 8×8 WS2812 RGB LED matrix | Game board |
| 16×2 character LCD | Status / turn display |
| 4×4 switch membrane keypad | Player input |