// export const composeValidators =
//   (...validators) =>
//   (value) =>
//     validators.reduce((err, validator) => err || validator(value), undefined);

// export const isRequired = (value) => {
//   value ? undefined : 'Input is Required';
// };

// export const isEmpty = (value) => {
//   console.log('value: ', value);
//   return value ? undefined : `Field is Empty`;
// };
import { User } from '../../standards/dictionaryForModels';
import {
  isWordOverCharLimit,
  checkForFullName,
  isEachWordOverCharLimit,
  isEmailAddressValid,
  checkFullNameFirstAndLastOver,
  doesHaveSpaces,
  containsAlphaOrNums,
} from '../../functions/funcs_validation';

export const retValidateFuncSignUp = () => {
  const { name, username, email } = User;

  return {
    [name]: validateName,
    [username]: validateUserName,
    [email]: validateEmail,
    password: validatePassword,
    confirmPassword: validateConfirmPassword,
  };
};

export const retValidateFuncSignIn = () => {
  return {
    usernameLogin: validateUserName,
    passwordLogin: validatePassword,
  };
};

// eO = errorObj, fV = formValues, mA = modelAttr

const validateName = (eO, fV, mA) => {
  // console.log(eO, fV, mA);
  if (!fV[mA]) {
    return (eO[mA] = 'Please Enter Your Full Name');
  }
  if (fV[mA]) {
    if (!checkForFullName(fV[mA])) {
      return (eO[mA] = 'Please Enter a Valid First and Last Name');
    }
    if (checkForFullName(fV[mA])) {
      const charMin = 2;
      if (!checkFullNameFirstAndLastOver(fV[mA], charMin)) {
        return (eO[mA] = `First and Last Name Values Must Have at Least ${charMin} Characters`);
      }
    }
  }
};

const usernameCharLimit = 2;

const validateUserName = (eO, fV, mA) => {
  if (!fV[mA]) {
    return (eO[mA] = 'Please Enter Your Username');
  }
  if (fV[mA]) {
    if (!isWordOverCharLimit(fV[mA], usernameCharLimit)) {
      return (eO[mA] = `Usernames must be at Least ${usernameCharLimit} Characters`);
    }
    if (doesHaveSpaces(fV[mA])) {
      return (eO[mA] = 'Usernames can not have Spaces');
    }
    // console.log('cAoN: ', containsAlphaOrNums(fV[mA]));
    // if (containsAlphaOrNums(fV[mA])) {
    //   return (eO[mA] = 'Usernames can only contain Alpha Characters and Numbers');
    // }
    // ASYNC VALIDATION?
    // if (fV) {
    //   if (fV.errors) {
    //     if (fV.errors[mA]) {
    //       console.log('values.code: ', fV);
    //       eO[mA] = 'Username Already Exists, Please Choose Another';
    //       console.log('errors: ', fV.errors);
    //     }
    // }
  }
};

const validateEmail = (eO, fV, mA) => {
  if (!fV[mA]) {
    return (eO[mA] = 'Please Enter Your Email');
  }
  if (fV[mA]) {
    // email regex
    if (!isEmailAddressValid(fV[mA])) {
      return (eO[mA] = 'Please Enter A Valid Email Address');
    }
  }
};

const passCharLimit = 6;

const validatePassword = (eO, fV, mA) => {
  if (!fV[mA]) {
    return (eO[mA] = 'Please Enter A Valid Password');
  }
  if (fV[mA]) {
    if (!isWordOverCharLimit(fV[mA], passCharLimit)) {
      return (eO[mA] = `Passwords must be over ${passCharLimit} Characters`);
    }
  }
};

const validateConfirmPassword = (eO, fV, mA) => {
  if (!fV[mA]) {
    return (eO[mA] = 'Please Confirm Your Password');
  }
  if (fV[mA]) {
    if (!isWordOverCharLimit(fV[mA], passCharLimit)) {
      return (eO[mA] = `Passwords must be over ${passCharLimit} characters`);
    }
  }
};
