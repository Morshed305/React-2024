const Nav = () => {
    return (
        <div>
            <nav className="Container">
                <div className="logo ">
                    <img src="/public/img/brand_logo.png" alt="" />
                </div>
                <ul>
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>  
                </ul>
                <button>Login</button>
            </nav>
        </div>
    );
};

export default Nav;