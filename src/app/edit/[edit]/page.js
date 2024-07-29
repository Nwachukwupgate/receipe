'use client'

import EditSection from "@/components/editSection/EditSection";

export default function Edit({params}) {
    const id = params.edit
    return (
        <>
            <EditSection id={id}/>
        </>
    )
}