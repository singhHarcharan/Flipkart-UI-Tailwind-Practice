
export default function MiniItemCard({ path, itemName }) {
    return (
        <div className="cursor-pointer flex flex-col justify-center items-center">
            <img src={path} alt="Loading..." className="h-20 w-20" />
            <h3 className="text-center">{itemName}</h3>
        </div>

    )
}