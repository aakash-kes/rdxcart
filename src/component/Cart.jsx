import { useDispatch, useSelector } from "react-redux";
import Layout from "../layout/Layout";
import { Button, Card } from "react-bootstrap";
import { remove } from "../app/cartSlice";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row mt-3 ">
            {products?.length > 0 ? (
              products.map((product) => (
                <div
                  className="card mb-3"
                  key={product?.id}
                  style={{
                    maxWidth: "42%",
                    backgroundColor: "Lightgray",
                    margin: "2%",
                    // display: "flex",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product?.image}
                        width={100}
                        height={100}
                        className="img-fluid rounded-start mx-5 mt-4"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product?.title}</h5>
                        <p className="card-title">
                          {product?.category}
                          <h6>
                            {" "}
                            <Card.Title>{product?.price}</Card.Title>
                          </h6>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>

                      <Button
                        className="btn btn-danger"
                        onClick={() => handleRemove(product?.id)}
                      >
                        Remove{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center">
                {" "}
                Your cart is empty please add something first
              </h1>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
