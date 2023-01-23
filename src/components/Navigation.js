import {Routes, Route, Link} from 'react-router-dom'


// Create a functional component: 
function Navigation() {
    // Return a div containing the two logos, and the LoggedIn component - send props to that component:
    return (
        <div >
            <nav>
                <div id ="navigation">

                    <Link className="myLink" to = "/">Home</Link>
                    <Link className="myLink" to = "/shopping">Shop</Link>
                    <Link className="myLink" to = "/profile">Profile</Link>
                    <Link className="myLink" to = "/legal">Legal</Link>
                    <Link className="myLink" to = "/calc">Calculator</Link>
                </div>
            </nav>

        </div>
    )
}

export default Navigation;