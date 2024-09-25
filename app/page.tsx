'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
 
export default function Home() {
  const route = useRouter()
  return (


///////////////////// CREATE ROUTER VIA LINK///////////////////////
  
    <><h1>THIS IS HOME PAGE!</h1>
    <Link href={"/navbar"}> Go To NavBar Page :</Link><br />
    <Link href={"/about"}>Go To About Page :</Link><br />
    <Link href={"/contact"}>Go To Contact Us Page :</Link><br />
    <Link href={"/footer"}>Go To Footer Page :</Link><br />

 /////////////////////////////////// via link ////////////////////////////////////// 
<br />
<br />
<br />
<br />

    {/* //CREATE ROUTER VIA USEROUTER */}
   
    <button  onClick={()=>route.push('/navbar')}> GO TO NAVBAR PAGE</button><br /><br />
    <button  onClick={()=>route.push('/about')}> GO TO ABOUT PAGE</button><br /> <br /> 
    <button  onClick={()=>route.push('/contact')}> GO TO CONTACT US PAGE</button><br /><br />
    <button  onClick={()=>route.push('/footer')}> GO TO FOOTER PAGE</button><br /><br />

    /////////////////////////////CREATE ROUTER VIA USEROUTER AND BUTTON////////////////////////////////

    </>
  );
}
