import React from 'react';

interface ErrorAlertProps {
  errors: any,
  dispatch: Function,
  resetError: Function
};

const ErrorAlert: React.FC<ErrorAlertProps> = ({ errors, dispatch, resetError }) => {
  return (
    <>
      {errors?.length > 0
        ? errors?.map((e: any, idx: number) => (<div
          key={idx}
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
          style={{ marginBottom: 0, marginTop: 16, textAlign: 'center', borderRadius: 12 }}>
          <p style={{ marginBottom: 0 }}>{e}</p>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => dispatch(resetError())}></button>
        </div>))
        : ''
      }
    </>
  );
};

export default ErrorAlert;
