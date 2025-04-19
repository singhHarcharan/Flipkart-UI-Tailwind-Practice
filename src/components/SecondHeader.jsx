import iphone from "../images/iphone.png";
import Laptop from "../images/Laptop.png"
import TeddyBear from "../images/TeddyBear.png"
import MiniItemCard from "./MiniItemCard";

export default function SecondHeader() {
    return (
        <div className="w-full h-28 flex items-center justify-center mt-5 shadow-sm space-x-12">
            <MiniItemCard path={iphone} itemName={"iPhone"}/>
            <MiniItemCard path={Laptop} itemName={"Laptops"}/>
            <MiniItemCard path={TeddyBear} itemName={"Toys"}/>
            <MiniItemCard path={iphone} itemName={"iPhone"}/>
            <MiniItemCard path={Laptop} itemName={"Laptops"}/>
            <MiniItemCard path={TeddyBear} itemName={"Toys"}/>
            <MiniItemCard path={iphone} itemName={"iPhone"}/>
            <MiniItemCard path={Laptop} itemName={"Laptops"}/>
            <MiniItemCard path={TeddyBear} itemName={"Toys"}/>
            <MiniItemCard path={iphone} itemName={"iPhone"}/>
        </div>
    )
}