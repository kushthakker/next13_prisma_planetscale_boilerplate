async function getData() {
  const res = await fetch(
    "https://dummyjson.com/products/category/smartphones"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }) {
  console.log(params, "params");
  const data = await getData();
  console.log(data, "data");
  return (
    <div className="text-5xl font-bold text-center w-full h-full">
      {data.products[1].title}
    </div>
  );
}
