import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const response = await fetch(
      process.env.SHOPIFY_STORE_URL + "/products.json",
      {
        headers: {
          "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch the products");
    }

    const products = await response.json();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching the products" },
      { status: 500 }
    );
  }
};
