import * as React from 'react';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <header className="bg-gradient-to-r from-gray-200 to-gray-300 text-black shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">Contact Manager</span>
                </div>
                
                <h1 className="text-2xl font-semibold">Dashboard</h1>
            </div>
        </header>
    );
}

export default Header;

