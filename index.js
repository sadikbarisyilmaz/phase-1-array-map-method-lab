const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const result = []
  const sentenceArr = tutorials.map(x => {
    return x.split(" ")
  })

  sentenceArr.map(sentenceArr => {
    const titleCase = []

    sentenceArr.map(word => {
      let newWord = []

      for (let i = 0; i < word.length; i++) {
        if (i == 0) {
          newWord.push(word[i].toUpperCase())
        } else {
          newWord.push(word[i])
        }
      }
      // console.log(newWord.join(""));
      titleCase.push(newWord.join(""))
    });
    // console.log(titleCase);
    result.push(titleCase.join(" "))
  })
  console.log(result);
  return result

}

titleCased(tutorials)
