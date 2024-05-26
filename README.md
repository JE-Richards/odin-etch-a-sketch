# Etch-a-Sketch: An Introductory JavaScript Project

## Table of Contents
1. [Overview](#overview)
2. [The Webpage](#the-webpage)
3. [Retrospective](#retrospective)

## Overview
This project forms part of [The Odin Project](https://www.theodinproject.com/) Foundations Course.
Building upon the JavaScript basics practiced in the [previous project](https://github.com/JE-Richards/odin-rock-paper-scissors) the course progresses to cover page events and using JavaScript for DOM (document object model) manipulation.

This project aims to provide an opportunity to practise these new techniques by creating a browser based game that's a cross between a sketchpad and an etch-a-sketch. This will be done by creating an empty grid on the page where each cell of the grid will change colour when the users mouse enters the cell.

Unlike previous projects, this one comes with two "extra credit" exercises to push our knowledge and skills a little further. <br>
The first is to modify the game so that each cell of the grid changes to a random color everytime the users mouse enters the cell. <br>
The second is to implement a progressive darkening effect into the game such that each cell gets 10% darker everytime the mouse enters it. The objective here is to get a completely black square in 10 interactions.

## The Webpage
To play around with the output of this project, please visit this website: https://je-richards.github.io/odin-etch-a-sketch/

## Retrospective
As the purpose of this project is to practise what's been taught thus far in the Foundations course, I figured it would be worthwhile performing a retrospective to help identify opportunities for improvement.

The retrospective will be subsectioned based on date (most recent to oldest). That way, should I choose to return and improve upon this project, I can add further retrospectives to see how each iteration has improved upon the last and how my understanding of HTML, CSS, and JavaScript has improved. The SHA string for the latest commit will be included in each retrospective.

### 26/05/2024
- Full commit SHA: 1e2de8609a2e018fb361e8984eb27fac52471ee8
- Overall, I'm happy with the outcome of this project. Not only has it helped me practice what I've learned thus far, but I also think I've produced the tidiest piece of code I've written thus far.
- Once the grid is generated, it isn't perfectly aligned in the center of the screen (offset to the left significantly). Code needs to be tweaked to correctly center the grid.
- So far I've only implented the first extra-credit exercise to randomise the grid colours.
- Due to how I've set up the grid size selector button, you're unable to cancel out of the prompt once it's launched. The only way to get the prompt to close is to enter a number between 1 and 100 and submit it.
    + This is happening because I've added some additional statements to the button function to check the user input is a number between 1 and 100. If the input isn't a number in this range, the prompt reappears. One of my verification statements is to check that the input isn't ```null``` so as to prevent the user from submitting a blank input. However, when a button is cancelled it returns ```null``` hence the inability to escape the prompt without submitting something valid. I need to modify these verification statements to address this.
- Due to how I'm creating the grid, an event listener object is being created for each cell in the grid. Whilst this isn't causing any significant impact to the page due to the limit of 100 rows and columns, it could cause performance issues should this limit be removed. It would be beneficial to look into whether or not utilising *event delegation* would be possible for this problem as it would reduce the number of event listeners needed.
- Although outside the project scope, these are some future additions that could be considered to help improve the page:
    + Implementing a 'Clear' button that whipes the colour formatting of the cells without deleting the grid entirely.
    + Whilst the color randomisation was an extra credit exercise, it would be good to remove this and include some additional buttons/options that the user could interact with to select their preferred colour for the cells. A 'randomise colours' option could be included here too.
    + The CSS styling of the page is practically non-existent as it was outside of project scope. Would be worth updating the styling to make the page offer a more pleasant viewing experience.