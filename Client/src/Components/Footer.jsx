import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="grid  lg:grid-cols-2 text-center text-white">
      <div className="col-span-3 lg:col-span-1  bg-[#1F2937]  space-y-2 py-4">
        <h3 className="text-2xl">Contact Us</h3>
        <p>123 ABS Street, Unit 21, Bangladesh</p>
        <p>+888 123 456 789</p>
        <p>Mon-Fri: 08.00-22.00</p>
        <p>Sat-Sun: 10.00-23.00</p>
      </div>
      <div className="col-span-3 lg:col-span-1 bg-[#111827] space-y-2 py-4">
        <h3 className="text-2xl">Follow US</h3>
        <p>Join us on Social Media</p>
        <div className="flex justify-center gap-4 text-xl">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter></FaXTwitter>
        </div>
      </div>
      <div className="col-span-3 bg-[#000] py-2">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
