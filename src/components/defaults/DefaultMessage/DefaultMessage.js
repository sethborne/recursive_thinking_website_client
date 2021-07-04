import React from 'react';

const DefaultMessage = ({ ...props }) => {
  const {
    content: { title, subTitle, content },
  } = props;
  return (
    <article className="card">
      <h5 className="fw-600 ls-14 fc-Grey424041">{title}</h5>
      <hr className="mt-10" />
      <h5 className="fw-500 ls-14 fc-Grey424041 mt-30 ta-cent">{subTitle}</h5>
      <p className="fs-18 fw-300 ls-10 fc-Grey81 mt-15 ta-cent wspl" style={{ padding: '0 4rem' }}>
        {content}
      </p>
    </article>
  );
};

export default DefaultMessage;
