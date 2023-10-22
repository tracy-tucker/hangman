// import './App.css'

import Hangman from './components/Hangman';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Hero />
      <Hangman />
    </>
  );
}

export default App;

// Game Notes
// The game should have a top score and initials somewhere on screen.
// The game should have a timer somehwere on screen.
// The game should have a box containing all letters of the alphabet.
// The game should have dashed lines for each letter of the hidden phrase, with spaces in between to indicate the end of a word.
// The game should have an input box that accepts no less than 0, and no more than 1 letter at submission.
// The input box can NOT accept any other type of character besides 1 of the 26 letters from the alphabet.
// Every time a letter is chosen, the matching letter is crossed out in the alphabet box.
// IF the letter is correct, letter appears in correct placement of dashed lines, for every occurance in the phrase.
// IF the letter is INCORRECT, a body part of the hangman appears.
// IF the letter is a repeat, a toaster message appears indicating the repeat.
// IF the letter is a repeat, there is no response in the alphabet, hangman or phrase.
// AT GAME END, toaster message appears indicating end of game
// IF GAME WIN, toaster message is in "happy" color.
// IF GAME LOSS, toaster message is in "sad" color.
// IF GAME WIN && SCORE IS HIGHER THAN CURRENT TOP SCORE, player enters initials, limited to 3 characters.
// Top score is deteremined by quickest time of win completion.
// WHEN end game message is exited, game resets and new hidden phrase populates.

// Game Specs
// Random quotes generator: https://api-ninjas.com/api/quotes
// API: 'https://api.api-ninjas.com/v1/quotes?category=' + category
// CSS: Use Tailwind CSS
// State Management: React Query
// Past Scores: Contentful? Think about this some more
// Axios for HTTP requests
