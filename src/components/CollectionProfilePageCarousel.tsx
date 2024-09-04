"use client"
import React from "react";
import { useEffect, useState } from "react";
import { Collections } from "@/interfaces/collections.model";
import Link from "next/link";
import Image from "next/image";



function CollectionProfilePageCarousel(){

    const [ collections, setCollections] = useState<Collections[]>([])

    useEffect(() => {
        async function fetchCollections(){
            try{
                const response = await fetch(`/api/collections/`)
                const data = await response.json()
                setCollections(data)
            }catch(error){
                console.log("error: ",error)
            }
        }
        fetchCollections()
    }, [])

    console.log(collections)
    
    return ( 
        <>
            {collections.length > 0 && collections.map((col, index) => (
                <div key={index}>
                    <Image src={col.cover} width={500} height={500} alt="CPF Floors"></Image>
                    <p>{col.name}</p>
                </div>
            ))}
        </>
     );
}

export default CollectionProfilePageCarousel;