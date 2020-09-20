import Link from "next/link";
import axios from "../../utils/axios";

import Layout from "../../components/Layout";

const Post = ({ post }) => {
  return (
    <Layout>
      <h1>Post #{post.id}</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await axios.get("/");
  const posts = await res.data;

  const paths = posts.map((post) => `/posts/${post.id}`);
  // console.log(paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`/${params.id}`);
  const post = await res.data;

  return { props: { post } };
}

export default Post;
