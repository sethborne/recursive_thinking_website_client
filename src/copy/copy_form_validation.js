import { retMapSignUp } from '../components/Forms/_DictionaryValidationModels';
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
