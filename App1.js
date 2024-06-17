import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML Element (when it render)


// JSX(transpiled before it reaches the JS Engine)
// who is transpiled (PARCEL) it is used by their modules (Babel)
// Babel traspiles it to React.createElement => ReactElement.js object => HTMLElement (render)

const Title = () => (
 <h1 className="head" tabIndex="5">Namaste React Using JSX</h1>
);
// React Component (Fotor,heading,button,etc)

// React Functional Component (just javaScript Function)

 const HeadingComponent = () => (
    <div id="container"> 
        <Title/>
    
    <h1 className="heading">Namaste React Functional Component </h1>
    </div>
 );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);  

