import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { productId } = params;

    if (!productId) {
      return NextResponse({ error: "No product id found" }, { status: 400 });
    }

    const response = await fetch(
      `${process.env.SHOPIFY_STORE_URL}/products/${productId}.json`,
      {
        headers: {
          "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch the product");
    }

    const product = await response.json();

    if (!product) {
      return NextResponse({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching the product" },
      { status: 500 }
    );
  }
};
