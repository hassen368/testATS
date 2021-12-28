import {Switch , router, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/products">Products</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}