import cover1 from '../../assets/home/cover-1.jpg'
// import cover2 from '../../assets/home/cover-2.jpg'
const Hero = () => {
    return (
        <div className="min-h-screen bg-cover" style={{backgroundImage : `url(${cover1})`}}>
            <div className='min-h-screen flex justify-start items-center pl-11 text-white bg-black bg-opacity-60'>
               <div>
                <div className='space-y-4'>
                    <h3 className='md:text-4xl text-2xl'>We Provided</h3>
                    <h1 className='md:text-text-7xl text-4xl font-bold'>Best Yoga Course Online</h1>
                    <div className='md:w-1/2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos similique nobis libero quibusdam aliquam? Praesentium optio quos, sint eveniet velit, voluptate nulla incidunt non, quis accusamus odio assumenda tenetur.</p>
                    </div>
                    <div className='flex flex-wrap item-center gap-5'>
                        <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Join Today</button>
                        <button className='px-7 py-3 rounded-lg border font-bold hover:bg-secondary hover:border-none uppercase'>View Course</button>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Hero;