import React from "react";
import { NavLink } from "react-router-dom";
import { listContext } from "../App";
import { useContext } from "react";
const ListEmp = () => {
  const { employeeList, setEmployeeList } = useContext(listContext);

  return (
    <div className="w-full p-4">
      <div className="mt-4">
        <div className="px-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center border-b pb-4">
              <h4 className="text-xl font-semibold">Employee List</h4>
              <NavLink
                to="/add"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Create New
              </NavLink>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-200">
                  <tr className="border-b">
                    <th className="p-2 text-left">SR.NO</th>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">ID</th>
                    <th className="p-2 text-left">Email</th>
                    <th className="p-2 text-left">Designation</th>
                    <th className="p-2 text-left">Performance</th>
                    <th className="p-2 text-left">Action</th>

                  </tr>
                </thead>
                <tbody>
                  {employeeList?.map((employee, index) => {
                    return (
                      <tr key={index+1} className="border-b">
                        <th className="p-2 text-left">{index+1}</th>
                        <td className="p-2 text-left">{employee?.EmployeeName}</td>
                        <td className="p-2 text-left">{employee?.EmployeeId}</td>
                        <td className="p-2 text-left">{employee?.Email}</td>
                        <td className="p-2 text-left">{employee?.Designation}</td>
                        <td className="p-2 text-left">{employee?.Performance}</td>
                        <td className="text-left">
                          <i className="fa-solid fa-eye pe-2 text-blue-500 pointer"></i>
                          <i className="fa-solid fa-pen-to-square pe-2 text-green-500 pointer"></i>
                          <i className="fa-solid fa-trash pe-2 text-red-500 pointer"></i>
                        </td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmp;
