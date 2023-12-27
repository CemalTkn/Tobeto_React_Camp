import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductName(name)
      .then((result) => setProduct(result.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            image={product.image}
            header={product.title}
            meta={product.category}
            description={product.description}
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
