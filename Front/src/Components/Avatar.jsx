import React from 'react'

const Avatar = ({userId,username}) => {

  const colors = ['bg-red-200','bg-green-200','bg-purple-200','bg-teal-200','bg-yellow-200','bg-pink-200','bg-blue-200']

  const userIdBase10 = parseInt(userId,16);
  const colorIndex = (userIdBase10%colors.length);
  const color = colors[colorIndex];
  return (
    <span className={`inline-block h-10 w-10 px-3.5 py-2  rounded-full  ${color}`}>
   <div className='opacity-70 font-extrabold'>{username[0]}</div>
    </span>
  )
}

export default Avatar