import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../app/cartSlice";

export default function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const addToCart = (p) => {
    dispatch(add(p));
  };

  async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`);

    const data = await res.json();
    // console.log(data);
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* {JSON.stringify(products, null, 2)} */}

      <div style={{ margin: "5%" }} className="container-fluid">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontStyle: "italic",
            color: "white",
          }}
        >
          Click to add to cart
        </h2>
        <div className="row mt-3">
          {products.map((product, i) => (
            <Card
              key={i}
              style={{
                width: "18rem",
                margin: "2%",
                backgroundColor: "#9ba2a7",
              }}
            >
              <Card.Img
                className="card-img-top pt-3"
                variant="top"
                src={product?.image}
                width={100}
                height={250}
              />
              <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text>{product?.category}</Card.Text>

                {/* <Card.Text>{product?.description}</Card.Text> */}

                <Card.Title>{product?.price}</Card.Title>

                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
