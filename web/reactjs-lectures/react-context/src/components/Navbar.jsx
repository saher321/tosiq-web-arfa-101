import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import AppName from './AppName'
import { MyContext } from '../context/ContextStore'

const Navbar = () => {
  const data = useContext(MyContext);

  const links = [
    {url: '/', title: "Home"},
    {url: '/about-us', title: "About"},
    {url: '/contact-us', title: "Contact"},
  ]

  // const arr2 = [
  //   {url: '/help', title: "Help"},
  // ]
  // const newArr = [...links, ...arr2]

  // console.log(newArr);

  return (
    <div className='mt-3 flex items-center justify-center'>
        <div className='w-fit p-4 rounded-full bg-gray-950 text-white'>

        <nav className='flex gap-3'>

          <NavLink>
            {data.APP_NAME}
          </NavLink>
        
          {
            links.map((link, i) => {
              return (
                <NavLink key={i}
                  className={({isActive}) => isActive ? "text-green-300 font-bold" : ""}
                  to={link.url}> {link.title} </NavLink>
              )
            })
          }
          </nav>
    </div>

    </div>
  )
}

export default Navbar


// 

// var a = 10;

// {
//   var a = 40;
// }

// let b = a;
// {
//   let b = 4000;
// }

// console.log(b)











