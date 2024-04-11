import Link from "next/link";



export default function Products() {
  return (
    <div>
        <h3 className="text-2xl">Products list Page</h3>
        <ol className="list-decimal list-inside">
        <li> <Link href="/products/prod">prod</Link></li>
        <li> <Link href="/products/prod">prod</Link></li>
        <li> <Link href="/products/prod">prod</Link></li>
        <li> <Link href="/products/prod">prod</Link></li>
      
      </ol>

    </div>
  )
}

