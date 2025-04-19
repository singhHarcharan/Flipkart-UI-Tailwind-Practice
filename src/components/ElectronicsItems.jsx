import DemoItemCard from "./DemoItemCard";
import iPhone from "../images/iphone.png";
import airpods from "../images/Airpods.jpeg"
import printer from "../images/Printer.jpeg"
import smartWatch from "../images/SmartWatch.jpeg"

export default function ElectronicsItems() {
    return (
        <div className="mt-5 flex justify-center items-center">
            <DemoItemCard path={iPhone} firstLine={"iPhone"} secondLine={"Starting at Rs. 9999"}/>
            <DemoItemCard path={airpods} firstLine={"Airpods"} secondLine={"Shop Now"}/>
            <DemoItemCard path={printer} firstLine={"Printer"} secondLine={"Grab the deal"}/>
            <DemoItemCard path={smartWatch} firstLine={"Smart Watch"} secondLine={"Extra 10% off"}/>
            <DemoItemCard path={airpods} firstLine={"Airpods"} secondLine={"Shop Now"}/>
            <DemoItemCard path={printer} firstLine={"Printer"} secondLine={"Grab the deal"}/>
        </div>
    )
}