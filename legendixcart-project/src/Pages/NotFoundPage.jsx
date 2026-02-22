//  import { Link } from 'react-router-dom';

import { Header } from "../components/Header";

// import './Header.css'

export function NotFoundPage({cart}) {
  return (
    <>
      <Header cart={cart} />

      <h1>404 - Page Not Found</h1>

      <p> Sorry, the page you are looking for does not exist. </p>
    </>
  );
}
