import GetDetail from "@/components/getDetail/GetDetail";

export default function Detail({params}) {
    const id = params.id
    
    return (
        <>
            <GetDetail id={id} />
        </>
    );
}
