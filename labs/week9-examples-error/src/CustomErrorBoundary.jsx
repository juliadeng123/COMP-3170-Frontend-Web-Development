import React from "react";

class CustomErrorBoundary extends React.Component {

    constructor(props) {
        super(props);

        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // will be called when an error is thrown
        // from the wrapped component and descendants
        return {hasError: true };
    }

    render () {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>    
        }

        return this.props.children;
    }
}

