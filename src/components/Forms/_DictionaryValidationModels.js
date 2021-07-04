import { CogUser } from '../../standards/dictionaryForModels';

export const retMapSignUp = () => {
  return { ...CogUser };
};

export const retMapSignIn = () => {
  return {
    usernameLogin: 'usernameLogin',
    passwordLogin: 'passwordLogin',
  };
};
