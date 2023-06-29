import franceIcon from '../assets/frans_icon.svg';
import arrowVector from '../assets/Vector.svg';
import logo from '../assets/Logo.svg';

const ResultsCard=()=>{
    const Time='SAT APR 29 AT 11:30AM'
    const Name1='K. Hernadez Mari..'
    const name2='L. Mendoza'
    const Num1=11.21;
    
    return (
        <article id='card' className="flex flex-col justify-around my-2 pt-0 p-5 w-[375px] h-[266px] shadow-lg ">
                    <img className='relative left-[342px] top-[88px] h-[20px] w-[12px]' src={arrowVector} alt=""/>
                <p className="text-slate-400 text-[16px]">{Time}</p>
                {/* team one */}
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <div className='flex items-center gap-2 font-sans'>
                            <img src={franceIcon} className="h-[15px] w-[20px]" alt="." /> <span className='text-[#13013C] text-[18px]'>{Name1}</span> <span className='text-[10px]'>{Num1}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={franceIcon} className="h-[15px] w-[20px]" alt="." /> <span className='text-[#13013C] text-[18px]'>{name2}</span> <span className='text-[10px]'>{Num1}</span>
                        </div>
                    </div>
                    <span className='text-[20px]'>2</span>
                </div>
                <hr />
                {/* team 2 */}
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <div className='flex items-center gap-2'>
                            <img src={franceIcon} className="h-[15px] w-[20px]" alt="." /> <span className=' font-sans'>{Name1}</span> <span className='text-[10px]'>{Num1}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={franceIcon} className="h-[15px] w-[20px]" alt="." /> {name2} <span className='text-[10px]'>{Num1}</span>
                        </div>
                    </div>
                    <span className='text-[20px]'>2</span>
                </div>
                <div className='flex justify-between'>
                    <span className='w-[60px] h-[20px] text-[16px] text-[#828282]'>Doubles</span>
                    <img className='w-[24px] h-[20px] ' src={logo} alt="" />
                </div>
        </article>
    )
}

export default ResultsCard