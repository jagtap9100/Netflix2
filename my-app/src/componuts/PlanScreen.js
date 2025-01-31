import React, { useEffect, useState } from "react";
import "../style/PlanScreen.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./auth"; // Ensure 'auth' is exporting the correct Firestore instance
import { selectUser } from "../features/userslice";
import { useSelector } from "react-redux";
import { collection, query, where, get, getDocs } from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";
import { doc, addDoc, onSnapshot, updateDoc } from "firebase/firestore";

export default function PlanScreen() {
  const [products, setProducts] = useState([]);
  const auth = getAuth();
  const user = useSelector(selectUser);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, allow access to Firestore
        console.log("User signed in:", user.uid);
        // Proceed with Firestore operations
      } else {
        // User is not signed in, handle accordingly
        console.log("No user signed in");
      }
    });
    const fetchProducts = async () => {
      try {
        // Query for active products
        const productsQuery = query(
          collection(db, "products"),
          where("active", "==", true)
        );

        const productsSnapshot = await getDocs(productsQuery);
        const productsData = {};

        for (const productDoc of productsSnapshot.docs) {
          const productId = productDoc.id;
          productsData[productId] = productDoc.data();

          // Fetch prices for each product
          const pricesCollection = collection(productDoc.ref, "prices");
          const pricesSnapshot = await getDocs(pricesCollection);

          productsData[productId].prices = pricesSnapshot.docs.map(
            (priceDoc) => ({
              priceId: priceDoc.id,
              ...priceDoc.data(),
            })
          );
        }

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);
  const loadpricing = async (priceId) => {};

  return (
    <div className="points container3">
      <h3>Billing and Payments</h3>
      <p className="first flex flex-col">
        <a href="#" className="text-red-500 cursor-pointer">
          Plans (Current Plans: <span className="">Prem</span>)
        </a>
        <span
          style={{
            color: "rgba(0,0,0,0.3)",
            fontWeight: "100",
            fontSize: "14px",
          }}
        >
          Renewal dates: <span>03-01-2023</span>
        </span>
      </p>

      <table className="w-full text-start">
        {Object.entries(products).map((productData, productid) => {
          console.log("PlanproductData: ", productData);
          return (
            <tr key={productid}>
              <td>
                <p className="font-semibold text-xl ">{productData[1].name}</p>
                <span className="text-slate-400">
                  {productData[1].description}
                </span>
              </td>
              <td>
                <button
                  onClick={() =>
                    loadpricing(productData[1]?.prices[0]?.priceId)
                  }
                  className="bg-pink-500 rounded-lg p-3 mb-3 text-yellow-50"
                >
                  Subscribe
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
