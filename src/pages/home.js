import Mucha from "../assets/mucha.png"
import Button from "../components/button"
import CoreNavbar from "../components/navbar"

export default function Home(){
    return(
    <>
    <div>
        <CoreNavbar/>
         <img className="" src= {Mucha}></img>
         <Button name="Ondrej"/>
    </div>
    
    </>)
}
