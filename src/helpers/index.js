export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split("");
  const guessedLetters = guessedWord.split("");

  return secretLetters.filter(letter => guessedLetters.includes(letter)).length;
};
