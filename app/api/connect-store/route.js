import { NextResponse } from "next/server";

export const POST = async (request, response) => {
  try {
    const { storeName, shopifyAccessToken } = await request.json();

    const response = await fetch(
      `https://${storeName}.myshopify.com/admin/api/2024-01/shop.json`,
      {
        headers: {
          "X-Shopify-Access-Token": shopifyAccessToken,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to connect to the store");
    }

    const storeData = await response.json();

    return NextResponse.json(storeData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to establish the connection" });
  }
};
