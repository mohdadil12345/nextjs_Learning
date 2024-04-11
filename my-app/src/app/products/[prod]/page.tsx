// export default function Prod(props : any) {
// console.log("prppp", props.params.prod)
export default async function Prod({ params }: { params: { prod: string } }) {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.prod}`, {cache : "no-store"}
  );
  const res = await fetchData.json();
  console.log("res", res);

  return (
    <div>
      <h1 className="font-bold text-green-600">
        Prod details page in Products route
      </h1>

      {/* <strong>{props.params.prod}</strong> */}
      {/* <strong>{params.prod}</strong> */}

      <div className="detailsdata">
        <p><strong>title :</strong> {res.title}</p>
        <p><strong>body :</strong> {res.body}</p>
        <p><strong>id : </strong>{res.id}</p>
      </div>
    </div>
  );
}
