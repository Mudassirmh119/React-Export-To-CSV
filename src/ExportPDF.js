import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
// import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      people: [
        { name: "Keanu Reeves", profession: "Actor", lastName:'Heasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssselo' },
        { name: "Lionel Messi", profession: "Football Player", lastName:'Heelassdvasaasdasasdasdasdasdasdasdasdasdasdcascascsdcsdcsacsadcscasco' },
        { name: "Cristiano Ronaldo", profession: "Football Player", lastName:'Heasdvvascdsacasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdaasdcsadcelo' },
        { name: "Jack Nicklaus", profession: "Golf Player", lastName:'Heelosadcsdasdadadasdasdasdasdasdsadasdasdasdasdasdasdcasdc' },
      ]
    }
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["NAME", "PROFESSION", "Last Name"]];

    const data = this.state.people.map(elt=> [elt.name, elt.profession, elt.lastName]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }

  render() {
    return (
      <div>
        <button onClick={() => this.exportPDF()}>Generate Report</button>
      </div>
    );
  }
}

export default App;
