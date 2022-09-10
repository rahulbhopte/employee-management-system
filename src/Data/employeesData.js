const employeesData = [
  {
    userId: 1,
    emailId: "bhupesh@gmail.com",
    fullName: "Bhupesh Dubey",
    tasks: [],
    designation: "Manager"
  },
  {
    userId: 2,
    emailId: "rahul@gmail.com",
    fullName: "Rahul Bhopte",
    tasks: [
      {
        taskId: 1,
        taskName: "Do exercise",
        taskStatus: "Competed",
        assignedBy: 1,
        createdAt: "07092022"
      }
    ],
    designation: "Employee"
  },
  {
    userId: 3,
    emailId: "test@gmail.com",
    fullName: "Test User",
    tasks: [
      {
        taskId: 1,
        taskName: "Go fo Exam",
        taskStatus: "Completed",
        assignedBy: 1,
        createdAt: "07092022"
      }
    ],
    designation: "Employee"
  }
];
//   console.log(employeesData)

export { employeesData };