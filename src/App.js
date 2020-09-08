import React from "react";
import "./styles.css";
import { Header } from "./Header";
import { ExportReactCSV } from "./ExportReactCSV";
import { Customers } from "./Customers";

export default function App() {
  const customers = () => {
    let custs = [];
    for (let i = 0; i <= 25; i++) {
      custs.push({
        firstName: `first${i}`,
        lastName: `last${i}`,
        email: `abc${i}@gmail.com`,
        address: `000${i} street city, ST`,
        zipcode: `0000${i}`
      });
    }
    return custs;
  };
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <h2>Customers</h2>
        </div>
        <div className="col-md-4 center">
          <ExportReactCSV csvData={customers()} fileName={"FileCSV"} />
        </div>
      </div>
      <Customers customers={customers()} />
    </div>
  );
}
