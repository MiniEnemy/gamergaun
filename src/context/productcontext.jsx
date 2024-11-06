import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext(undefined);
const API = "https://ggapi-production.up.railway.app/api/products";

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async (url) => {
    try {
      const res = await axios.get(url);
      const productsData = await res.data;
      setProducts(productsData); // Store the fetched data in state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts(API); // Pass the API URL to the function
  }, []);

  return (
    <AppContext.Provider value={{ products }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
