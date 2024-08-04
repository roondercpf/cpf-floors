"use client"
import { Ref, forwardRef, useMemo, useState, ReactNode } from "react";
import Image from "next/image";
// Components
import { GeneralDropwdown } from "../dropdowns/GeneralDropdown";
// Hooks
import { useForm } from "react-hook-form";
// Types
import { CollectionResponse, Collections } from "@/interfaces/collections.model";
import "@/app/sass/OrderSample.scss"

interface OrderSampleColorsProps {
    collections: Collections[];
    props?: ReactNode;
}

interface ColorProjected {
    color: string;
    collection: string;
    type: string;
    picture: string;
}

export const OrderSampleColors = forwardRef(({
    collections,
    ...props
}: OrderSampleColorsProps, ref: Ref<HTMLDivElement>) => {
    const {
        register,
        watch,
        setValue,
        reset
    } = useForm<{
        search: string | undefined;
        type: string | undefined;
        collection: string | undefined;
    }>({
        defaultValues: {
            search: undefined,
            type: undefined,
            collection: undefined
        }
    });
    // Watchers
    const search = watch("search");
    const type = watch("type");
    const collection = watch("collection");
    
    const colors = useMemo(() => {
        if(collections) {
            const tempColors = collections.flatMap(tempCollection => {
                const collection = tempCollection.name;
                const type = tempCollection.productType;
                const colorsArray = tempCollection.colors.map(tempColor => ({
                    color: tempColor.name,
                    collection,
                    type,
                    picture: tempColor.picture
                }))
                
                return colorsArray
            });

            return tempColors;
        }

        return []
    }, [collections]);

    const collectionNames = useMemo(() => {
        if(collections) {
            const tempCollections = collections.map(tempCollection => tempCollection.name);
            return tempCollections
        }

        return []
    }, [collections]);

    const filteredColors = useMemo(() => {
        if(search) {
            return colors.filter((color) =>
                color.color.toLowerCase().includes(search.toLowerCase())
            );
        }

        if(type && collection) {
            return colors.filter((color) =>
                color.collection === collection && color.type === type
            ); 
        }

        if(type || collection) {
            return colors.filter((color) =>
                color.type === type || color.collection === collection
            ); 
        }

        return colors;
    }, [search, colors, type, collection]);

    
    return (
        <>
            <div className="input-container">
            <input
                type="text"
                value={search}
                placeholder="Search Color"
                className="order-input py-1 px-3 my-2 rounded w-full"
                {...register("search")}
            />
            </div>
            <div className="dropdown-container flex justify-between items-center">
                <GeneralDropwdown
                    field="type" 
                    formSetValue={setValue} 
                    formValue={type} 
                    items={[
                        "Rigid core Vinyl",
                        "waterproof laminate"   
                    ]}
                    placeholder="Type"
                    title="Type"
                />
                <GeneralDropwdown 
                    field="collection" 
                    formSetValue={setValue} 
                    formValue={collection} 
                    items={collectionNames}
                    placeholder="Collection"
                    title="Collection"
                />
                <button
                    className="link-dark"
                    onClick={() => reset()}
                >
                    Reset
                </button>
            </div>

            <section ref={ref} className="samples-container flex flex-row flex-wrap justify-center align-center">

                {filteredColors && filteredColors.map((color: ColorProjected, index: number) => {
                    return (
                        <article className="sample-card" key={Math.random() + index * 4}>
                            <div className="sample-card">
                            <Image 
                                className="rounded-md" 
                                src={color.picture ? color.picture : "/place-img.jpg"} 
                                width={224.94} 
                                height={224.94} 
                                alt={`${color.collection}, ${color.color}, ${color.type}`}
                                objectFit="contain"
                            />
                            <h3>{color.color}</h3>
                            <p>{color.collection}</p>
                            </div>
                        </article>
                    )
                })}            
            </section>
        </>
    );
});

OrderSampleColors.displayName = "OrderSampleColors";