import { useState } from "react";
import Avartar1 from "../images/avartar1.png";
import Avartar2 from "../images/avartar2.png";
import Avartar3 from "../images/avartar3.png";
import { Link } from "react-router-dom";

const authorsData = [
  {
    id: 1,
    avartar: Avartar1,
    name: "Embert boy",
    post: 3,
  },
  {
    id: 2,
    avartar: Avartar2,
    name: "Jackie Chan",
    post: 5,
  },
  {
    id: 3,
    avartar: Avartar3,
    name: "Sydney Sky",
    post: 0,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <div className="authors">
      {authors.length > 0 ? (
        <div className="container mx-auto authors-container grid grid-cols-4 py-10">
          {authors.map(({ id, avartar, name, post }) => {
            return (
              <Link to={`/posts/users/${id}`}>
                <div className="flex">
                <div className="author-avatar">
                  <img src={avartar} alt={`img of ${name}`} width="60px" />
                </div>
                <div className="post-info">
                  <h4>{name}</h4>
                  <p>{post} posts</p>
                </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center">
            No users/authors found.
          </h2>
        </div>
      )}
    </div>
  );
};

export default Authors;
