import React, { useEffect, useState } from "react";
import "../style/PlanScreen.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./auth"; // Ensure this path is correct
import { selectUser } from "../features/userslice";
import { useSelector } from "react-redux";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";
import getStripe from "./stripe";
export default function PlanScreen() {
  const [products, setProducts] = useState([]);
  const auth = getAuth();
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User signed in:", user.uid);
      } else {
        console.log("No user signed in");
      }
    });

    const fetchProducts = async () => {
      try {
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
          const pricesCollection = collection(
            db,
            "products",
            productId,
            "prices"
          );
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
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const loadPricing = async (priceId) => {
    if (!user) {
      console.error("User not found");
      return;
    }

    try {
      const checkoutSessionRef = await addDoc(
        collection(db, "customers", user.uid, "checkout_sessions"),
        {
          price: priceId,
          success_url: `${window.location.origin}`,
          cancel_url: `${window.location.origin}/cancel`,
        }
      );
      onSnapshot(checkoutSessionRef, async (snap) => {
        if (snap.exists()) {
          const { sessionId } = snap.data();
          if (sessionId) {
            const stripe = await getStripe();
            stripe.redirectToCheckout({ sessionId });
          }
        }
      });
      console.log("Checkout session created:", checkoutSessionRef.id);
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div className="points container3">
      <h3>Subscriptions</h3>
      <p className="first flex flex-col">
        {Object.entries(products).map(([productId, productData]) => (
          <div key={productId}>
            <h2 className="text-red-500 cursor-pointer">
              Plans (Current Plans: <span className="">{productData.name}</span>
              )
            </h2>
          </div>
        ))}

        <span
          style={{
            color: "rgba(0,0,0,0.3)",
            fontWeight: "100",
            fontSize: "14px",
          }}
        >
          Renewal date: <span>03-01-2023</span>
        </span>
      </p>

      <table className="w-full text-start">
        {Object.entries(products).map(([productId, productData]) => (
          <tr key={productId}>
            <td>
              <p className="font-semibold text-xl">{productData.name}</p>
              <span className="text-slate-400">{productData.description}</span>
            </td>
            <td>
              <button
                onClick={() => loadPricing(productData?.prices[0]?.priceId)}
                className="bg-pink-500 rounded-lg p-3 mb-3 text-yellow-50"
              >
                Subscribe
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
