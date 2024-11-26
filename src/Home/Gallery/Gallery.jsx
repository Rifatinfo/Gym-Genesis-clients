import Gallery1 from '../../assets/gallary/galley-1.jpg';
import Gallery3 from '../../assets/gallary/galley-3.jpg';
import Gallery4 from '../../assets/gallary/galley-4.jpg';
import Gallery5 from '../../assets/gallary/galley-5.jpg';
import Gallery2 from '../../assets/gallary/galley-2.jpg';



const Gallery = () => {
  return (
    <div className="md:w-[80%] mx-auto my-28">
      <div className="text-5xl font-bold text-center">
        <h1>Gallery</h1>
      </div>
      {/* img gallery container */}
      <div className='md:grid grid-cols-2 justify-center items-center gap-4 mt-10'>
        <div className="mb-4 md:mb-0">
            <img src={Gallery1} alt="" className="md:h-[720px] w-full mx-auto rounded-sm" />
        </div>
        <div className='grid grid-cols-2 gap-4 items-start'>
            <div>
                <img src={Gallery2} alt="" className='md:h-[350px] object-cover bg-cover  rounded-sm' />
            </div>
            <div>
                <img src={Gallery3} alt="" className='md:h-[350px] object-cover bg-cover  rounded-sm' />
            </div>
            <div>
                <img src={Gallery4} alt="" className='md:h-[350px] object-cover bg-cover  rounded-sm' />
            </div>
            <div>
                <img src={Gallery5} alt="" className='md:h-[350px] object-cover bg-cover  rounded-sm' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
