import React, { ErrorInfo } from 'react';

// Styles
import './styles.scss';

type WarningProps = {
  children: React.ReactNode;
};

type WarningState = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<
  WarningProps,
  WarningState
> {
  state: WarningState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}
