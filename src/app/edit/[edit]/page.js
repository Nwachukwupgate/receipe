'use client'

import EditSection from "@/components/editSection/EditSection";

export default function Page({params}) {
    const id = params.edit
    return (
        <>
            <EditSection id={id}/>
        </>
    )
}