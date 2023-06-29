import cake from '../assets/age_ic.svg'; 

const BirthdayCard=()=>{
    const Age=20
    return (
        <article className='w-[381px] h-[104px] rounded-[15px] shadow-lg pt-5 pl-5 bg-[#FFFFFF]'>
                    <p className='text-[20px] font-fatface text-[#3B2273]'>About</p>
                    <div className='flex justify-between'>
                        <p className='text-[16px] text-[#828282] font-sans'>Age : {Age}</p>
                        <img src={cake} className='h-[74px] w-[74px] relative bottom-[20px] right-[4px]' alt="Birthday cake" />
                    </div>
                </article>
    )
}

export default BirthdayCard