import React from 'react'

const getAllEmployees = () => {
    const result = localStorage.getItem('userDetails');
    const originalUserList = JSON.parse(result);
    let filteredData = originalUserList.filter(data => data.designation !== "Manager");
    return filteredData;
}

function List({ employees, handleEdit, handleDelete }) {

    const employeesData = getAllEmployees();

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Designation</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                {console.log()}
                <tbody>
                    {employeesData.length > 0 ? (
                        employeesData.map((employee, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{employee.fullName}</td>
                                <td>{employee.emailId}</td>
                                <td>{employee.designation}</td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List