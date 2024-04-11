import Link from 'next/link';

function Navbar() {
  return (
    <div className=' navbar'>
      <ul className='menu'> 
        <li className='font-bold'><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products">Products</Link></li>
      </ul>
    </div>                       
  );
}

export default Navbar;
