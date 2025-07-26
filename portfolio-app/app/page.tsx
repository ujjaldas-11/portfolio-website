import { Button } from "@/components/ui/button";


export default function Home() {


  return (
    <div>

    <div className="lg:flex lg:justify-evenly lg:items-center h-[100vh] md:flex-row md:justify-evenly md:items-center sm:flex-col sm:items-center lg:-mt-10 mt-20">
      <div className="p-4">
        <h1 className="text-4xl font-bold lg:text-left text-center">Hi, i'm Ujjal Das</h1>
        <p className="text-2xl text-gray-600 mt-6 mb-8 lg:text-left text-center">I'm a web developer foused on<br /> building exceptional digital experiences.</p>
        <div className="lg:text-left text-center">
        <Button>Resume</Button>
        </div>
      </div>          
      <div className="grid place-items-center lg:mt-2 mt-20">
        <img className="h-[20rem] w-[20rem]" src="https://file.aiquickdraw.com/imgcompressed/img/compressed_8b7d18f6bddac16dbbf7682dfc1010c8.webp" alt="coder" />
      </div>
    </div>
    </div>
  );
}
