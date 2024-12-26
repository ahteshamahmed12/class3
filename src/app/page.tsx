import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div id="main">
 <title>routing/nevigation</title>
      <h1>welcome to main page</h1>
      <h2> category</h2>
      <Link href="/category/crypto" ><button> category link </button></Link>
      <br />

     
    
    </div>
  );
}
