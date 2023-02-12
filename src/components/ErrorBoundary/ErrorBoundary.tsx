import * as React from "react";
import styled from "styled-components";

interface IErrorBoundaryProps {
  children: React.ReactNode | null;
  defaultMessage?: string;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

const StyledErrorBoundary = styled.div`
  padding: 10px;
`;

const StyledMessage = styled.p`
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 200%;
  font-weight: bold;
`;

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  static defaultProps = {
    defaultMessage: "",
  };

  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <StyledErrorBoundary>
          <StyledMessage>Unxpected error is occured..</StyledMessage>
        </StyledErrorBoundary>
      );
    }

    return children || null;
  }
}

export default ErrorBoundary;
