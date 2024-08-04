import React from "react";
import { Link } from "react-router-dom";
// import Contact from "./DigitalResume/Contact";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full  bottom-0 border-t-2 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="cursor-pointer">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Meghna Aggarwal
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://icons8.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Icons
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div> */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Reach The Designer
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="mailto:designwithmeghna@gmail.com"
                    className="hover:underline"
                  >
                    E-Mail
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/meghna-836642128/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.behance.net/meghnaaggarwal"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Behance
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* <div className="sm:flex sm:items-center sm:justify-between">
          <Contact />
        </div> */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            No Rights Reserved, Enjoy!
          </span>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Credits :{" "}
            <a
              href="https://icons8.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Icons
            </a>
            ,
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Tailwind CSS
            </a>
            ,
            <a
              href="https://www.linkedin.com/in/developwithlalit/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              ❤️
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
