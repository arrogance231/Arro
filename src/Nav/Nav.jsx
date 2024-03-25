import React from 'react'
import { Navlinks } from '../constants'

const Nav = () => {
  return (
    <div  className='w-full overflow-hidden lg:h-[100px] sm:h-[80px] bg-blue-500 '>
        <ul className='flex overflow-hidden mx-4 p-8 '>
          <li>
            <a href="#GoodNovel">
              GoodNovel
            </a>
          </li>
          {Navlinks.map((item) => (
            <li className='px-6'>
              <a href={item.href} className=' relative flex'>
                {item.label}
              </a>
            </li>
          ))}
            <div className='h-[30px] w-[100px] bg-black z-0 '>
              <div className='flex z-10 bg-white h-auto w-[80px] '>
                <img src="" alt="" />
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
