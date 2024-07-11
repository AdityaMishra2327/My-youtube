import React from 'react';

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1'>
        <img className='h-8' alt='menu' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'></img>
        <img className='h-8 mx-3' alt='logo' src='https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg'></img>
    </div>
    <div className='col-span-10 text-center'>
      <input className='w-1/2 shadow-lg rounded-l-full p-2 border border-gray-400' type='text' placeholder='Search'></input>
      <button className='border border-gray-400 rounded-r-full p-2'>Search</button>
    </div>
    <div className='col-span-1'>
        <img className='h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></img>
    </div>

      
    </div>
  )
}

export default Head;
