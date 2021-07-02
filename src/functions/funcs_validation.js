export const checkForFullName = (inputName) => {
  // this function checks for a that full name has at least 2 words
  const inputNameArr = inputName.split(' ');
  if (inputNameArr.length > 1) {
    return true;
  }
  return false;
};

export const checkFullNameFirstAndLastOver = (inputName, charOver) => {
  // this function that first and last name are over a char min
  const inputNameArr = inputName.trim().split(' ');
  console.log(inputNameArr, inputNameArr[0].length, inputNameArr[inputNameArr.length - 1].length);
  if (
    inputNameArr[0].length > charOver - 1 &&
    inputNameArr[inputNameArr.length - 1].length > charOver - 1
  ) {
    return true;
  }
  return false;
};

export const doesHaveSpaces = (inputValue) => {
  // if you split the input, and it has a length (> 0) then return true
  if (inputValue.split(' ').length > 1) {
    return true;
  }
  return false;
};

export const isEachWordOverCharLimit = (arrayOfWords, charLimit) => {
  const boolArray = [];

  arrayOfWords.forEach((word) => {
    if (word.length >= charLimit) {
      boolArray.push(true);
    } else {
      boolArray.push(false);
    }
  });

  return boolArray.every((arrItem) => arrItem === true);
};

export const isWordOverCharLimit = (word, charLimit) => {
  if (word.length >= charLimit) {
    return true;
  } else {
    return false;
  }
};

export const doesContainNumberOfWords = (textAreaValue, wordLimit) => {
  let splitAtLineBreak = textAreaValue.trim().split('\n\n');
  let splitAtSpace = [];
  splitAtLineBreak.forEach((entry) => {
    // console.log('entry: ', entry.split(' '))
    entry.split(' ').forEach((word) => splitAtSpace.push(word));
  });
  // console.log('check @ doesContainNumberOfWords: ', splitAtLineBreak, splitAtSpace)
  if (splitAtSpace.length >= wordLimit) {
    return true;
  }
  return false;
};

export const isEmailAddressValid = (emailValue) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailValue).toLowerCase());
};

export const isValidVerificationCode = (inputCode) => {
  const re = /^[0-9]{6}$/;
  return re.test(Number(inputCode));
};

export const containsAlphaOrNums = (inputString) => {
  const re = /^[a-zA-Z0-9]$/;
  return re.test(String(inputString));
};
