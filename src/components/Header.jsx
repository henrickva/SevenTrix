import Image from "next/image";
import { ModeToggle } from "./Theme";
import Sidebar from "./Sidebar";


export default function Header(){
    return(
        <div className="bg-teste-100 flex items-center justify-center">
            <div className="text-white container flex justify-between p-2">
                <Sidebar />
                <Image 
                    width={40} 
                    height={40} 
                    src={'/logoSeven.svg'} 
                    alt="logo Seven"
                />
                <ModeToggle />
            </div>
        </div>
    )
}