import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { FC, ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-1 flex py-8 justify-center'>
                {children}
            </div >
            <Footer />
        </div>
    );
};

export default Layout;