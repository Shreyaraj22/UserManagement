// import React from "react";

// const AddEmp = () => {
//   return (
//     <div className="w-full p-4">
//       <div className="bg-white shadow-md rounded-lg p-4">
//         {/* Add Employee Title */}
//         <div className="p-4 border-b flex items-center">
//           <h4 className="m-0">Add Employee</h4>
//         </div>

//         <div className="mt-4 overflow-x-auto">
//           <form action="">
//             <div className="flex items-center space-x-6">
//               {/* Employee Name Label & Input Aligned Vertically */}
//               <div className="flex flex-col">
//                 <label className="p-4 text-gray-700">Employee Name</label>
//                 <div className= "h-9 pl-4">
//                 <input
//                   type="text"
//                   placeholder="Employee Name"
//                   className="w-60 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <label className="p-4 text-gray-700">Employee ID</label>
//                 <div className= "h-9 pl-4">
//                 <input
//                   type="text"
//                   placeholder="Employee ID"
//                   className="w-60 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <label className="p-4 text-gray-700">Designation</label>
//                 <div className= "h-9 pl-4">
//                 <input
//                   type="text"
//                   placeholder="Designation"
//                   className="w-60 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <label className="p-4 text-gray-700">Email</label>
//                 <div className= "h-9 pl-4">
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   className="w-60 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <label className="p-4 text-gray-700">Education</label>
//                 <div className= "h-9 pl-4">
//                 <input
//                   type="text"
//                   placeholder="Education"
//                   className="w-60 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <label className="p-4 text-gray-700">Address</label>
//                 <div className= "h-9 pl-4">
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   className="w-60 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <label className="p-4 text-gray-700">Salary</label>
//                 <div className= "h-9 pl-4">
//                 <input
//                   type="text"
//                   placeholder="Salary"
//                   className="w-60 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <label className="p-4 text-gray-700">Joining Date</label>
//                 <div className= "h-9 pl-4">
//                 <input
//                   type="text"
//                   placeholder="Joining Date"
//                   className="w-60 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <label className="p-4 text-gray-700">Performance</label>
//                 <div className= "h-9 pl-4">
//                 <input
//                   type="text"
//                   placeholder="Performance"
//                   className="w-60 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddEmp;
// import React from "react";

// const AddEmp = () => {
//   return (
//     <div className="w-full p-4">
//       <div className="bg-white shadow-md rounded-lg p-4">
//         {/* Add Employee Title */}
//         <div className=" border-b flex items-center">
//           <h4 className="m-0">Add Employee</h4>
//         </div>

//         <div className="mt-4">
//           <form>
//             {/* Ensuring Flex Wrap to Avoid Horizontal Scroll */}
//             <div className="flex flex-wrap gap-6">
//               {/* Employee Input Fields */}
//               {[
//                 "Employee Name",
//                 "Employee ID",
//                 "Designation",
//                 "Email",
//                 "Education",
//                 "Address",
//                 "Salary",
//                 "Joining Date",
//                 "Performance",
//               ].map((label, index) => (
//                 <div key={index} className="flex flex-col w-60">
//                   <label className="text-gray-700">{label}</label>
//                   <input
//                     type="text"
//                     placeholder={label}
//                     className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-end w-full">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddEmp;
// import React from "react";

//   const handleChange = (e) => {
//     console.log('event',e);
//   }
// const AddEmp = () => {
//   return (
//     <div className="w-full p-4">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         {/* Add Employee Title */}
//         <div className="border-b pb-2 mb-4">
//           <h4 className="text-lg font-semibold">Add Employee</h4>
//         </div>

//         <form>
//           {/* Employee Input Fields Grid Layout */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {[
//               "Employee Name",
//               "Employee ID",
//               "Designation",
//               "Email",
//               "Education",
//               "Address",
//               "Salary",
//               "Joining Date",
//               "Performance",
//             ].map((label, index) => (
//               <div key={index} className="flex flex-col">
//                 <label className="text-gray-700 font-medium">{label}</label>
//                 <input
//                   type="text"
//                   placeholder={label}
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             ))}

//             {/* Submit Button Aligned to Bottom Right */}
//             <div className="col-span-2 md:col-span-3 flex justify-end items-end">
//               <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEmp;

import React, { useState } from "react";
import { useContext } from "react";
import { listContext } from "../App";

const AddEmp = () => {
  const { employeeList, setEmployeeList } = useContext(listContext);

  const [formValue, setFormValue] = useState({
    EmployeeName: "",
    EmployeeId: "",
    Designation: "",
    Email: "",
    Education: "",
    Address: "",
    Salary: "",
    JoiningDate: "",
    Performance: "normal",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name", name);
    // console.log("value", value);
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeList([...employeeList, formValue]);
    setFormValue({
      EmployeeName: "",
      EmployeeId: "",
      Designation: "",
      Email: "",
      Education: "",
      Address: "",
      Salary: "",
      JoiningDate: "",
      Performance: "",
    });
  };
  console.log("employee-list", employeeList);

  return (
    <div className="w-full p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Add Employee Title */}
        <div className="border-b pb-2 mb-4">
          <h4 className="text-lg font-semibold">Add Employee</h4>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Employee Input Fields Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Employee Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Employee Name</label>
              <input
                type="text"
                placeholder="Employee Name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="EmployeeName"
                value={formValue?.EmployeeName}
                onChange={handleChange}
              />
            </div>

            {/* Employee ID */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Employee ID</label>
              <input
                type="text"
                placeholder="Employee ID"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="EmployeeId"
                value={formValue?.EmployeeId}
                onChange={handleChange}
              />
            </div>

            {/* Designation */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Designation</label>
              <input
                type="text"
                placeholder="Designation"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Designation"
                value={formValue?.Designation}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Email"
                value={formValue?.Email}
                onChange={handleChange}
              />
            </div>

            {/* Education */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Education</label>
              <input
                type="text"
                placeholder="Education"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Education"
                value={formValue?.Education}
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Address"
                value={formValue?.Address}
                onChange={handleChange}
              />
            </div>

            {/* Salary */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Salary</label>
              <input
                type="text"
                placeholder="Salary"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Salary"
                value={formValue?.Salary}
                onChange={handleChange}
              />
            </div>

            {/* Joining Date */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Joining Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="JoiningDate"
                value={formValue?.JoiningDate}
                onChange={handleChange}
              />
            </div>

            {/* Performance */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Performance</label>
              <select
                id=""
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                name="Performance"
                value={formValue?.Performance}
                onChange={handleChange}
              >
                <option value="normal">Normal</option>
                <option value="average">Average</option>
                <option value="excellent">Excellent</option>
              </select>
            </div>

            {/* Submit Button Aligned to Bottom Right */}
            <div className="col-span-2 md:col-span-3 flex justify-end items-end">
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmp;
