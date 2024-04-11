import Link from "next/link";



export default async function Products() {

  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
  const res = await fetchData.json()
  console.log(res)

  return (
    <div>
        <h3 className="text-2xl">Products list Page</h3>
        <ol>

          {res.map((ele : any)=> (
              <div className="items">
                <p>
                  <Link href={`products/${ele.id}`} >{ele.title}</Link>
                </p>
              </div>
          ))}


      
      </ol>

    </div>
  )
}

