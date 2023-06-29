import franceIcon from '../assets/frans_icon.svg';
import logo from '../assets/Logo.svg';
import greenTick from '../assets/Vector_tick.svg';
import arrowVector from '../assets/Vector.svg';


const DualMatchCard=()=>{
    const matchDate='APR 21';
    const matchTitle='Dual Match: University of Oregon vs California';
    const timeDate='SAT APR 29 AT 11:30AM';
    const Name1='K. Hernadez Mari..';
    const name2='L. Mendoza';
    const Num1=11.21;
    const mrpValue=13.60;
    return (
        <article className='my-[50px] w-[770px] border-2'>
            <div>
                <div className="flex justify-between items-center">
                    <h2 className='text-[24px] w-[540px] text-[#13013C] py-[5px] my-[15px]'>{matchTitle}</h2>
                    <p className='text-[#828282] text-[16px] '>{matchDate}</p>
                </div>
                <p className='text-[#828282] text-[16px] '>#1 Singles</p>
            </div>
            {/* Bottom part */}
            <div className="p-5">
                <div className='flex justify-between'>
                    <span className='text-[#828282] text-[16px] w-[250px]' >Players</span>
                    <span className='text-[#828282] text-[16px] '>MRP</span>
                    <span className='text-[#828282] text-[16px] '>Score</span>
                </div>

                {/* sub Card */}
                <div className='flex flex-col justify-around  mt-[50px] h-[164px]'>
                    <span className='flex gap-2'>
                        <span className='text-[#828282] text-[16px]'>{timeDate}</span>
                        <img className='h-[20px] w-[19px] ' src={greenTick} alt="Tick" />
                        <img className='h-[20px] w-[19px] ' src={logo} alt="Logo" />
                    </span>
                    <div className='flex justify-between'>
                        <div className='flex items-center w-[250px] gap-2 font-sans'>
                            <img src={franceIcon} className="h-[15px] w-[20px]" alt="." /> <span className='text-[#13013C] text-[18px]'>{Name1}</span> <span className='text-[10px]'>{Num1}</span>
                        </div>
                        <p  className='text-[#828282] text-[20px]'>{mrpValue}</p>
                        <div className='flex items-center gap-2 text-[#828282] text-[20px]'>
                            <p>7</p>
                            <p>6</p>
                            <img className='relative right-0 top-0 h-[20px] w-[12px]' src={arrowVector} alt=""/>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex items-center w-[250px] gap-2'>
                            <img src={franceIcon} className="h-[15px] w-[20px]" alt="." /> <span className='text-[#13013C] text-[18px]'>{name2}</span> <span className='text-[10px]'>{Num1}</span>
                        </div>
                        <p className='text-[#828282] text-[20px]'>{mrpValue}</p>
                        <div className='flex gap-2 text-[#828282] text-[20px]'>
                            <p>7</p>
                            <p>6</p>
                            <img className='relative right-0 top-0 h-[20px] w-[12px]' src={arrowVector} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default DualMatchCard