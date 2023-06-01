import React from 'react';
import FooterHead from './FooterHead';

const Footer = () => {
    return (
        <footer>
            <FooterHead></FooterHead>
            <div className='p-4 text-center bg-slate-200'>
                <p>Copyright @ 2023 - All Rights Are Reserved By Doc House </p>
            </div>
        </footer>
    );
};

export default Footer;