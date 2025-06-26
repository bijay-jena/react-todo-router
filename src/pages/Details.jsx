import React from "react";
import "./details.css";
import { useLocation } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  const { todoList } = location.state;

  return (
    <div>
      <div>Details</div>
      <div class="table-wrapper">
        <table>
          <tbody>
            {todoList.map((todo, i) => (
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
