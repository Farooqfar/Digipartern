import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen">
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
              <li className="bg-white/10 backdrop-blur-sm rounded-full w-20 p-1">
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
        <div className="absolute left-32 bottom-0 w-80 h-70 bg-white/10 backdrop-blur-md rounded-t-full flex flex-col justify-center items-center gap-10">
          <div></div>
          <div>
            <h1 className="text-8xl text-white font-medium">100+</h1>
            <p className="text-white">Successful project around the world</p>
          </div>
        </div>
        <div className="absolute bottom-0 w-14 h-100 left-4 rounded-t-full flex justify-between items-center p-5 bg-white/10 backdrop-blur-md"></div>
      </section>
    </main>
  );
}
