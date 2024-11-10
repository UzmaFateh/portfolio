import Image from "next/image";
import red from "../../../public/red-round.webp"
import Link from "next/link";


const Navbar = () => {
    return (
<div>
        <div
            className="flex flex-col justify-between  md:flex-row  :my-10 md:my-9 lg:my-0 px-4 border-2 border-purple-200 py-3 bg-white mx-auto "
            style={{
                boxShadow: " 1px,1px 20px 20px blue)",

            }}>
            <div className="text-center text-5xl ">
                <div className="flex border-b-2 border-black sm:border-0 md:border-0 lg-border-0 xl:border-0 py-2 ">
                    <Image className="mr-10"
                        src={red}
                        alt="machine"
                        height={100}
                        width={100} />
                    <h4 className="-ml-12 mt-3 ">.Fateh</h4>
                    
                </div>

            </div>
            <div>
              <ul className="flex  text-base md:text-lg my-2 mx-auto  py-6">
                <li className="px-4 mx-auto"><Link href="/">Home</Link></li>
                <li className="px-4 mx-auto"><Link href="/skills">Skills</Link></li>
                <li className="px-4 mx-auto"><Link href="/about">About</Link></li>
                <li className="px-4 mx-auto"><Link href="/contact">Contact</Link></li>
               </ul>
            </div>
            
        </div>
     
        </div>

    );
}
export default Navbar