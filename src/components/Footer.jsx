import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 text-center border-t border-slate-900">
            <div className="container">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Muhammed Shimaz AK. All rights reserved.
                </p>
                <p className="text-slate-600 text-xs mt-2">
                    Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
