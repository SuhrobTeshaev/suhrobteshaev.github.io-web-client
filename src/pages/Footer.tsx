import React from "react";
import apple from '../assets/app store.png';
import google from '../assets/goofle play.png';

const Footer: React.FC = () => {
  return (
    <footer className="mt-2  px-4 max-w-xl w-full mx-auto flex flex-col items-center  ">
      <p className="text-sm text-center text-gray-500 mb-4">
        Скачайте приложение и начните <br /> бронировать с легкостью!
      </p>
      <div className="flex justify-center  space-x-2">
        <img src={google} alt="Google Play" className="h-10 w-[100px]" />
        <img src={apple} alt="App Store" className="h-10" />
      </div>
    </footer>
  );
};

export default Footer;
