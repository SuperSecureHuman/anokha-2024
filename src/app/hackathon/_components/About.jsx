import React from 'react';

const About = () => {
  return (
    <div className='h-full w-full bg-[#0A113A] relative overflow-hidden'>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[70%] sm:w-[70%] p-8 rounded-[20%] left-[1%] blur-3xl levitate"></div>
      <div className="font-poppins mx-auto py-20 md:px-[20%] sm:px-5 text-black relative z-10">
        <div className='bg-white/80 rounded-[50px] pb-[60px] pt-[40px] px-10  backdrop-blur-lg shadow-3xl rounded-tr-none rounded-bl-none text-black'>
          <p className='text-[3rem] font-bold'>About</p>
          <p>
          The Intel oneAPI Hackathon presents an online hybrid platform where developers are challenged to showcase their prowess in crafting innovative solutions for societal advancement through heterogeneous computing, leveraging Intel oneAPI as the core programming paradigm. Participants stand to benefit from immersive training sessions conducted by Intel experts, delving into a wide array of Intel AI Analytics Toolkits, libraries, SYCL/DPC++ Libraries, and optimized frameworks such as TensorFlow, PyTorch, Scikit-Learn, and XGBoost. Additionally, participants will have access to domain-specific reference kits and open AI software tools to augment their development journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
