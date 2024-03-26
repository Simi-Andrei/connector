"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch the products");
        }

        const data = await response.json();

        const { products } = data;
        setProducts(products);
      } catch (error) {
        console.error("Error fetching the products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-lg border-b border-b-sky-950/10 mb-2">Products</h1>
      <table className="w-full border border-sky-950/10 border-separate">
        <thead>
          <tr className="text-left">
            <th className="px-2 py-0.5 border border-sky-950/20">Title</th>
            <th className="px-2 py-0.5 border border-sky-950/20">ID</th>
            <th className="px-2 py-0.5 border border-sky-950/20">Vendor</th>
            <th className="px-2 py-0.5 border border-sky-950/20">Price</th>
            <th className="px-2 py-0.5 border border-sky-950/20">Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-2 py-0.5 border border-sky-950/20">
                {product.title}
              </td>
              <td className="px-2 py-0.5 border border-sky-950/20">
                {product.id}
              </td>
              <td className="px-2 py-0.5 border border-sky-950/20">
                {product.vendor}
              </td>
              <td className="px-2 py-0.5 border border-sky-950/20">
                ${product.variants[0].price}
              </td>
              <td className="px-2 py-0.5 border border-sky-950/20 flex items-center justify-around">
                <Link
                  className="text-sky-950 p-1 grid place-items-center"
                  href="/"
                >
                  <FaEdit />
                </Link>
                <button className="text-red-950 p-1">
                  <FaRegTrashCan />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-red-100 mt-2 flex items-center justify-between">
        <span>
          Page <span className="font-semibold">1</span> of 12
        </span>
        <div className="flex items-center">
          <span className="p-2">
            <FiChevronsLeft />
          </span>
          <span className="mx-2">1</span>
          <span className="p-2">
            <FiChevronsRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
