import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dotSlide, nextSlide, prevSlide } from '../../features/slices/sliderSlice';
import { sliderData } from '../../assets/data/dataSlider';

const Slider = () => {
    const sliceIndex = useSelector((state) => state.slider.value);
    const dispatch = useDispatch();
  return (
    <div>
        <div>
            {sliderData.map((item)=>{
                return(
                    <div key={item.id} className={parseInt(item.id) === sliceIndex ? 'opacity-100 duration-700 ease-in-out scale-100' : 'opacity-0 duration-700 ease-in-out scale-95'}>
                        <div>
                            {parseInt(item.id) === sliceIndex && (<img className='h-[850px] w-full' src={item.image} alt="shoes" />)}
                        </div>
                        <div className='absolute top-44 mx-auto inset-x-1/4'>
                           <p className='text-white text-4xl font-inter font-bold'>
                            {parseInt(item.id) === sliceIndex && item.text}
                           </p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='flex absolute -bottom-52 left-[45%]'>
            {sliderData.map((dot , index) => {
              return (
                <div className='mr-4' key={index}>
                  <div className={index === sliceIndex ? 'bg-green-300 rounded-full p-4 cursor-pointer' : 'bg-white rounded-full p-4 cursor-pointer'} onClick={() => dispatch(dotSlide(index))}></div>
                </div>
              )
            })}
        </div>
      <button className='absolute top-[600px] right-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={() => dispatch(nextSlide(sliceIndex + 1))}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

      </button>
      <button className='absolute top-[600px] left-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={() => dispatch(prevSlide(sliceIndex - 1))}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

      </button>
    </div>
  )
}

export default Slider;
