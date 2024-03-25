import React from 'react';
import { Navlinks } from '../constants';
const ImagePath = '/images/search.png';

const Nav = () => {
  return (
    <div  className='w-[100%] overflow-hidden lg:h-[20%] sm:h-[15%px] bg-blue-500 flex items-center relative'>
        <ul className='flex overflow-hidden mx-4 p-8 '>
          <li className='p-1'>
            <a href="#GoodNovel" className='border-4  border-green-500 bg-red-200 mr-[10px] font-bold'>
              Zetro Novels
            </a>
          </li>
          {Navlinks.map((item) => (
            <li className='px-6'>
              <a href={item.href} className=' relative flex border-4 border-gray-300 bg-white'>
                {item.label}
              </a>
            </li>
          ))}
            <div className='h-[30px] w-[100px] bg-black z-0 flex justify-center items-center rounded-md bg-clip-text mx-[50px]'>
              <div className='flex z-10 bg-white h-auto w-[80px] rounded-md'>
                <img src={ImagePath} alt=""  className='h-auto w-5'/>
                <h1 className=''>
                 Search
                </h1>
              </div>
          </div>
          </ul>
          
    </div>
  )
}

export default Nav
