import BirthdayCard from "./BirthdayCard";
import DualMatchCard from "./DualMatchCard";

const Results=()=>{
    
    return (
        <section className="px-[150px] mt-[60px]">
            <div className="flex justify-between">
                <div>
                    <form className="flex justify-between w-[381px] h-[104px]">  
                        <select  className="text-[#3B2273] w-[170px] px-2 h-[50px] border-2 border-[#3B2273] rounded-[10px]">  
                        <option  value = "singles">Singles  
                        </option>  
                        </select> 
                        <select  className="text-[#3B2273] text-[14px] w-[170px] px-2 h-[50px] border-2 border-[#3B2273] rounded-[10px]">  
                        <option value = "latest">Latest 
                        </option>  
                        </select> 
                    </form>
                    <span className="text-[16px] text-[#828282]">W/L 37 - 15</span>
                </div>
                    <BirthdayCard/>
            </div>
            <section>
                <DualMatchCard/>
                <DualMatchCard/>
            </section>
        </section>
    )
}

export default Results