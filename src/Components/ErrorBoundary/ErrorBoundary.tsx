import React from 'react';

// Styles
import './styles.scss';

type WarningProps = {
  children: React.ReactNode;
};

type WarningState = {
  isError: boolean;
};

export default class Warning extends React.Component<
  WarningProps,
  WarningState
> {
  state: WarningState = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? (
      <div className="error-boundary">
        <span className="error-boundary__text">
          Sorry, something went wrong.
        </span>
      </div>
    ) : (
      children
    );
  }
}
