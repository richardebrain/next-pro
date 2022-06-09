
import Link from 'next/link'


const Nav = () => {
  return (
    <nav className='w-full h-12 p-3  flex flex-col justify-start align-middle bg-black text-white'>
        <ul className=' flex justify-start align-middle list-none'>
            <li className='mx-3 my-1 '>
                <Link href="/">Home</Link>
            </li>
            <li className='mx-3 my-1 '>
                <Link href="/about">About</Link>
            </li>
           
        </ul>
    </nav>
  )
}

export default Nav