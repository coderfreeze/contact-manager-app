import * as React from 'react';
import {logo1, logo2, logo3, logo4, logo5, logo6} from '../../assets/index.ts';


interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <footer className='bg-gradient-to-r from-gray-200 to-gray-300 text-black text-center py-5 mt-auto'>
      <div className="container mx-auto px-4">

        <span className='font-bold block mb-2'>
            Contact Manager App | Vijay Sinha 
        </span>

        <div className='flex justify-center items-center space-x-4'>
          <img src={logo1} alt="Logo 1" className="h-6"/>
          <img src={logo2} alt="Logo 2" className="h-6"/>
          <img src={logo3} alt="Logo 2" className="h-6"/>
          <img src={logo4} alt="Logo 2" className="h-6"/>
          <img src={logo5} alt="Logo 2" className="h-6"/>
          <img src={logo6} alt="Logo 2" className="h-6"/>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

