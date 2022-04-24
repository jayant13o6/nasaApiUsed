import React from "react";
import { useState } from "react";
import data from "./data.json";

function Home2() {
  const [user, setUser] = useState("");
  const [filterData, setFilterData] = useState([]);
  let name, value;

  function handleInput(e) {
    e.preventDefault();
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const searchText = () => {
    console.log("button clicked::>", user.dataEntered);
    const newData = data.filter((val) => {
      if (!user.dataEntered) {
        console.log("val:", val);
      } else if (val.name.includes(user.dataEntered)) {
        // setFilterData(val);
        return val;
      }
    });
    setFilterData(newData);
    console.log("filter result:", filterData, newData);
  };

  if (filterData.length > 0) {
    return (
      <div className="main">
        <h1>React Search</h1>
        <form>
          <div className="form-group">
            <label htmlFor="data">Enter data</label>
            <input
              type="text"
              className="form-control"
              id="dataEntered"
              name="dataEntered"
              placeholder="Enter value"
              onChange={handleInput}
              value={user.dataEntered}
            />
          </div>
        </form>
        {/* <List input={inputText} /> */}
        <button typeof="submit" onClick={searchText}>
          Search
        </button>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  ///////not filtered
  return (
    <div className="main">
      <h1>React Search</h1>
      <form>
        <div className="form-group">
          <label htmlFor="data">Enter data</label>
          <input
            type="text"
            className="form-control"
            id="dataEntered"
            name="dataEntered"
            placeholder="Enter value"
            onChange={handleInput}
            value={user.dataEntered}
          />
        </div>
      </form>
      {/* <List input={inputText} /> */}
      <button typeof="submit" onClick={searchText}>
        Search
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.contact}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home2;
