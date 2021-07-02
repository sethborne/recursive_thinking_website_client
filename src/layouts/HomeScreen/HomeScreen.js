import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomeScreen.css';
// redux
import { connect } from 'react-redux';
import { homeScreenQuotesGetAll } from '../../actions';
// Components
import StatusRL from '../../comp_func/defaults/StatusRL/StatusRL';
import Header from '../../comp_func/Header/Header';
import Footer from '../../comp_func/Footer/Footer';
import TileContainer from '../../comp_func/common/TileContainer/TileContainer';
import Carousel from '../../comp_func/common/Carousel/Carousel';
import Modal from '../../comp_func/common/Modal/Modal';
import DefaultMessage from '../../comp_func/defaults/DefaultMessage/DefaultMessage';
// Forms
import { SignUpFormModal, SignInFormModal } from '../../comp_func/Forms/Form_Auth';
// Copy
import { COPY_HOMESCREEN } from '../../copy/copy';
import { COPY_DEF_HOMESCREEN } from '../../copy/copy_default';
import {
  retConfigStatType,
  SIZE_RL_MED,
  ANI_RL_LOAD,
  RL_COLOR_LTGREY,
  RL_COLOR_WHITE,
  CLASSNAME_CARD,
} from '../../standards/ReactLoadingStatus/statusTypes';
// CSS

// Temp
import { ControlPanel } from '../../comp_func/common/Temp/ControlPanel';

class HomeScreen extends Component {
  state = {
    showModalSignUp: false,
    showModalSignIn: false,
    showModalVerifyAccount: false,
    showModalResendVerifyAccount: false,
    showModalChangePassword: false,
    showModalForgotPassword: false,
    showModalForgotPasswordSubmit: false,
    showModalRecoverAccount: false,
    showModalControlPanel: false,
  };
  componentDidMount() {
    this.props.homeScreenQuotesGetAll();
  }
  handleShowModalSignUp = () => {
    this.setState({ showModalSignUp: !this.state.showModalSignUp });
  };
  handleShowModalVerifyAccount = () => {
    this.setState({ showModalVerifyAccount: !this.state.showModalVerifyAccount });
  };
  handleShowModalSignIn = () => {
    this.setState({ showModalSignIn: !this.state.showModalSignIn });
  };
  handleShowModalResendVerifyAccount = () => {
    this.setState({ showModalResendVerifyAccount: !this.state.showModalResendVerifyAccount });
  };
  handleShowModalChangePassword = () => {
    this.setState({ showModalChangePassword: !this.state.showModalChangePassword });
  };
  handleShowModalForgotPassword = () => {
    this.setState({ showModalForgotPassword: !this.state.showModalForgotPassword });
  };
  handleShowModalForgotPasswordSubmit = () => {
    this.setState({ showModalForgotPasswordSubmit: !this.state.showModalForgotPasswordSubmit });
  };
  handleShowModalControlPanel = () => {
    this.setState({ showModalControlPanel: !this.state.showModalControlPanel });
  };
  render() {
    let quoteArr = this.props.allHSQArr.filter((quoteObj) => quoteObj['isInQuotes'] === true);
    let quoteCarouselArr = this.props.allHSQArr.filter((hsObj) => hsObj.isInCarousel);
    const { site, join, about } = COPY_HOMESCREEN;
    let { isGettingHSGetAll, isEMGettingHSGetAll, eMGettingHSGetAll } = this.props;
    // isGettingHSGetAll = true;
    // quoteArr = [];
    // quoteCarouselArr = [];
    return (
      <main>
        <Header
          type="withLogin"
          onChangeModalStateSignUpCB={this.handleShowModalSignUp}
          onChangeModalStateSignInCB={this.handleShowModalSignIn}
          onChangeModalStateControlPanelCB={this.handleShowModalControlPanel}
        />
        <section className="fc-row fc-col">
          <div className="fi-cell">
            <div className="banner-image ta-cent">
              <h1 className="fs-66 ls-48 fc-White">{site.title}</h1>
            </div>
          </div>
        </section>
        <section className="fc-row fc-col pd-TB15LR1">
          <div className="fi-cell width-100P ta-cent">
            <h6 className="fs-22 fw-300 ls-14">{join.subtitle}</h6>
            <h2 className="fs-48 fw-300 ls-28 mt-10">{join.title}</h2>
            <nav>
              <button
                onClick={this.handleShowModalSignUp}
                type="button"
                className="btn btn-fill-green-00b371 pd-TB1p5 pd-LR10 fs-22 fw-500 mt-35"
              >
                {join.signUp}
              </button>
            </nav>
          </div>
        </section>
        <section className="fc-row fc-col about-rt">
          <div className="fi-cell width-100P ta-cent">
            <h2 className="fs-48 fw-300 ls-28">{about.title}</h2>
            <p className="fs-22 fw-300 mt-35 ls-14 mch">
              {about.pcontent}
              <span className="fs-22 fw-600 ls-14">{about.scontent}</span>
              {about.econtent}
            </p>
          </div>
        </section>
        <section className="fc-row fc-col pd-TB15LR1 quote-rt">
          <div className="fi-cell width-100P">
            {/* loading */}
            {isGettingHSGetAll === true && (
              <StatusRL
                content={COPY_DEF_HOMESCREEN.load.getAll}
                loadConfig={retConfigStatType(
                  CLASSNAME_CARD.cardStatus,
                  ANI_RL_LOAD,
                  SIZE_RL_MED,
                  RL_COLOR_LTGREY
                )}
              />
            )}
            {/* default */}
            {isGettingHSGetAll === false && !quoteArr.length && (
              <DefaultMessage content={COPY_DEF_HOMESCREEN.noneFound} />
            )}
            {/* show */}
            {isGettingHSGetAll === false && quoteArr.length && (
              <TileContainer config={{ perRow: 3 }} content={quoteArr} />
            )}
            {/* error */}
            {isEMGettingHSGetAll === true && <div>ERROR</div>})
          </div>
        </section>
        <section className="fc-row fc-col pd-TB15LR1 carousel-rt" style={{ marginBottom: '54px' }}>
          <div className="fi-cell width-100P">
            {/* loading */}
            {isGettingHSGetAll === true && (
              <StatusRL
                content={COPY_DEF_HOMESCREEN.load.getAll}
                loadConfig={retConfigStatType(
                  CLASSNAME_CARD.cardStatus,
                  ANI_RL_LOAD,
                  SIZE_RL_MED,
                  RL_COLOR_WHITE
                )}
              />
            )}
            {/* default */}
            {isGettingHSGetAll === false && !quoteCarouselArr.length && (
              <DefaultMessage content={COPY_DEF_HOMESCREEN.noneFound} />
            )}
            {/* show */}
            {isGettingHSGetAll === false && quoteCarouselArr.length && (
              <Carousel contentArr={quoteCarouselArr} />
            )}
            {/* error */}
            {isEMGettingHSGetAll === true && <div>ERROR</div>}
          </div>
        </section>
        <Footer />
        {/* Modals */}
        {this.state.showModalControlPanel && (
          <Modal
            modalState={this.state.showModalControlPanel}
            onChangeModalStateCB={this.handleShowModalControlPanel}
            content={<ControlPanel />}
          />
        )}
        {this.state.showModalSignUp && (
          <Modal
            modalState={this.state.showModalSignUp}
            onChangeModalStateCB={this.handleShowModalSignUp}
            content={
              <SignUpFormModal
                closePrevModal={this.handleShowModalSignUp}
                openNextModal={this.handleShowModalVerifyAccount}
              />
            }
          />
        )}
        {this.state.showModalVerifyAccount && (
          <Modal
            modalState={this.state.showModalVerifyAccount}
            onChangeModalStateCB={this.handleShowModalVerifyAccount}
            content={'VERIFY_ACCOUNT'}
          />
        )}
        {this.state.showModalResendVerifyAccount && (
          <Modal
            modalState={this.state.showModalResendVerifyAccount}
            onChangeModalStateCB={this.handleShowModalResendVerifyAccount}
            content={'RESEND_VERIFY_ACCOUNT'}
          />
        )}
        {this.state.showModalSignIn && (
          <Modal
            modalState={this.state.showModalSignIn}
            onChangeModalStateCB={this.handleShowModalSignIn}
            content={
              <SignInFormModal
              // closePrevModal={this.handleShowModalSignIn}
              // openNextModal={this.handleShowModalForgotPassword}
              />
            }
          />
        )}
        {this.state.showModalForgotPassword && (
          <Modal
            modalState={this.state.showModalForgotPassword}
            onChangeModalStateCB={this.handleShowModalForgotPassword}
            content={'FORGOT_PASSWORD'}
          />
        )}
        {this.state.showModalForgotPasswordSubmit && (
          <Modal
            modalState={this.state.showModalForgotPasswordSubmit}
            onChangeModalStateCB={this.handleShowModalForgotPasswordSubmit}
            content={'FORGOT_PASSWORD_SUBMIT'}
          />
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allHSQArr: Object.values(state.homescreen.allHSQObj),
    isGettingHSGetAll: state.homescreen.isGettingHSGetAll,
    isEMGettingHSGetAll: state.homescreen.isEMGettingHSGetAll,
    eMGettingHSGetAll: state.homescreen.eMGettingHSGetAll,
  };
};

HomeScreen.propTypes = {
  allHSQArr: PropTypes.array.isRequired,
  isGettingHSGetAll: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.bool]),
  isEMGettingHSGetAll: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.bool]),
  eMGettingHSGetAll: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
};

export default connect(mapStateToProps, { homeScreenQuotesGetAll })(HomeScreen);
