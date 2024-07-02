import { useState } from "react";
import TodoList from "../components/TodoList";
import { getServerSideTodos } from "../todoApi";

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

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        alert("POST success:\n" + JSON.stringify(responseData));
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
      <h1>Todo App</h1>
      <TodoList pageNumber={pageNumber} onPageChange={handlePageChange} />

      <form>
        <h2>Todo Post</h2>
        <label>
          User ID :
          <input
            type="number"
            name="field1"
            value={userId}
            onChange={handleForm1Change}
          />
        </label>
        <br />
        <label>
          Title :
          <input
            type="text"
            name="field2"
            value={title}
            onChange={handleForm2Change}
          />
        </label>
        <br />
        <label>
          Completed :
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={handleCompletedChange}
          />
        </label>
        <br />
      </form>
      <button onClick={handleSubmit}>Submit</button>
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
