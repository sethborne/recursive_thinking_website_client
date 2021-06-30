import React from 'react';
import ReactLoading from 'react-loading';

// has two props:
// content
// loadConfig

const StatusRL = ({ content, loadConfig }) => {
  const { title, classNameTxt } = content;
  const { articleClass, reactLoadingStyle } = loadConfig;
  return (
    <article className={articleClass}>
      <div className={classNameTxt}>
        <figure className="fc--disp-flex fc--jCont-ce fc--aItem-ce">
          <ReactLoading {...reactLoadingStyle} />
        </figure>
        {title && <h6 className="fs-16 fw-300 ls-14 fc-Grey424041 mt-20">{content.title}</h6>}
      </div>
    </article>
  );
};

export default StatusRL;
