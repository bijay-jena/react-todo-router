import { useParams, useSearchParams } from "react-router-dom";

const TodoDetails = () => {
  /**
   * { id: "Something"}
   * { id } = { id: "Something"}
   *
   * id = "Something"
   */
  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const ref = searchParams.get("ref");

  return (
    <div>
      <h3>Todo Detail</h3>
      <p>Todo ID: {id}</p>
      {ref && <p>Todo Name: {ref}</p>}
    </div>
  );
};

export default TodoDetails;
