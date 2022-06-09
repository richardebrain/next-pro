import ArticleItem from "./article-item";
const ArticleList = ({ articles }) => {
  return (
    <div className="flex items-center flex-col justify-center flex-wrap max-w-4xl mt-12 md:flex-row md:w-full ">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article}/>
         
      ))}
    </div>
  );
};

export default ArticleList;
