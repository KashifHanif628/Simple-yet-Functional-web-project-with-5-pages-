import { Html } from "next/document"
import Link from "next/link"

export default function Navbar() {
return (    
    <div>
        <Link href="/">Home</Link>
        <br/>
        <Link href="/about">About</Link>
        <br/>
        <Link href="/ameenalam">Ameen Alam</Link>
        <br/>
        <Link href="/asharib">Asharib Ali</Link>
        <br/>
        <Link href="/mubashirali">Mubashir Ali</Link>
        <br/>
        <Link href="/naeemhussain">Naeem Hussain</Link>
    </div>
    

);
    
}