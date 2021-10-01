import { Component } from "react";

/*The componentDidCatch lifecycle methodcan be added to any class-based component, and whenever you do add it to a class-bassed component,
it makes that class-based component an error boundary */
class ErrorBoundary extends Component {

    constructor(){
        super();
        this.state = { hasError: false };
    }

    componentDidCatch(error) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;