import Link from "next/link"

export default function Header() {
    return (

        <header>



<div className="grid grid-cols-3 px-12 py-12">
    <div className="col-span-1">
        <h1 className="font-bold text-4xl">City</h1>
    </div>
    <div className="col-span-1">

    <div className="flex justify-center ">


<div className=" flex justify-center space-x-8 ">
    <Link href="/">
        <a className="font-bold hover:text-orange-600">
            Home
        </a>
    </Link>

    <Link href="/menu">
    <a className="font-bold hover:text-orange-600">
            Menu
        </a>

    </Link>

    <Link href="/service">
    <a className="font-bold hover:text-orange-600">
            Service
        </a>
    </Link>

    <Link href="/shop">
    <a className="font-bold hover:text-orange-600">
            Shop
        </a>
    </Link>


</div>



</div>


    </div>
    <div className="col-span-1 px-24">
    <input className="border rounded-md py-1 px-2 text-center border-orange-500 hover:border-orange-600" type="text" placeholder="What are you looking for?" ></input>

    </div>
    
</div>
            
            


        </header>
    )
}