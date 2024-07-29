import EditSection from "@/components/editSection/EditSection";

export default function Home({params}) {
    const id = params.id
    return (
        <EditSection id={id}/>
    )
}