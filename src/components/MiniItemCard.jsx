
export default function MiniItemCard({ path, itemName }) {
    return (
        <div className="flex flex-col items-center space-x-12">
            <img src={path} alt="Loading..." className="h-20 w-20" />
            <h3 className="text-center">{itemName}</h3>
        </div>

    )
}