import React from "react";
import "./style.css";

//notificationType
// 1. info
// 2. error
// 3. warning
// 4. success

const Notifications = (props) => {
  const { notificationType, primaryText, secondaryText } = props || {};
  return (
    <>
      <div className="container text-center">
        {notificationType === "info" && (
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3">
              <div className="new-message-box">
                <div className="new-message-box-alert">
                  <div className="info-tab tip-icon-alert" title="error">
                    <i></i>
                  </div>
                  <div className="tip-box-alert">
                    <p>
                      {primaryText}
                      <a className="btn btn-sm" href="555">
                        {secondaryText && secondaryText}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {notificationType === "error" && (
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3">
              <div className="new-message-box">
                <div className="new-message-box-danger">
                  <div className="info-tab tip-icon-danger" title="error">
                    <i></i>
                  </div>
                  <div className="tip-box-danger .fade">
                    <p>
                      {primaryText}

                      <a className="btn btn-sm" href="555">
                        {secondaryText && secondaryText}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <!-- --> */}

        {notificationType === "success" && (
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3">
              <div className="new-message-box">
                <div className="new-message-box-success">
                  <div className="info-tab tip-icon-success" title="success">
                    <i></i>
                  </div>
                  <div className="tip-box-success .in">
                    <p>
                      {primaryText}

                      <a className="btn btn-sm" href="555">
                        {secondaryText && secondaryText}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <!-- --> */}
        {notificationType === "warning" && (
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3">
              <div className="new-message-box">
                <div className="new-message-box-warning">
                  <div className="info-tab tip-icon-warning" title="error">
                    <i></i>
                  </div>
                  <div className="tip-box-warning .in .fade">
                    <p>
                      {primaryText}

                      <a className="btn btn-sm" href="555">
                        {secondaryText && secondaryText}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <!-- --> */}
        {/* <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <div className="new-message-box">
              <div className="new-message-box-info">
                <div className="info-tab tip-icon-info" title="error">
                  <i></i>
                </div>
                <div className="tip-box-info">
              
                  <p>
                    Ha ocurrido un problema por favor
                    <a className="btn btn-sm" href="555">
                      {" "}
                      intente nuevamente
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- --> */}
      </div>
    </>
  );
};

export default Notifications;
