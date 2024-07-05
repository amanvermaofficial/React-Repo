import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-center items-center flex-col gap-2 w-80 my-0 mx-auto font-bold '>
      Github followers : {data.followers}
      <img className='' src={data.avatar_url} alt="" width={300} />
    </div>
  )
}

export default Github

export const githubInfoloader = async () =>{
   const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}