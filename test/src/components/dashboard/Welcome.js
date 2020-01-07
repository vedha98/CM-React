import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


export class Welcome extends React.Component {
    printpdf=()=>{
        var doc = new jsPDF();
        var col = ["s/n ","to No","Sent Amount"];
        var col1 = ["s/n","from No", "Recieved Amount"];
        var rows = [];
        var rows1 = [];
 

 
 
 let sent = this.props.sent
 let recieved = this.props.recieved
 
 
    sent.forEach((element,i) => {      
         var temp = [i,element.tono,element.amount];
         rows.push(temp);
 
     });    
     recieved.forEach((element,i) => {      
        var temp = [i,element.tono,element.amount];
        rows1.push(temp);

    });   
    let  finalY = doc.previousAutoTable.finalY;
         doc.text("Transactions of "+this.props.name, 14, 10);    
         doc.autoTable(col, rows, { startY: 30 });
       
         
         doc.autoTable(col1, rows1);
         doc.save('Test.pdf');
    }
    printpdf1=()=>{
       
            const input = document.getElementById("viewtrans");
            const sent = document.getElementById("sentview")
            const rechead = document.getElementById("rec-head")
            const senthead = document.getElementById("sent-head")
            
            let pdf = new jsPDF() 
            html2canvas(rechead,{ width: input.scrollWidth, height: input.scrollHeight })
              .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'png', 50, 0, 100, 80)
                html2canvas(input,{ width: input.scrollWidth, height: input.scrollHeight })
              .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'png', 50, 10, 100, 60)
                html2canvas(senthead,{ width: input.scrollWidth, height: input.scrollHeight })
              .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'png', 50, 80, 100, 80)
                html2canvas(sent,{ width: input.scrollWidth, height: input.scrollHeight })
              .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'png', 50, 90, 100, 60)
                pdf.save(`transactions.pdf`);
              });
                
              });
              });
              });
            
              
              
             
            
          
    }
    render() {
        return (
            <div className="welcome-wrap">
            Welcome back {this.props.name} ,<div><button className="add-btn" onClick={this.printpdf}>export pdf</button><button className="add-btn" onClick={this.props.showAdd}>add account</button></div>
        </div>
        );
    }
    componentDidMount=()=>{
    }
}

export default Welcome;
