"use client";

import { useState } from "react";
import Link from "next/link";

const CoonectStorePage = () => {
  const [storeName, setStoreName] = useState("");
  const [shopifyAccessToken, setShopifyAccessToken] = useState("");
  const [storeData, setStoreData] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("/api/connect-store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ storeName, shopifyAccessToken }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect");
      }

      const data = await response.json();
      setStoreData(data);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <form className="w-96" onSubmit={submitHandler}>
        <div className="mb-4">
          <label htmlFor="storeName">Store name</label>
          <input
            className="placeholder:text-sm border block py-1 px-2 w-full"
            type="text"
            name="storeName"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Enter your Store name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shopifyAccessToken">Shopify Access Token</label>
          <input
            className="placeholder:text-sm border block py-1 px-2 w-full"
            type="text"
            name="shopifyAccessToken"
            value={shopifyAccessToken}
            onChange={(e) => setShopifyAccessToken(e.target.value)}
            placeholder="Enter your Shopify Access Token"
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-cyan-600 text-white rounded w-full py-2 disabled:bg-cyan-900 disabled:cursor-not-allowed"
            type="submit"
            disabled={storeData?.shop ? true : false}
          >
            {loading
              ? "Connecting..."
              : storeData?.shop
              ? "Connected"
              : "Connect"}
          </button>
        </div>
        <div className="mb-4">
          {storeData?.shop?.name && (
            <p className="bg-green-100 rounded p-2 text-center">
              Connection to <b>{storeData.shop.name}</b> established
              successfully!
            </p>
          )}
        </div>
      </form>
      <div>
        <Link href="/">Back</Link>
      </div>
    </div>
  );
};

export default CoonectStorePage;
