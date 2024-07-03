import { useState } from "react";
import TodoList from "../components/TodoList";
import { getServerSideTodos } from "../todoApi";
import axios from "axios";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleForm1Change = (event) => {
    setUserId(event.target.value);
  };

  const handleForm2Change = (event) => {
    setTitle(event.target.value);
  };

  const handleCompletedChange = (event) => {
    setCompleted(event.target.checked);
  };

  const handleSubmit = () => {
    const data = {
      userId: userId,
      title: title,
      completed: completed,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/todos", data)
      .then((response) => {
        alert("POST success:\n" + JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("POST error:\n" + error);
      });
  };

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <TodoList pageNumber={pageNumber} onPageChange={handlePageChange} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Todo Post</h2>
          <label>
            User ID :
            <input
              type="number"
              name="field1"
              value={userId}
              onChange={handleForm1Change}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
          <label>
            Title :
            <input
              type="text"
              name="field2"
              value={title}
              onChange={handleForm2Change}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
          <label style={{ display: "flex", alignItems: "center" }}>
            Completed :
            <input
              type="checkbox"
              name="completed"
              checked={completed}
              onChange={handleCompletedChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const pageNumber = 1;
  const itemsPerPage = 10;

  const todos = await getServerSideTodos(pageNumber, itemsPerPage);

  return {
    props: {
      todos,
    },
    revalidate: 60 * 60,
  };
}

export default Home;
