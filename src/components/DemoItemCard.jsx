export default function DemoItemCard({ path, firstLine, secondLine }) {
    return (
        <div className="cursor-pointer flex flex-col items-center space-x-6">
            <img src={path} alt="Loading..." className="h-50" />
            <h3 className="text-center">{firstLine}</h3>
            <h2 className="text-center font-bold">{secondLine}</h2>
        </div>

    )
}