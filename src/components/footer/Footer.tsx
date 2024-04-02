import { RiNewsFill, RiLinkedinFill, RiGithubFill } from "@remixicon/react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <Link to='/'>
                    <RiNewsFill size={60} />
                </Link>
                <p>Created by: <br /> Giampiero Fermini - 2024</p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://linkedin.com/in/fc-giampiero" target="_blank" rel="noopener noreferrer">
                        <RiLinkedinFill />
                    </a>
                    <a href="https://github.com/GiampieroFC" target="_blank" rel="noopener noreferrer">
                        <RiGithubFill />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;