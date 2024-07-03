import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8c197g",
        "template_idn7619",
        form.current as unknown as HTMLFormElement,
        "MttNbSc5RQqUjauj5"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);

    setTimeout(() => {
      setActive(false);
    }, 3000);
  };

  return (
    <div
      id="Contact"
      className="h-screen  pt-[12rem] flex flex-col items-center gap-24"
    >
      <h1 className="text-center text-5xl font-bold">Contact Me</h1>

      <div className="min-w-[70%] flex items-center justify-center gap-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-center gap-4 min-w-full"
        >
          <div className="flex flex-1 gap-4 min-w-full flex-col md:flex-row">
            <input
              type="text"
              required
              placeholder="Name"
              name="user_name"
              className="p-4 border-2 border-[#A13333] rounded-md bg-transparent w-full md:w-[50%] outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
              className="p-4 border-2 border-[#A13333] rounded-md bg-transparent w-full md:w-[50%] outline-none"
            />
          </div>
          <input
            type="subject"
            required
            placeholder="Subject"
            name="subject"
            className="p-4 border-2 border-[#A13333] rounded-md bg-transparent min-w-full outline-none"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="p-4 border-2 h-40 border-[#A13333] rounded-md bg-transparent  min-w-full outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            onClick={handleClick}
            className={`butto ${
              isActive ? "active" : ""
            } text-white bg-[#A13333] filter brightness-150 p-4  rounded-md w-[15rem] hover:shadow-[0px_0px_15px_0px_#461111] hover:bg-transparent hover:border-2 hover:text-[#A13333] hover:font-bold hover:filter hover:brightness-125 border-[#A13333] transition-shadow duration-300 ease-out`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
