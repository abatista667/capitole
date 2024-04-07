import React from "react";

interface State {
    hasError: boolean
}

class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      console.log(error, info.componentStack);
    }
  
    render() {
      if (this.state.hasError) {
        return <p>Something when wrong! try refreshing the page</p>
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary