import Link from "next/link";

function Contact() {
  return (
    <div className="p-4 mt-30 relative z-10 w-full text-center">
      <h1 className="mt-20 not-dark:text-black md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Contact Us
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg dark:text-neutral-300 max-w-lg mx-auto">
        We are here to help with any questions with our courses,programs and
        events.Reach out and let us know how can we help you !!{" "}
      </p>
      <form action="/thanks">
        <input
          type="email"
          className="bg-black border rounded-xl w-[350px] sm:w-[600px] mt-10 border-white p-2 text-white
           hover:shadow-md hover:shadow-white hover:transition duration-700"
          placeholder="Your Email Address"
        />

        <p>
          {" "}
          <textarea
            className="bg-black border rounded-xl w-[350px] sm:w-[600px] mt-5 h-[150px] text-white p-2
            hover:shadow-md hover:shadow-white hover:transition duration-700"
            placeholder="Your Message"
          />
        </p>
        <Link href={"/thanks"}>
          <button
            className="mt-4 border border-white not-dark:border-black p-2 rounded
            hover:cursor-pointer hover:bg-gray-300 hover:text-black hover:shadow-lg hover:shadow-white hover:transition duration-800 
            not-dark:hover:shadow-black"
          >
            Send Message
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Contact;
