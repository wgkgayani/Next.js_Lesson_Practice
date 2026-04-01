import React from "react";

async function page({ params }) {
  const { vegid } = await params;
  return <div>vegi item {vegid}</div>;
}

export default page;
