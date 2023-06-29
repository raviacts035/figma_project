import ResultsCard from '../components/ResultsCard';
import BirthdayCard from '../components/BirthdayCard';
import EventCard from './EventCard';

const OverView=()=>{
    return (
        <section className="px-20 mt-[60px] h-[2146px]">
            <h2 className="text-Black text-4xl font-serif">Recent Results</h2>
            <article className='flex gap-[22px] w-[1170px] bg-white'>
                <ResultsCard/>
                <ResultsCard/>
                <BirthdayCard/>
            </article>
            <article className='mt-[60px]'>
                <div>
                    <p className='text-[30px] w-[540px] text-[#13013C] py-[5px] my-[15px]'>Events Near You</p>
                    <hr />
                </div>
                <div className='flex mt-[50px] gap-[15px]'>
                    <EventCard/>
                    <EventCard/>
                </div>
            </article>
            {/* media section */}
            <article className='mt-[60px]'>
                <div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[30px] w-[540px] text-[#13013C] py-[5px] my-[15px]'>Media</p>
                        <span className='text-[16px] text-[#027333] font-sans'>See All Media</span>
                    </div>
                    <hr />
                </div>
                <div className='flex mt-[50px] gap-[15px]'>
                    <p>No media has been added yet, Check back for photos and videos.</p>
                </div>
            </article>
            
        </section>
    )
}

export default OverView