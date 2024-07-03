import Navbar from "./components/Navbar";
import "./styles/index.css";
import { ReactTyped } from "react-typed";
import homeImg from "./assets/home/homeImg.svg";
import github from "./assets/home/github.svg";
import linkedin from "./assets/home/linkedin.svg";
import instagram from "./assets/home/instagram.svg";
import cv from "./assets/home/cv.pdf";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Portfolio } from "./pages/Porfolio";
import { NavMobile } from "./components/NavMobile";

function App() {
  const whatIdo = ["Web Developer", "Mobile Developer", "Software Developer"];
  const socials = [
    {
      name: "github",
      link: "https://github.com/jpedro058",
      icon: github,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/joão-laranjeiro/",
      icon: linkedin,
    },

    {
      name: "instagram",
      link: "https://www.instagram.com/joao.pedro058/",
      icon: instagram,
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <NavMobile />

      <div className="sm:h-screen">
        <div className="h-[60vh] sm:h-[85vh] min-w-full flex justify-between px-[10%]">
          <div className="flex items-start justify-end flex-col h-full min-w-[75%]">
            <p className="text-[3rem] sm:text-[5rem] text-slate-200">
              Hello I'm
            </p>
            <p className="text-[3rem] sm:text-[5rem] text-[#A13333] font-bold ">
              <ReactTyped
                strings={whatIdo}
                typeSpeed={100}
                loop
                backSpeed={20}
              />
            </p>
            <p className="pt-4 text-slate-200">
              My name is João! I,m a web developer with over 1 years of
              experience.
            </p>

            <div className=" mt-8 flex sm:flex-row flex-col gap-8 cursor-pointer">
              <div className="flex gap-8">
                {socials.map((social) => (
                  <div
                    key={social.name}
                    className="shadow-[0px_0px_15px_0px_#A13333] rounded-full p-2
                hover:shadow-[0px_0px_15px_0px_#461111] hover:scale-110 transition-all duration-300 ease-out
                "
                  >
                    <a href={social.link}>
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="h-[2rem]"
                      />
                    </a>
                  </div>
                ))}
              </div>

              <a
                className=" text-slate-200 bg-[#A13333] flex items-center justify-center rounded-xl px-4 py-2 shadow-[0px_0px_15px_0px_#A13333] hover:shadow-[0px_0px_15px_0px_#461111] hover:bg-transparent hover:border-2 hover:text-[#A13333] hover:font-medium hover:filter hover:brightness-125 border-[#A13333] transition-shadow duration-300 ease-out"
                href={cv}
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="md:flex md:items-end md:visible hidden">
            <img src={homeImg} alt="home" className="h-[30rem] " />
          </div>
        </div>
      </div>

      <Services />

      <Portfolio />

      <Contact />
    </div>
  );
}

export default App;
