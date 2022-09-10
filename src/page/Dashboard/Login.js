import React, { useEffect, useState } from "react";
import { employeesData } from "../../Data/employeesData";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");

    const handleValidation = (event) => {
        let formIsValid = true;

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }
        return formIsValid;
    };

    const fetchUser = () => {
        const result = getAllEmployees();
        if (result) {
            const loggedInUser = result.filter(data => data.emailId === email);
            if (loggedInUser && loggedInUser.length > 0) {
                // navigate to manger's dashboard or employee's dashboard based on the email id
                localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser[0]));
                if (loggedInUser[0].designation === "Manager") {
                    // route to admin dashboard
                    navigate("/taskBorad");
                } else {
                    // route to employee dashboard
                }
            } else {
                // show error that invalid email id
            }
        } else {
            // throw error
        }
    }

    const addEmployee = (firstName, lastName, emailId) => {
        const newUser = {
            userId: employeesData.length + 1,
            emailId: emailId,
            fullName: firstName + ' ' + lastName,
            tasks: [],
            designation: "Employee"
        }

        const result = localStorage.getItem('userDetails');
        const originalUserList = JSON.parse(result);
        originalUserList.push(newUser);
        localStorage.setItem('userDetails', JSON.stringify(originalUserList));
        console.log("employee : ", originalUserList);
    }

    const deleteEmployee = (id) => {
        const result = localStorage.getItem('userDetails');
        const originalUserList = JSON.parse(result);
        let index;
        originalUserList.map((data, i) => {
            if (data.userId === id) {
                index = i;
            }
        })
        originalUserList.splice(index, 1);
        localStorage.setItem('userDetails', JSON.stringify(originalUserList));
    }

    const getAllEmployees = () => {
        const result = localStorage.getItem('userDetails');
        const originalUserList = JSON.parse(result);
        return originalUserList;
    }

    const getLoggedInUserDetails = () => {
        const result = localStorage.getItem('loggedInUser');
        const loggedInUser = JSON.parse(result);
        return loggedInUser;
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        const result = handleValidation();
        if (result) {
            fetchUser();
        }
    };

    const addTaskForEmployee = (taskName, userId) => {
        const result = localStorage.getItem('userDetails');
        const originalUserList = JSON.parse(result);
        const loggedInUser = localStorage.getItem('loggedInUser');
        originalUserList = originalUserList.map((data, i) => {
            if (data.userId === userId) {
                let taskData = {
                    taskId: data.tasks.length + 1,
                    taskName: taskName,
                    taskStatus: "In Progress",
                    assignedBy: loggedInUser.userId,
                    createdAt: new Date()
                }
                data.tasks.push(taskData);
            }
        });
        localStorage.setItem('userDetails', JSON.stringify(originalUserList));
    }

    const updateTaskStatus = (status, taskId, userId) => {
        const result = localStorage.getItem('userDetails');
        const originalUserList = JSON.parse(result);
        let index;
        originalUserList = originalUserList.map((data) => {
            if (data.userId === userId) {
                if (data.tasks.length > 0) {
                    data.tasks.map((taskData) => {
                        if (taskData.taskId === taskId) {
                            taskData.status = status;
                        }
                    })
                }
            }
        });
        localStorage.setItem('userDetails', JSON.stringify(originalUserList));
    }

    // useEffect(() => {
    //     if (employeesData) {
    //         localStorage.setItem('userDetails', JSON.stringify(employeesData));
    //     }
    // }, [])

    return (
        <div className="App">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <form id="loginform" onSubmit={loginSubmit}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EmailInput"
                                    name="EmailInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {emailError}
                                </small>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
