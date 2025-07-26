'use client'

import React, {useEffect, useState} from "react"


export default function page() {
    const [data, setData] = useState<any>({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetch('https://api.github.com/users/ujjaldas-11')
        .then(response => response.json())
        .then( data => {
            // console.log(data);
            setData(data);
            setLoading(false)
        })
    },[])

    if(loading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <span className="text-2xl font-semibold">Loading....</span>
            </div>
        )
    }

    return (
       
        <div className="lg:flex lg:justify-evenly lg:items-center lg:mt-1 mt-10 p-10 h-[80vh]">
            <img 
            src={data.avatar_url}
            alt="avatar"
            className="h-[20rem] w-[20rem]" 
            />
            <div>
                <h1 className="text-center lg:mt-1 mt-10 text-4xl font-bold">{data.name}</h1>
                <h1 className="text-center text-2xl text-gray-500 font-semibold m-3">github followers: {data.followers}</h1>
            </div>
        </div>
    )
}