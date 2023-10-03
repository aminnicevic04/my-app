import React, { useState } from "react";
import Artikl from "./Artikl.js";
function Fatch() {
  const [defaultData, setDefaultData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () =>
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setDefaultData(data?.products));

  console.log(defaultData);
  return (
    <div style={{ minHeight: "100vh" }}>
      <button onClick={getData}>Uzmi podatke</button>
      <button
        onClick={() =>
          setFilteredData(defaultData.filter((el) => el.id % 2 === 0))
        }
      >
        Filtriraj podatke
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "200px",
          width: "100px",
        }}
      >
        {loading && <h1>Loading.....</h1>}
        {defaultData?.length > 0 ? (
          defaultData?.map((product) => (
            <Artikl
              images={product.images}
              brand={product.brand}
              title={product.title}
              category={product.category}
              description={product.description}
              price={product.price}
            ></Artikl>
          ))
        ) : (
          <h1>Nema trenutno podataka </h1>
        )}
      </div>
    </div>
  );
}

export default Fatch;
