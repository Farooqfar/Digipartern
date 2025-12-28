import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen selection:bg-[#FEDA2A] selection:text-[#162E7C]">
      <section className="w-full h-full relative">
        <Image
          src="/ban.png"
          alt="banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute w-full">
          <nav className="w-full flex justify-between items-center p-5">
            <ul>
              <li className="bg-white backdrop-blur-sm rounded-full w-20 p-1">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-15"
                />
              </li>
            </ul>
            <ul className="w-100 flex gap-10 border-white border rounded-4xl justify-center items-center p-1">
              <li className="bg-white text-black w-20 text-center p-3 rounded-4xl">
                Home
              </li>
              <li className=" text-black w-20 text-center p-3 rounded-4xl">
                Services
              </li>
              <li className=" text-black w-20 text-center p-3 rounded-4xl">
                Contact
              </li>
            </ul>
          </nav>
        </div>
        <div className="absolute left-32 bottom-0 w-80 h-70 bg-yellow-500/10 backdrop-blur-md rounded-t-full flex flex-col justify-center items-center gap-10">
          <div></div>
          <div>
            <h1 className="text-8xl text-white text-center font-medium">
              100+
            </h1>
            <p className="text-white">Successful project around the world</p>
          </div>
        </div>
        <div className="absolute bottom-0 w-14 h-100 left-4 rounded-t-full flex justify-between items-center p-5 bg-white/10 backdrop-blur-md"></div>
        <div className="absolute right-0 bottom-0 w-100 flex flex-col gap-10 justify-start items-start p-5">
          <p>
            Digipartners is a premium digital agency built to scale brands with
            strategy, design, and technology. We craft modern websites, elevate
            brand identity, and drive real business growth. Your success is our
            mission — let’s create something unforgettable together.
          </p>
          <button className="bg-[#FDE036] w-32 p-4 rounded-4xl text-[#172A6F] cursor-pointer transition-all duration-200 hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
