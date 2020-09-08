import React from "react";
import { CSVLink } from "react-csv";

export const ExportReactCSV = ({ csvData, fileName }) => {
  const headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" }
  ];
  return (
    <CSVLink data={csvData} filename={fileName} headers={headers}>
      <button className="btn btn-primary">Export CSV</button>
    </CSVLink>
  );
};
