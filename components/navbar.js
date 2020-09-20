import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = ({ children }) => {
  return (
    <>
      <nav
        style={{ padding: "0" }}
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            className="navbar-nav ml-auto"
            style={{ height: "50px", padding: "0" }}
          >
            <Link href="/index">
              <a className={`nav-link ${styles.navlink}`}>Blog</a>
            </Link>
            <Link href="/posts/1">
              <a className={`nav-link ${styles.navlink}`}>Posts</a>
            </Link>
            <Link href="/todoapp">
              <a className={`nav-link ${styles.navlink}`}>Todo</a>
            </Link>
            <Link href="/form_1">
              <a className={`nav-link ${styles.navlink}`}>Form</a>
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
