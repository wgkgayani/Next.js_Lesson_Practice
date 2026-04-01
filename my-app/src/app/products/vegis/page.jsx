import React from "react";
import Link from "next/link";

function page() {
  const vegis = [
    {
      id: 1,
      veginame: "Broccoli",
    },
    {
      id: 2,
      veginame: "Spinach",
    },
    {
      id: 3,
      veginame: "Pumpkin",
    },
    {
      id: 4,
      veginame: "Beans",
    },
  ];
  return (
    <>
      <div>
        <h1>vegis page</h1>
      </div>

      <ul>
        {vegis.map((vegi) => {
          return (
            <li>
              <Link href={`/products/vegis/${vegi.veginame}`}>
                {vegi.veginame}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default page;
