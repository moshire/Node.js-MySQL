# Node.js-MySQL

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Contributors
@rcubillo

## Technology
* Constructors
* JavaScript
* NPM
    
## About

 Word Guess command-line game using constructor functions

## Instructions

This game meet the following criteria:

1. The game receive user input using the `inquirer` npm packages.

2. This game has three files:

* **Letter.js**: Contains a constructor, Letter. This constructor display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. The constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` doesn't `require` any other files.

4. `Word.js` *should only* require `Letter.js`

## Let's take a look

The game starts...
![Log Output](Screenshots/1.png)

You guess a letter...
![Log Output](Screenshots/2.png)

When you type an incorrect letter...
![Log Output](Screenshots/3.png)

You guess the world...
![Log Output](Screenshots/4.png)

When you lose...
![Log Output](Screenshots/5.png)


## Contributing Guidelines

All contributions and suggestions are welcome! For direct contributions, please fork the repository and file a pull request.

## Contact

Full-stack Web Software Developer