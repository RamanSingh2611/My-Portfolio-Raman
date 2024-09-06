import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Raman , nice to meet you, Please take a look around.</p>
                </div>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam 
                        repudiandae quo ipsum 
                        eveniet ex iusto culpa doloremque totam obcaecati aliquam assumenda
                         illo inventore magnam in tempore, minus vitae aliquid sint velit. 
                         Corrupti facere,
                          cupiditate sed non consequuntur, blanditiis a 
                        quia ad laboriosam culpa minima officia, praesentium fugit neque odio!
                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default About