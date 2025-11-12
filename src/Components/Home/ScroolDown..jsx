import { FiArrowDown } from "react-icons/fi";
import scrollIcon from "../../assets/icons/scroll.svg";

const ScroolDown = () => {
    return (
        < div className=" hidden md:flex md:ml-51 lg:ml-73 " >
            <div className="flex items-center justify-center gap-4">
                <div>
                    <img src={scrollIcon} alt="scroll down" className="w-5 h-5 md:w-6 md:h-6 lg:-10 lg:h-10 " />    
                </div>
                <div>
                    <span className="text-sm  md:text-2xl lg:text-3xl text-gray-600">Scroll down</span>
                </div>
               <div className="text-center ">
                 <FiArrowDown className="text-2xl animate-bounce text-gray-600 " />
               </div>
            </div>
        </div >
    );
};

export default ScroolDown;