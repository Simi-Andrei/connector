"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProductPage = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch the product");
        }

        const data = await response.json();

        const { product } = data;
        setProduct(product);
      } catch (error) {
        console.error("Error fetching the product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <Link href="/">Home</Link>
      <h1>{product.title}</h1>
      <p>{product.body_html}</p>
    </>
  );
};

export default ProductPage;
