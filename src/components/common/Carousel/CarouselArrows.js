export const RightArrow = ({ goToNextSlide }) => {
  return (
    <div className="right-arrow" onClick={goToNextSlide}>
      <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
    </div>
  );
};

export const LeftArrow = ({ goToPrevSlide }) => {
  return (
    <div className="left-arrow" onClick={goToPrevSlide}>
      <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
    </div>
  );
};
