import { FC } from "react";
import contactBg from "../assets/images/contactus.png"; // Import background image

const ContactUs: FC = () => {
  return (
    <div id="contact"
      className="relative bg-lightblue font-poppins h-[50rem] flex items-center justify-center"
      style={{
        backgroundImage: `url(${contactBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-sm z-10 2xl:max-w-4xl">
        <h1 className="text-2xl font-bold text-bluedark mb-6 text-center 2xl:text-4xl">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bluedark"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bluedark"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bluedark"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-bluedark text-white font-semibold rounded-lg shadow hover:bg-bluedark-dark focus:outline-none focus:ring-2 focus:ring-bluedark"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
