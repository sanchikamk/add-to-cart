import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import ProductSkeleton from "./Components/CardSkeleton";
import { ShoppingCartModal } from "./Components/CartModal";
import axios from "axios";
import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const alertShownRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    let allProductsFromApi = [];
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        allProductsFromApi = response?.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        // Optionally set an error state to show to users
        // setError("Failed to load products. Please try again later.");
      } finally {
        setAllProducts(allProductsFromApi);
        setIsLoading(false); // Make sure to set loading to false when done
      }
    };

    setIsLoading(true); // Set loading to true when starting the fetch
    fetchProducts();
  }, []);

  const onAction = (act) => {
    setModalOpen(act);
  };

  const onAddToCart = (product) => {
    setSelectedProduct((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (!alertShownRef.current) {
          alertShownRef.current = true;
          alert("Item already in cart");
          setTimeout(() => {
            alertShownRef.current = false;
          }, 100);
        }
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const onRemoveFromCart = (product) => {
    setSelectedProduct((prevCart) =>
      prevCart.filter((item) => item.id !== product.id)
    );
  };

  return (
    <>
      <Navbar onAction={onAction} selectedProduct={selectedProduct} />
      <ShoppingCartModal
        isOpen={isModalOpen}
        onAction={onAction}
        selectedProduct={selectedProduct}
        onRemoveFromCart={onRemoveFromCart}
      />
      {isLoading && <ProductSkeleton count={8} />}
      {!isLoading && allProducts.length > 0 && (
        <ProductList allProducts={allProducts} onAddToCart={onAddToCart} />
      )}
      {!isLoading && allProducts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No products found</p>
        </div>
      )}
    </>
  );
}

export default App;
