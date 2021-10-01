import "./styles.css";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import UserInfo from "./components/UserInfo";
import Loader from "./components/Loader";
export default function App() {
  const [userInput, setUserInput] = useState("");
  const [userData, setUserData] = useState();
  const [userPosts, setUserPosts] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (userInput) {
      fetchUserPostData(userInput);
    }
  }, [userData]);
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (userInput <= 10 && userInput > 0) {
      fetchUserData(userInput);
    } else {
      setError("Please enter a valid number between 1 and 10 (inclusive)");
    }
  }
  async function fetchUserData(id) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch {
      setError("fetch error");
      setLoading(false);
    }
  }
  async function fetchUserPostData(id) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      const data = await response.json();
      setUserPosts(data);
      setLoading(false);
    } catch {
      setError("fetch error");
      setLoading(false);
    }
  }

  return (
    <div className="main flex-col">
      <img className="logo" src="react-search.png" alt="search" />
      <span>Please enter a number between 1 and 10 </span>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          className="input"
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder=""
        />
        <input className="input-btn" type="submit" value="Search" />
      </form>
      {loading && <Loader />}
      {error && <span className="alert">{error} </span>}
      {userData && <UserInfo user={userData} />}
      {userPosts && <Posts posts={userPosts} />}
    </div>
  );
}
