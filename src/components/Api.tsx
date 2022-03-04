import { CSSProperties, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Api() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div  className="block mx-auto bg-gray-600 rounded-lg" style={productContainer}>
      <h2>API</h2>
      <div style={menuButtons}>
        <Link style={LinkStyle} to="/productPageSpirits">
          SPRIT
        </Link>
        <Link style={LinkStyle} to="/productPageWine">
          VIN
        </Link>
      </div>
      <div>
        <ul style={listStyle}>
          <h3>Lista på idioter</h3>
          {posts.map((post: { name: string }) => (
            <li key={posts.id}>{post.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Api;

const productContainer: CSSProperties = {
  display: "flex",
  width:"30rem",
  flexDirection: "column",
  
  borderRadius: "5rem",
  color: "white",
  alignItems: "center",
  justifyContent: "space-evenly",
  fontSize: "1.2rem",
  textAlign: "center",
};

const menuButtons: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  width: "15rem",
};

const LinkStyle: CSSProperties = {
  display: "flex",
  textDecoration: "none",
  height: "3rem",
  width: "10rem",
  background: "lightblue",
  borderRadius: "8rem",
  padding: "0.5rem",
  margin: "1rem",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
};

const listStyle: CSSProperties = {
  listStyleType: "none",
  padding: 0,
};
