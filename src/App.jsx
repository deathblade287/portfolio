import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  // Tech,
  Works,
} from "./components";

import { socialLinks } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <footer className="flex flex-col items-center justify-center w-full h-24 text-white bg-primary">
        <p>
          Find me on{" "}
          <button
            className="text-blue-500 underline underline-offset-2"
            onClick={() => window.open("https://bio.link/aviraldhingra")}
          >
            bio.link
          </button>
        </p>
        <br />
        {/* Socials */}
        <ul className="list-none hidden sm:flex flex-row gap-5">
          {socialLinks.map((social) => (
            <li
              key={social.id}
              className={
                "hover:text-white text-[18px] font-medium cursor-pointer text-secondary"
              }
              onClick={() => window.open(social.link)}
            >
              <img src={social.icon} width="25" height="25" />
            </li>
          ))}
        </ul>
      </footer>
    </BrowserRouter>
  );
};

export default App;
