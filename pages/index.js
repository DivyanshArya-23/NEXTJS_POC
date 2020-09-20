import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi <strong>Divyansh here !!</strong>. Welcome to my blog{" "}
        </p>
      </section>
      <Link href="/posts/1">
        <li>
          <a>Data Fetching : Post</a>
        </li>
      </Link>
      {/* <Link href="/CssButton">
        <li>
          <a>CSS Support : Button</a>
        </li>
      </Link> */}
      <li>
        <a>Static File Serving : Image </a>
      </li>
      <Link href="/todoapp">
        <li>
          <a>Redux : Todo App</a>
        </li>
      </Link>
      <Link href="/form_1">
        <li>
          <a>Formik and Yup : Form</a>
        </li>
      </Link>
    </Layout>
  );
}
