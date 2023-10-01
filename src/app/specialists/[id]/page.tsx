export default function Specialist({ params }: { params: { id: string } }) {
    return <div>Amazing doctor: {params.id}</div>
}