//https: medium.com/@dirk.tongay/form-validation-in-react-can-be-great-ff118cd59672

import React, { useState } from 'react';
import './Form.css';
import './Form_Auth.css';
import { Form, Field } from 'react-final-form';
import { retValidateFuncSignUp, retValidateFuncSignIn } from './_Validation';
import { retMapSignUp, retMapSignIn } from './_DictionaryValidationModels';

const renderField = ({ input, label, name, placeholder, meta: { touched, error } }) => {
  const classNameTxt = `fc-field-cont ${touched && error ? 'input-invalid' : ''}`;
  return (
    <div className="fc-field-wrap">
      <div className={classNameTxt}>
        <label htmlFor={name}>{label}</label>
        <input {...input} placeholder={placeholder} />
      </div>
      <div className="fc-field-cont-error">
        <div className="error">
          <div className="fs-16">{touched && error ? error : ''}</div>
        </div>
      </div>
    </div>
  );
};

const renderErrorIfExists = (error) => {
  if (error) {
    return (
      <div className="mt-20">
        <h6 className="fs-16 fw-300 fc-Error">{error}</h6>
      </div>
    );
  }
};

export const SignUpFormModal = (props) => {
  const [wasSignUpSuccessful, setSignUpSuccessful] = useState(false);
  const [wasFormCollapsed, setFormCollapse] = useState(false);

  const openModalVerifyAccount = () => {
    props.closePrevModal();
    props.openNextModal();
  };

  return (
    <Form
      initialValues={{}}
      onSubmit={(formValues) => {
        console.log('In onSubmit');
        const params = {
          username: formValues.username,
          password: formValues.password,
          email: formValues.email,
          name: formValues.name,
        };
        // return signUp(params)
        //   .then((data) => {
        //     console.log('@signUp data: ', data);
        //     // if successful, returns:
        //     //   user: CognitoUser,
        //     //   userConfirmed: false,
        //     //   userSub: "4a3dabd5-9f14-4bdb-8810-d4548d45879a"
        //     // }
        //     if (data.user) {
        //       setSignUpSuccessful((wasSignUpSuccessful) => !wasSignUpSuccessful);
        //       setFormCollapse((wasFormCollapsed) => !wasFormCollapsed);
        //     }
        //   })
        //   .catch((err) => console.log(err));
      }}
      validate={(formValues) => {
        // do validation here, and return errors object
        const { name: n, username: un, email: em } = retMapSignUp();
        const errors = {};
        const { name, username, email, password, confirmPassword } = retValidateFuncSignUp();
        name(errors, formValues, n);
        username(errors, formValues, un);
        email(errors, formValues, em);
        // password and confirmPassword
        password(errors, formValues, 'password');
        confirmPassword(errors, formValues, 'confirmPassword');
        // if the password and confirm password do not match
        if (formValues.password !== formValues.confirmPassword) {
          errors.confirmPassword = `Password and Confirm Password must Match`;
        }
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <div className="fc--disp-flex fc--fdir-col fc--aItem-ce">
          {wasSignUpSuccessful === false && wasFormCollapsed === false && (
            <>
              <h2 className="fs-33 fw-300 ls-24 fc-Black ta-cent">Sign Up</h2>
              <hr className="modal-hr mt-10" />
              <form onSubmit={handleSubmit}>
                <fieldset className="fc-fieldset">
                  <Field
                    label="Name:"
                    name="name"
                    type="text"
                    placeholder="Please Enter Your First and Last Name"
                    component={renderField}
                  />
                  <Field
                    label="Username:"
                    name="username"
                    type="text"
                    placeholder="Username"
                    component={renderField}
                  />
                  {/* {error && { error }} */}
                  <Field
                    label="Email:"
                    name="email"
                    type="text"
                    placeholder="Email"
                    component={renderField}
                  />
                  <Field
                    label="Password:"
                    name="password"
                    type="password"
                    placeholder="Password"
                    component={renderField}
                  />
                  <Field
                    label="Confirm Password:"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    component={renderField}
                  />
                </fieldset>
                <div className="ta-cent mt-20">
                  <button
                    className="btn btn-otln-green-00b371 pd-TB1LR3 fs-14 fw-300 ls-10 fc-GreenRT"
                    onClick={openModalVerifyAccount}
                  >
                    Need to Confirm Your Account? Click Here!
                  </button>
                </div>
                <hr className="modal-hr mt-40" />
                <div className="ta-cent">
                  <button
                    type="submit"
                    className="btn btn-fill-green-00b371 pd-TB2LR8 fs-20 fw-500 ls-12 mt-30"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          )}
          {wasSignUpSuccessful && (
            <>
              <div className="ta-cent">
                <h2 className="fs-33 fw-300 ls-24 fc-Black ta-cent">Sign Up Successful</h2>
                <hr className="modal-hr mt-10" />
                <p className="fs-16 fw-300 ls-10 fc-Grey424041 mt-10 wspl">
                  An email containing a confirmation code was sent to the address specified in the
                  Sign Up Form. Once received, please click below to proceed to the Account
                  Verification page.
                </p>
                <button
                  type="submit"
                  className="btn btn-fill-green-00b371 pd-TB2LR8 fs-20 fw-500 ls-12 mt-30"
                  onClick={openModalVerifyAccount}
                >
                  Verify Your Account
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </Form>
  );
};

export const SignInFormModal = (props) => {
  const [totalLoginErrors, setTotalLoginErrors] = useState(0);
  //   // gets closePrevModal() and openNext - look at homescreen for which
  const openModalForgotPassword = () => {
    props.closePrevModal();
    props.openNextModal();
  };
  return (
    <Form
      initialValues={{}}
      onSubmit={() => {}}
      validate={(formValues) => {
        const { usernameLogin: uL, passwordLogin: pL } = retMapSignIn();
        const { usernameLogin, passwordLogin } = retValidateFuncSignIn();
        const errors = {};
        usernameLogin(errors, formValues, uL);
        passwordLogin(errors, formValues, pL);
        // async validation:
        return errors;
      }}
    >
      {({ handleSubmit, error }) => (
        <div className="fc--disp-flex fc--fdir-col fc--aItem-ce">
          <h2 className="fs-33 fw-300 ls-24 fc-Black ta-cent">Sign In</h2>
          <hr className="modal-hr mt-10" />
          <form onSubmit={handleSubmit}>
            <fieldset className="fc-fieldset">
              <Field
                label="Username:"
                name="usernameLogin"
                type="text"
                placeholder="Enter Username"
                component={renderField}
              />
              <Field
                label="Password:"
                name="passwordLogin"
                type="password"
                placeholder="Enter Password"
                component={renderField}
              />
              {renderErrorIfExists(error)}
              {/* {error && { error }} */}
            </fieldset>
            {totalLoginErrors > 3 && (
              <div className="ta-cent mt-20">
                <button
                  className="btn btn-otln-green-00b371 pd-TB1LR3 fs-14 fw-300 ls-10 fc-GreenRT"
                  onClick={openModalForgotPassword}
                >
                  Have you Forgot your Password? Click To Reset
                </button>
              </div>
            )}
            <hr className="modal-hr mt-40" />
            <div className="ta-cent">
              <button
                type="submit"
                className="btn btn-fill-green-00b371 pd-TB2LR8 fs-20 fw-500 ls-12 mt-30"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </Form>
  );
};
