import React, { useRef } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail, MdHome, MdWork } from 'react-icons/md';
import { RiFileInfoFill } from 'react-icons/ri';

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const handleNotification = (message, ref) => {
    const rect = ref.current.getBoundingClientRect();
    toast(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
      transition: Bounce,
      closeOnClick: false,
      style: {
        position: 'fixed',
        top: rect.bottom + window.scrollY + 10, 
        left: rect.left + window.scrollX,
        transform: 'translateY(0)',
        width: '500px', 
        textAlign: 'center', 
        boxShadow: '2px 2px 20px 2px rgba(142,22,11,0.1)'
      },
    });
  };

  return (
    <>
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[#8e160b] text-2xl font-bold"><a href='#'>Some logo</a></div>
          <div className="flex mx-auto justify-between items-center space-x-16">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default behavior
                handleNotification('This is Home', homeRef);
              }}
              ref={homeRef}
              className="text-[#8e160b] hover:text-black"
            >
              <MdHome size={27} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNotification('This is About', aboutRef);
              }}
              ref={aboutRef}
              className="text-[#8e160b] hover:text-black"
            >
              <RiFileInfoFill size={24} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNotification('This is Services', servicesRef);
              }}
              ref={servicesRef}
              className="text-[#8e160b] hover:text-black "
            >
              <MdWork size={24} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNotification('This is Contact', contactRef);
              }}
              ref={contactRef}
              className="text-[#8e160b] hover:text-black"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
