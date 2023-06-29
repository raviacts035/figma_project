import greenTick from '../assets/Vector_tick.svg';

const EventCard=()=>{
    const eventTime='YESTERDAY | 6:30pm'
    return (
        <article className='flex flex-col justify-between w-[380px] h-[232px] rounded-[10px] p-5 bg-white '>
            <div className='flex justify-between'>
                <h2 className='text-[14px] text-[#828282] font-sans'>{eventTime}</h2>
                <button className='text-[12px] w-[94px] h-[24px] text-white bg-[#027333] rounded-[50px] '>Player</button>
            </div>
            <p className='text-[#13013C] text-[18px] font-sans '>Galileo High School at George Washington High School <img src={greenTick} alt="green tick"/></p>
            <span className='text-[16px] text-[#828282] '>UTR Pro Tennis Tour - Americas • Newport Beach, CA</span><br />
            <span className='text-[16px] text-[#828282] '>$20K Prize Money • $45 Entry Fees 21 Registrations • UTR 12.5 - 14.5 • Men • Singles</span>
        </article>
    )
}

export default EventCard