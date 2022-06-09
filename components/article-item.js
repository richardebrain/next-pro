import Link from "next/link";
import ArticleIemStyles from '../styles/article-item.module.css';

const ArticleItem = ({ article }) => {
  return (
    
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <a className={ ArticleIemStyles.card}>
          <h3>{article.title} &rarr;</h3>
          <p>{article.body}</p>
        </a>
      </Link>
    
  );
};

export default ArticleItem;
