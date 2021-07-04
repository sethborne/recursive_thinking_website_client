import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

import { PATH_FOR_IMG } from '../../standards/publicPaths.mjs';

// type indicates if header is for the root page or the app
// if header is for root, also has a prop onChangeModalStateSignUpCB and onChangeModalStateSignInCB

const Header = ({
  type,
  onChangeModalStateControlPanelCB,
  onChangeModalStateSignUpCB,
  onChangeModalStateSignInCB,
}) => {
  return (
    <header className="fc-row fc-col-1of2">
      <div className="fi-cell pd-TB1LR2">
        <div className="header-logo">
          <figure>
            <img src={`${PATH_FOR_IMG}/logo/recursivelogo.png`} alt="Recursive Thinking Logo" />
          </figure>
        </div>
      </div>
      {type === 'withLogin' && (
        // get callback for modal state
        <div className="fi-cell pd-TB1LR2">
          <div className="header-auth">
            <button
              type="button"
              className="btn btn-fill-green-00b371 pd-TB1LR3 fs-16 ls-12"
              onClick={onChangeModalStateControlPanelCB}
            >
              Control Panel
            </button>
            <button
              type="button"
              className="btn btn-otln-green-00b371 pd-TB1LR3 fs-16 ls-12"
              onClick={onChangeModalStateSignUpCB}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="btn btn-fill-green-00b371 pd-TB1LR3 fs-16 ls-12"
              onClick={onChangeModalStateSignInCB}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
  onChangeModalStateSignUpCB: PropTypes.oneOfType([PropTypes.oneOf([undefined]), PropTypes.func]),
  onChangeModalStateSignInCB: PropTypes.oneOfType([PropTypes.oneOf([undefined]), PropTypes.func]),
};

export default Header;
