import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function HomeLeft() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold">All Caterogy</h2>
      <div className="flex flex-col gap-2 mt-4">
        {categories.map((category) => (
          <NavLink
            className={
              "py-3 pl-8 hover:rounded-lg hover:bg-[#E7E7E7] text-xl font-medium"
            }
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default HomeLeft;
