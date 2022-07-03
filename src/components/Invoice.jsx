import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

async function fetchOrg() {
  let org = await fetch("http://localhost:3001/api/organization/fetch", {
    method: "GET",
  });

  return await org.json();
}

// sNo: "",
// orderNo: "",
// custName: "",
// amt: "",
// orderDate: "",
// statusUpdateDate: "",
// orderStatus: ""

async function generateInvoice(item) {
  let org;
  try {
    org = await fetchOrg();
    org = org.data;
  } catch (err) {
    console.log(err);
  }

  console.log(org);
  console.log(item);

  var doc = new jsPDF();

  // head
  autoTable(doc, {
    body: [
      [
        {
          content: "ProjectMurga",
          styles: {
            halign: "left",
            fontSize: 20,
            textColor: "#ffffff",
          },
        },
        {
          content: "Invoice",
          styles: {
            halign: "right",
            fontSize: 20,
            textColor: "#ffffff",
          },
        },
      ],
    ],
    theme: "plain",
    styles: {
      fillColor: "#3366ff",
    },
  });

  // right top
  autoTable(doc, {
    body: [
      [
        {
          content:
            "Reference: #INV0001" +
            "\nDate: 06/09/69" +
            "\nInvoice number: 123456",
          styles: {
            halign: "right",
          },
        },
      ],
    ],
    theme: "plain",
  });

  // middle address
  autoTable(doc, {
    body: [
      [
        {
          content:
            "Billed to:" +
            "\n Customer Name" +
            "\nBilling Address line 1" +
            "\nBilling Address line 2" +
            "\nZip code - City" +
            "\nIndia",
          styles: {
            halign: "left",
          },
        },
        {
          content:
            "Shipping address:" +
            "\n Customer Name" +
            "\nShipping Address line 1" +
            "\nShipping Address line 2" +
            "\nZip code - City" +
            "\nIndia",
          styles: {
            halign: "left",
          },
        },
        {
          content:
            "From:" +
            "\n Company Name" +
            "\nShipping Address line 1" +
            "\nShipping Address line 2" +
            "\nZip code - City" +
            "\nIndia",
          styles: {
            halign: "right",
          },
        },
      ],
    ],
    theme: "plain",
  });

  // amount
  autoTable(doc, {
    body: [
      [
        {
          content: "Total Amount:",
          styles: {
            halign: "right",
            fontSize: 14,
          },
        },
      ],
      [
        {
          content: "Price",
          styles: {
            halign: "right",
            fontSize: 20,
            textColor: "#3366ff",
          },
        },
      ],
      [
        {
          content: "Date: 2022-02-01",
          styles: {
            halign: "right",
          },
        },
      ],
    ],
    theme: "plain",
  });

  // Table
  autoTable(doc, {
    head: [["Items", "Category", "Quantity", "Total Amount"]],
    body: [
      ["eggs/chick/layer/grower", "chicken", "no_of_units", "100"],
      ["eggs/duckling/layer/grower", "duck", "no_of_units", "100"],
    ],
    theme: "striped",
    headStyles: {
      fillColor: "#343a40",
    },
  });

  autoTable(doc, {
    body: [
      [
        {
          content: "Terms & notes",
          styles: {
            halign: "left",
            fontSize: 14,
          },
        },
      ],
      [
        {
          content:
            "orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia" +
            "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum" +
            "numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
          styles: {
            halign: "left",
          },
        },
      ],
    ],
    theme: "plain",
  });

  autoTable(doc, {
    body: [
      [
        {
          content: "Centre footer",
          styles: {
            halign: "center",
          },
        },
      ],
    ],
    theme: "plain",
  });

  doc.save("test.pdf");
}

export { generateInvoice };
