import Link from 'next/link';

function Navbar() {
  return (
    <div className='bg-red h-30 w-full flex justify-evenly items-center'>
      <ul className='flex w-full justify-evenly'> 
        <li className='font-bold'><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products">Products</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
