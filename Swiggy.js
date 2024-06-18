import React from "react"; 
import ReactDOM from "react-dom/client";
/**
 * Header
 *  - Logo 
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Card
 * Footer
 *  - Copy Right
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="Header">
            <div className="Logo">
                <img src="C:\Users\ASUS\Downloads\THE (1).jpg" alt="The Pizza Pie Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Offers %</li>
                    <li>About</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

// app component means A Function which returns some piece of JSX
const AppLayout = () => {
return <div className="app">
    <Header/>
</div>
}

// Rendering Part 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)