import Head from "next/head";
import ArticleList from "../components/article-list";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title> WebDev Richy</title>
        <meta name="keywords" content="web development, next js" />
      </Head>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
