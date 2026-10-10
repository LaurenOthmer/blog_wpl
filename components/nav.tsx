import Link from "next/link";


function Navbar(){
    return(
     <nav className = "bg-purple-300 text-center p-5 mb-5 text-white border-b-4 border-purple-200">
            <Link className = "m-5" href="/">Home</Link>
            <Link className = "m-5" href="/posts">Posts</Link>
        </nav>
    )
}

export default Navbar;