import { retMapSignUp } from '../comp_func/Forms/_DictionaryValidationModels';
// const { } =

export const copyFormSignUp = () => {
  const { name, username, email } = retMapSignUp();

  return {
    required: {
      [name]: '',
      [username]: '',
      [email]: '',
      password: ''
    },
  };
};
