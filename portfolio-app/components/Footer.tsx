export default function Footer(){
    return(
        <div className="lg:text-center md:text-center sm:text-center border-t">
          <div className="lg:flex justify-around items-center md:flex-row sm:flex-col mt-10">

            <h1 className="text-center text-2xl mt-10 font-bold lg:-mt-10">Welcome To portfolio Website</h1>

            <div className="grid grid-cols-2 md:place-items-center sm:place-items-center gap-10 p-4 mt-10">
               <a className="flex ml-2" href="https://github.com/ujjaldas-11">
                 <img className="h-[2rem] w-[2rem]" src="/github.svg" alt="Github" />Github
               </a>
                <a className="flex lg:ml-4 md:ml-10" href="https://www.instagram.com/coder_das/">
                 <img className="h-[2rem] w-[2rem]" src="/insta.svg" alt="Instagram" />Instagram
               </a>
               <a className="flex ml-2" href="">
                 <img className="h-[2rem] w-[2rem]" src="/linkedin.svg" alt="Linkedin" />Linkedin
               </a>
               <a className="flex lg:-ml-14" href="https://x.com/DUjjal74282">
                 <img className="h-[2rem] w-[2rem]" src="/x.svg" alt="X" />
               </a>
            </div>

            <div className="text-center underline lg:mt-1 mt-5 mb-10 text-gray-600">
                <a href={'/'}>back to home</a>
            </div>

          </div>
        </div>
    )
}