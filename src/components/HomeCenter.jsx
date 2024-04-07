import { useEffect, useState } from "react";
import NewsCart from "./NewsCart";

function HomeCenter() {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  return (
    <>
      <h2 className="text-2xl font-semibold mb-5">Dragon News Home</h2>

      <div className="space-y-8">
        {newses.map((news, index) => (
          <NewsCart key={index} news={news} />
        ))}
      </div>
    </>
  );
}

export default HomeCenter;
