// import React from 'react'

// const AdminJobsList = () => {
//   return (
//     <div>AdminJobsList</div>
//   )
// }

// export default AdminJobsList




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminJobsList = () => {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1721/api/form/jobs-form-data');
        setJobsData(response.data.data.jobsList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  const downloadFile = (filePath) => {
    // Use the 'window.open' method to open the file URL in a new tab/window
    window.open(filePath, '_blank');
  };

  return (
    <div>
      <h1>Jobs Data</h1>
      <table>
        <thead>
          <tr>
            {/* ... Other table headers */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobsData.map((job) => (
            <tr key={job.form_career_id}>
              {/* ... Other table data */}
              <td>
                <button onClick={() => downloadFile(job.file_path)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminJobsList;






// import React, { useEffect, useState } from "react";
// import { Breadcrumb, Button, Card, Form, Modal } from "react-bootstrap";
// import { fetch } from "../../utils";
// import { Table } from "ka-table";
// import "ka-table/style.css";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { FaClipboardList } from "react-icons/fa";

// const bootstrapChildComponents = {
//     table: {
//         elementAttributes: () => ({
//             className: "table table-striped table-hover table-bordered ",
//         }),
//     },
//     tableHead: {
//         elementAttributes: () => ({
//             className: "thead-dark",
//         }),
//     },
//     noDataRow: {
//         content: () => "No Data Found",
//     },
// };

// const AdminJobsList = () => {
//     const [searchText, setSearchText] = useState("");
//     const [searchTextTwo, setSearchTextTwo] = useState("");
//     const [show, setShow] = useState(false);
//     const [showTwo, setShowTwo] = useState(false);
//     const [donateHeadsData, setDonateHeadsData] = useState({
//         list: [],
//         loading: false,
//     });



//     const getDonateHeadsList = async () => {
//         try {
//             setDonateHeadsData((prev) => ({ list: [], loading: true }));
//             const response = await fetch("form/jobs-form-data", "GET", null, null);

//             if (response.status === 200) {
//                 const { success, data } = response.data;
//                 if (success === true) {
//                     const jobs_list = data.jobsList;
//                     console.log('jobs', jobs_list)
//                     const tableData = await jobs_list.map((job, index) => {
//                         return {
//                             id: index + 1,
//                             full_name: job.full_name,
//                             email: job.email,
//                             phone_no: job.phone_no,
//                             address: job.address,
//                             city: job.city,
//                             state: job.state,
//                             pincode: job.pincode,
//                             file: job.file_path,

//                         };
//                     });
//                     setDonateHeadsData({ list: tableData, loading: false });
//                 }
//             }
//         } catch (error) {
//             setDonateHeadsData({ list: [], loading: false });
//         } finally {
//             setDonateHeadsData((prev) => ({ list: prev.list, loading: false }));
//         }
//     };
//     useEffect(() => {
//         getDonateHeadsList();
//     }, []);





//     return (
//         <div className="container-fluid">
//             <Breadcrumb className="p-2">
//                 <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
//                 <Breadcrumb.Item active>Donate</Breadcrumb.Item>
//             </Breadcrumb>

//             <section className="content">
//                 <div className="container-fluid">
//                     <Card>
//                         <Card.Header>
//                             <h4>
//                                 Donate Heads

//                             </h4>
//                         </Card.Header>
//                         <Card.Body>
//                             <div className="row">
//                                 <div className="co-sm-12">
//                                     <input
//                                         type="search"
//                                         value={searchText}
//                                         onChange={(event) => {
//                                             setSearchText(event.currentTarget.value);
//                                         }}
//                                         className="top-element pull-right m-2"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="row">
//                                 <div className="col-sm-12">
//                                     <Table
//                                         loading={{
//                                             enabled: donateHeadsData.loading,
//                                             text: "Loading data",
//                                         }}
//                                         columns={[
//                                             {
//                                                 key: "id",
//                                                 title: "#",
//                                                 width: "5%",
//                                             },
//                                             {
//                                                 key: "full_name",
//                                                 title: "Name",
//                                                 width: "40%",
//                                             },

//                                             {
//                                                 key: "email",
//                                                 title: "Email",
//                                                 width: "40%",
//                                             },

//                                             {
//                                                 key: "phone_no",
//                                                 title: "Phone",
//                                                 width: "15%",
//                                             },
//                                             {
//                                                 key: "address",
//                                                 title: "Address",
//                                                 width: "15%",
//                                             },
//                                             {
//                                                 key: "city",
//                                                 title: "City",
//                                                 width: "15%",
//                                             },
//                                             {
//                                                 key: "state",
//                                                 title: "State",
//                                                 width: "15%",
//                                             },
//                                             {
//                                                 key: "pincode",
//                                                 title: "Pin Code",
//                                                 width: "15%",
//                                             },

//                                             {
//                                                 key: "file",
//                                                 title: "File",
//                                                 width: "15%",
//                                             },


//                                         ]}


                              
//                                         data={donateHeadsData.list}
//                                         search={({
//                                             searchText: searchTextValue,
//                                             rowData,
//                                             column,
//                                         }) => {
//                                             if (column.key === "passed") {
//                                                 return (
//                                                     (searchTextValue === "false" && !rowData.passed) ||
//                                                     (searchTextValue === "true" && rowData.passed)
//                                                 );
//                                             }
//                                         }}
//                                         rowKeyField={"id"}
//                                         searchText={searchText}
//                                         noData={{
//                                             text: "No Data Found",
//                                         }}
//                                         childComponents={bootstrapChildComponents}
//                                     />
//                                 </div>
//                             </div>


//                         </Card.Body>
//                         <Card.Footer></Card.Footer>
//                     </Card>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default AdminJobsList;
