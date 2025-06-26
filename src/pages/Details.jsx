import React from "react";
import { useSearchParams } from "react-router-dom";
import "./details.css";
const Details = () => {
  const [searchParams] = useSearchParams();
  const todoString = searchParams.get("todoList");
  const todoArray = todoString.split(",");
  return (
    <div>
      <div>Details</div>
      <div class="table-wrapper">
        <table>
          <tbody>
            {todoArray.map((todo, i) => (
              <tr key={i}>
                <td>{todo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
