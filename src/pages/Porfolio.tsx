import { useState } from "react";

import "../styles/portfolio.css";
import weatherApp from "../assets/portfolio/weather.png";
import findMyMovie from "../assets/portfolio/findmymovie.png";
import findMyMovieMobile from "../assets/portfolio/findmymovieMobile.png";
import gymApp from "../assets/portfolio/gym.png";
import musicology from "../assets/portfolio/musicology.png";
import filmLand from "../assets/portfolio/filmLand2.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: filmLand,
      title: "Filmland",
      description:
        "In this project i tried to recreate the UI of the filmland spirits website to improve my skills in React and CSS. ",
      link: "https://filmland.jplaranjeiro.dev",
    },
    {
      id: 2,
      image: findMyMovieMobile,
      title: "FindMyMovie Mobile",
      description:
        "A movie search mobile app built with React Native using the TheMovieDB API. This app allows you to search for movies and view their details, including cast information. You can also explore actor profiles, which include their biographies and filmographies.",
      link: "https://github.com/jpedro058/FindMyMovie-Mobile",
    },
    {
      id: 3,
      image: findMyMovie,
      title: "Find My Movie",
      description:
        "A movie search app using the OMDB API and made with React. In this website you can search for a movie and see a lot of the details about it. Unfortunately we can't see the movie it self but who knows... maybe in the future.",
      link: "https://jpedro058.github.io/FindMyMovie/",
    },
    {
      id: 4,
      image: weatherApp,
      title: "Weather App",
      description:
        "A weather app using the OpenWeather API and made with React. Because now the one call API is paid i can't show the forecast for the next 7 days as i had planned to do. But you can still see the current weather and a lot of other informations about the city you search for.",
      link: "https://jpedro058.github.io/Weather-App/",
    },

    {
      id: 5,
      image: gymApp,
      title: "Gym App",
      description:
        "A gym app made with React. In this website you can see an exemple of a gym website, where you can find motivation to start working out, see some types trainings and some other things.",
      link: "https://gym-jpedro058.vercel.app",
    },
    {
      id: 6,
      image: musicology,
      title: "Musicology",
      description:
        "A music app made with React. In this website you can see an exemple of a music website, where you have some info about the prices, some statistics and a dance tour.",
      link: "https://musicology-tau.vercel.app",
    },
  ];

  const [isFlipped, setIsFlipped] = useState<{ [key: number]: boolean }>({});

  const handleClick = (itemId: number): void => {
    setIsFlipped((prevState: { [key: number]: boolean }) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div id="Portfolio" className="flex flex-col gap-8 pt-12">
      <h1 className="text-center text-5xl font-bold">Portfolio</h1>
      <Splide
        options={{
          scrollbar: false,
          type: "loop",
          gap: "1rem",
          perPage: 3,
          breakpoints: {
            820: {
              perPage: 1,
            },
          },
        }}
        className="pb-4"
      >
        {portfolioItems.map((item) => (
          <SplideSlide key={item.id} className="flex justify-around py-8">
            <div
              className={`relative w-[25rem] min-h-[30rem] rounded-xl overflow-hidden bg-[#a1a1a100] portfolio-item ${
                isFlipped[item.id] ? "flipped" : ""
              }`}
            >
              <div
                className="portfolio-item-front 
                absolute
                w-full
                h-full
                bg-[#a1a1a100]
                top-0
                left-0
                rounded-[10px]
                transition-all
                ease-out
                duration-600
                z-[200]
                rotate-y-0
                "
              >
                <div className="portfolio-item-image">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                      min-w-full
                      h-[28rem]
                      object-fill
                      transition-all
                      ease-out
                      duration-300
                    "
                    />
                  </a>
                </div>
                <div
                  className="portfolio-item-bottom
                  flex flex-col items-center
                  bg-[#494949]
                  text-slate-200
                  rounded-b-[10px]
                  absolute
                  bottom-0
                  left-0
                  w-full
                "
                >
                  <h3 className="text-center text-2xl font-bold py-2">
                    {item.title}
                  </h3>
                  <button
                    className="portfolio-item-open-btn
                      bg-[#A13333] text-slate-200 text-xl font-bold px-4 py-2 rounded-md my-2 cursor-pointer transition-all ease-out duration-300
                      hover:shadow-[0px_0px_15px_0px_#A13333]
                    "
                    onClick={() => handleClick(item.id)}
                  >
                    Info
                  </button>
                </div>
              </div>
              <div
                className="portfolio-item-back
               absolute
              w-full
              h-full
              bg-[#a1a1a100]
              top-0
              left-0
              rounded-[12px]
              transition-all
              ease-out
              duration-600
              z-[100]
              "
              >
                <div className="portfolio-item-inner">
                  <div
                    className="portfolio-item-top
                    flex flex-col items-center justify-center p-2
                  "
                  >
                    <h3 className="text-center text-3xl font-bold pt-4 text-[#13323]">
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className="portfolio-item-content
                    flex flex-col justify-between p-4 min-h-[22rem] mt-2 leading-8 
                    text-gray-400
                  "
                  >
                    <p>{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A13333] text-xl font-bold w-fit mx-auto brightness-125 hover:brightness-150 hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                  <div
                    className="
                    absolute
                    bottom-0
                    right-[40%]
                    bg-[#A13333] text-slate-200 text-xl font-bold px-4 py-2 rounded-md my-2 cursor-pointer hover:shadow-[0px_0px_15px_0px_#A13333]
                    transition-all
                    ease-out
                    duration-300
                    "
                    onClick={() => handleClick(item.id)}
                  >
                    Back
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
