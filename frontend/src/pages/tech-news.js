import React, { useEffect, useState } from "react";

export default function TechNews() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // fetch data from api
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=dbab5aaa60bc4cea955f38da468344a2"
    )
      .then((resp) => resp.json())
      .then((json) => setArticles(json.articles));
  }, []);
  return (
    <div className="">
      <h1 className="text-xl font-bold text-red-500 mb-4">TechNews</h1>
      <ul className="text-left list-disc">
        {articles.map((article) => (
          <li className="hover:text-underline">
            <a className="text-blue-500" href={article.url}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
