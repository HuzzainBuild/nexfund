import Image from "next/image";

const Footer = () => {
  return (
    <section className="relative w-full px-4 md:px-8 bg-black text-white border-t  border-t-gray-600  overflow-hidden pb-6">
      <div className="mt-10 md:mt-15 grid md:grid-cols-2 gap-4 md:gap-8 w-full max-w-[70rem] mx-auto">
        <div className="flex flex-col gap-8 md:gap-10 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-3 items-center">
              <Image
                src={"/logo-primary.svg"}
                alt="Logo"
                width={35}
                height={35}
              />
              <h1 className="font-bold text-2xl text-white">
                NexFund <span className="font-medium">Labs</span>
              </h1>
            </div>

            <p className="font-semibold max-w-md">
              Helping Web3 startups scale with capital, OTC access, and listing
              support
            </p>
          </div>

          <div className="flex items-center w-full md:max-w-[300px] bg-[#1a1a1a] border border-gray-600 rounded-md">
            <div className="p-1 flex items-center justify-center rounded-tl-md rounded-bl-md w-full">
              <input
                type="text"
                placeholder="example@gmail.com"
                className="py-3 px-2 text-white rounded-bl-md rounded-tl-md outline-0 flex-3/4 md:flex-2/3 font-semibold text-sm"
              />
              <button className="bg-gray-300 text-black py-3 w-full flex-1/4 md:flex-1/3 cursor-pointer rounded-md font-semibold hover:bg-white transition-all duration-700">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-10 mt-10 md:mt-0">
          <div>
            <h3 className="text-lg font-semibold text-white">Links</h3>
            <ul className="mt-4 text-gray-400 flex flex-col gap-1 font-semibold ">
              <li className="hover:text-white cursor-pointer">
                <a href="#hero">Home</a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a href="#services">Web3 Services</a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a href="#features">Features</a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Social Media</h3>
            <ul className="mt-4 text-gray-400 flex flex-col gap-1 font-semibold">
              <li className="hover:text-white cursor-pointer">Telegram</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">Twitter X</li>
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Discord</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="gradient-04"></div>
    </section>
  );
};

export default Footer;
