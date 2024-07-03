import { useEffect, useState } from "react";

export default function Navbar() {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0);
      } else if (currentScrollPos > 56) {
        setTop(-120);
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <div
      style={{ top: `${top}px`, transition: "top 1s" }}
      className="min-w-full pt-12 items-center justify-center fixed z-[1000]
      hidden sm:flex
    "
    >
      <ul
        className="flex items-center justify-between w-3/4 border-2 border-[#A13333]
        border-opacity-80 px-16 py-4 rounded-full 
        shadow-[0px_0px_15px_0px_#A13333] max-w-4xl
        backdrop-blur-md"
      >
        <li className="nav-item">
          <a
            href="#"
            className="text-xl tracking-widest hover:text-[#A13333]
          transition-colors duration-300 ease-out
          "
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Services"
            className="text-xl tracking-widest hover:text-[#A13333]
          transition-colors duration-300 ease-out
          "
          >
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            className="text-xl tracking-widest hover:text-[#A13333]
          transition-colors duration-300 ease-out
          "
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            className="text-xl tracking-widest hover:text-[#A13333]
          transition-colors duration-300 ease-out
          "
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
