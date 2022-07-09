import {Button, Modal} from 'react-bootstrap';
import { useState } from 'react'; 
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';

async function generateInvoice(item){
    var doc = new jsPDF();
    let brand = 'ProjectMurga';
    // head
    autoTable(doc, {
        body: [
            [
            {
                content: brand,
                styles: {
                halign: 'lef'+'t',
                fontSize: 20,
                textColor: '#ffffff'
                }
            },
            {
                content: 'Invoice',
                styles: {
                halign: 'right',
                fontSize: 20,
                textColor: '#ffffff'
                }
            }
            ],
        ],
        theme: 'plain',
        styles: {
            fillColor: '#3366ff'
        }
    });
    
    // right top
    autoTable(doc, {
        body: [
            [
            {
                content: 'Reference: #INV0001'
                +'\nDate: 2022-01-27'
                +'\nInvoice number: 123456',
                styles: {
                halign: 'right'
                }
            }
            ],
        ],
        theme: 'plain'
    });

    // middle address
    autoTable(doc, {
        body: [
          [
            {
              content: 'Billed to:'
              +'\n item.'
              +'\nBilling Address line 1'
              +'\nBilling Address line 2'
              +'\nZip code - City'
              +'\nCountry',
              styles: {
                halign: 'left'
              }
            },
            {
              content: 'Shipping address:'
              +'\nJohn Doe'
              +'\nShipping Address line 1'
              +'\nShipping Address line 2'
              +'\nZip code - City'
              +'\nCountry',
              styles: {
                halign: 'left'
              }
            },
            {
              content: 'From:'
              +'\nCompany name'
              +'\nShipping Address line 1'
              +'\nShipping Address line 2'
              +'\nZip code - City'
              +'\nCountry',
              styles: {
                halign: 'right'
              }
            }
          ],
        ],
        theme: 'plain'
    });

    // amount 
    autoTable(doc, {
        body: [
          [
            {
              content: 'Total Amount:',
              styles: {
                halign:'right',
                fontSize: 14
              }
            }
          ],
          [
            {
              content: item.price,
              styles: {
                halign:'right',
                fontSize: 20,
                textColor: '#3366ff'
              }
            }
          ],
          [
            {
              content: 'Date: 2022-02-01',
              styles: {
                halign:'right'
              }
            }
          ]
        ],
        theme: 'plain'
    });

    // item.User.first_name + " " + item.User.last_name
    // item.unit_id
    // item.type_of_unit
    // item.req_no_of_units
    // item.price

    // Table
    autoTable(doc, {
        head: [['Items', 'Category', 'Quantity','Total Amount']],
        body: [
          [item.unit_id, item.type_of_unit, item.req_no_of_units, item.price],
        ],
        theme: 'striped',
        headStyles:{
          fillColor: '#343a40'
        }
    });
  
    autoTable(doc, {
        body: [
            [
            {
                content: 'Terms & notes',
                styles: {
                halign: 'left',
                fontSize: 14
                }
            }
            ],
            [
            {
                content: 'orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'
                +'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
                +'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium',
                styles: {
                halign: 'left'
                }
            }
            ],
        ],
        theme: "plain"
    });
  
    autoTable(doc, {
        body: [
            [
            {
                content: 'Uniquely identified uuid',
                styles: {
                halign: 'center'
                }
            }
            ]
        ],
        theme: "plain"
    });

    doc.save("test.pdf");
}

function InvoicePopup(props) {

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InvoicePopup