# Frontend Mentor - Tic Tac Toe solution

This is a solution to the [Tic Tac Toe challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- **Bonus 1**: Save the game state in the browser so that it’s preserved if the player refreshes their browser
- **Bonus 2**: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### Screenshots

![](./screenshot1.png)
![](./screenshot2.png)

### Links

- Live Site URL: [https://jordankisiel.github.io/tic-tac-toe-app/](https://jordankisiel.github.io/tic-tac-toe-app/)

## My process

### Built with

- Tailwindcss
- Mobile-first workflow
- [React](https://reactjs.org/) - JS framework
- [Tailwindcss](https://tailwindcss.com/) - CSS framework

### What I learned

This was my first React project. I felt like I had a decent grasp of the basics so I wanted to put them into practice. For the most part the only aspect I struggled with in development was using setTimeout to make the computer opponent feel like it was 'thinking' rather than just making moves instantly. useEffect ended up being the solution which makes sense because setTimeout is actually a Window method and is, therefore, a system external to React.

I also learned a lot about how to deploy a React app. I struggled quite a bit to get everything working in the build version but I think I know the best way to approach it now and it should be much easier on my next project.

### Continued development

I'm on the fence about whether I want to use Tailwind on my next React project or not. On the one hand, I do like working with Tailwind but, on the other, I'm not sure if Tailwind is the best choice to use with React. You can't do string interpolation with Tailwind classes (which I found awkward to workaround) and the classes do feel like they muck up the component code (for lack of a better term). I think I may try Styled Components for my next project since it was designed to work with React specifically but I may also see if I can't find some tips on using Tailwind with React.

I also want to try utilizing one or more API's in my next project so I can practice fetching data inside of useEffect.

## Author

- Website - [Jordan Kisiel](https://robojojo.co/)
- Frontend Mentor - [@JordanKisiel](https://www.frontendmentor.io/profile/JordanKisiel)
- Twitter - [@JordanKisiel](https://www.twitter.com/JordanKisiel)

