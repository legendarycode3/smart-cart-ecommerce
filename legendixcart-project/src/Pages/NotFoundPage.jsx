//  import { Link } from 'react-router-dom';

import { Header } from "../components/Header";

// import './Header.css'
Header

export function NotFoundPage() {
  return (
    <>
      <Header />

      <h1>404 - Page Not Found</h1>

      <p> Sorry, the page you are looking for does not exist. </p>
    </>
  );
}
