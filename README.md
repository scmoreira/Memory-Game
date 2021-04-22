

# Ironhack LAB | DOM Memory Game

## Introduction

Made with (Vanilla) JavaScript to manipulate DOM elements. [Click here to play!](https://scmoreira.github.io/Memory-game/).

![Memory Game Board](https://i.imgur.com/H6GLZGQ.jpg)

Do you remember that game called Memory that you used to play with the actual paper cards? To win, you needed to memorize the position of the paired card. Well, the logic of the game we will be building is the same.

- The game consists of an even number of cards (precisely, 24) with a specific image on one side and a generic blue background on the other side.
- Each image appears on two cards.

**The game rules:**

- When the game starts, all cards are turned face down.
- The player then flips over two cards, selecting them by clicking on them.
- If the selected two cards have the same image, they remain face up. Otherwise, the cards flip back over after a short period of time.

The goal of the game is to get all the cards flipped face-up in the least number of tries. That means that a lower number of attempts scores better.
