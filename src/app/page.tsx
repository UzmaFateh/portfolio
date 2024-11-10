import Image from "next/image";
import grayScarf from "../../public/gray-scarf.jpg"

export default function Home() {
  return (
    <div className="sm:flex md:flex-row justify-between  bg-black    
      w-[100%]  bg-gradient-to-b from-gray-950 to-gray-950  my-auto py-20 ">

  
      // height={1500}
      // width={1500}
         <Image className="rounded-3xl mx-auto sm:-ml-24 md:-ml-6"
        src={grayScarf}
        alt=""
        height={220}
        width={210} />

         <p className=" py-10 w-[40%] text-center   mx-auto sm:-ml-2 text-xl  md:text-2xl lg:text-3xl sm:hover:text-xl md:hover:text-2xl  lg:hover:text-3xl 

        ease-linear   text-yellow-50 "><br /><br />Transforming
        your ideas into
        immersive  digital Experiences</p>
    </div>);
}

