import React from 'react';
import './Footer.css';
import IconFontAwesome from '../common/IconFontAwesome/IconFontAwesome';

const Footer = () => {
  return (
    <footer className="fc-row fc-col-1of2">
      <div className="fi-cell pd-TB1LR2">
        <div className="copyright">
          <p className="fs-14 fw-500">&#169; Recursive Thinking, All Rights Reserved</p>
        </div>
      </div>
      <div className="fi-cell pd-TB1LR2">
        <div className="media-icons fs-24">
          <figure>
            <a
              href="https://github.com/RecursiveThinking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFontAwesome iconForClassName={'fa fa-github'} />
            </a>
          </figure>
          <figure>
            <a
              href="https://www.linkedin.com/company/18067985/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFontAwesome iconForClassName={'fa fa-linkedin-square'} />
            </a>
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
