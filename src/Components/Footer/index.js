import React from 'react'
import '../../Styles/footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className='mt-3'>&copy; {currentYear}. Made by <a style={{  color: "black"}}  href="https://portfolio911.surge.sh/">ABDUL WAHAB</a>.</p>
        </footer>
    );
};
export default Footer;