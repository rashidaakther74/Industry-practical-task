//Practical 01: Student Result Management


// interface Student {
//     id: number;
//     name: string;
//     marks: number;
//     email?: string
// }


// const students: Student[] = [
//    {
//         id: 101,
//         name: "1",
//         marks: 30,
//    },
//    {
//         id: 102,
//         name: "2",
//         marks: 40,
//    },
//    {
//         id: 103,
//         name: "3",
//         marks: 50,
//    },
//    {
//         id: 104,
//         name: "4",
//         marks: 33,
//    },
//    {
//         id: 105,
//         name: "5",
//         marks: 20,
//    },

// ]

// function getPassedStudent(student: Student[]): Student[]{
//     return student.filter((student) => student.marks >=40);

// }
// console.log("pass kora students ra holo:", getPassedStudent(students))

// function getAverageMarks(students: Student[]): number{
//     const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
//     return totalMarks / students.length

// }
// console.log("student er average mark hobe:", getAverageMarks(students))


// function getStudentById(student: Student[], id: number): Student | undefined{
//     return students.find((student) => student.id === id)
// }
// console.log(getStudentById(105))



// Practical 02: Shopping Cart Calculator

// interface Product {
//      id: number;
//      name: string;
//      price: number;
//      quantity: number;
// }


// const cart: Product[] = [
//      { id: 1, name: "Mechanical Keyboard", price: 2500, quantity: 1 },
//      { id: 2, name: "Wireless Mouse", price: 1200, quantity: 1 },
//      { id: 3, name: "Mousepad", price: 300, quantity: 2 },
//      { id: 4, name: "USB-C Hub", price: 700, quantity: 1 },
// ];


// const calculateSubtotal = (cart: Product[]) =>
//      cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// // ২. ডিসকাউন্ট
// const calculateDiscount = (subtotal: number, discount: number = 0) =>
//      (subtotal * discount) / 100;

// function calculateGrandTotal(cart: Product[], discount: number = 0) {
//      const subtotal = calculateSubtotal(cart);
//      const discountAmount = calculateDiscount(subtotal, discount);
//      const grandTotal = subtotal - discountAmount;

     // console.log(
     //      `Cart Subtotal: ${subtotal} | Discount: ${discount}% | Discount Amount: ${discountAmount} | Grand Total: ${grandTotal}`
     // );
// }

// calculateGrandTotal(cart, 10);
// calculateGrandTotal(cart);


// Practical 03: Employee Role & Permission System


// type Role = "Admin" | "Manager" | "Employee";


// interface Employee {
//      id: number;
//      name: string;
//      role: Role;
// }

// function getPermissions(role: Role): string {
//      switch (role) {
//           case "Admin":
//                return "Manage Users, Manage Products, View Reports";
//           case "Manager":
//                return "Manage Products, View Reports";
//           case "Employee":
//                return "View Products";
//      }
// }

// function printEmployeeDetails(employee: Employee): void {
//      const permissions = getPermissions(employee.role);
//      // console.log(`Name: ${employee.name} | Role: ${employee.role} | Permissions: ${permissions}`);
// }

// const emp1: Employee = { id: 1, name: "Rahim", role: "Manager" };
// const emp2: Employee = { id: 2, name: "Karim", role: "Admin" };
// const emp3: Employee = { id: 3, name: "Sakib", role: "Employee" };


// printEmployeeDetails(emp1)



// Practical 04: API Response Handler


// interface SuccessResponse {
//      status: "success";
//      data: string;
// }


// interface ErrorResponse {
//      status: "error";
//      message: string;
// }

// type ApiResponse = SuccessResponse | ErrorResponse;


// function handleResponse(response: ApiResponse): string {
//      switch (response.status) {
//           case "success":
//                return `Success: ${response.data}`;

//           case "error":
//                return `Error: ${response.message}`;

//           default:
//                const check: never = response;
//                throw new Error(`Unhandled response: ${check}`);
//      }
// }

// const res1: ApiResponse = { status: "success", data: "User created successfully" };
// const res2: ApiResponse = { status: "error", message: "Email already exists" };
// const res3: ApiResponse = { status: "success", data: "Product added successfully" };

// console.log(handleResponse(res1));
// console.log(handleResponse(res2));
// console.log(handleResponse(res3));`




// Practical 05: Inventory Stock Management
// type StockStatus = "Out of Stock" | "Low Stock" | "Available";

// interface Product {
//      id: number;
//      name: string;
//      price: number;
//      stock: number;
// }

// type StockDictionary = {
//      [key: string]: number;
// };

// const inventory: Product[] = [
//      { id: 1, name: "Laptop", price: 75000, stock: 10 },
//      { id: 2, name: "Mouse", price: 500, stock: 3 },
//      { id: 3, name: "Keyboard", price: 1200, stock: 0 },
//      { id: 4, name: "Headphone", price: 2000, stock: 2 },
//      { id: 5, name: "Monitor", price: 15000, stock: 8 },
// ];

// function getStockStatus(stock: number): StockStatus {
//      if (stock === 0) return "Out of Stock";
//      if (stock >= 1 && stock <= 5) return "Low Stock";
//      return "Available";
// }

// function getLowStockProducts(products: Product[]): Product[] {
//      return products.filter((product) => getStockStatus(product.stock) === "Low Stock");
// }

// function createStockDictionary(products: Product[]): StockDictionary {
//      const stockMap: StockDictionary = {};
//      products.forEach((product) => {
//           stockMap[product.name] = product.stock;
//      });
//      return stockMap;
// }

// const statusSummary = inventory
//      .slice(0, 3)
//      .map((p) => `${p.name} - ${getStockStatus(p.stock)}`)
//      .join(" | ");

// const lowStockNames = getLowStockProducts(inventory)
//      .map((p) => p.name)
//      .join(", ");

// console.log(`${statusSummary} | Low Stock Products: ${lowStockNames}`);
// console.log(createStockDictionary(inventory));





// Practical 06: Safe Data Parser
// interface Address {
//      city?: string;
// }

// interface User {
//      id: number;
//      name: string;
//      address?: Address;
// }

// function isUser(payload: unknown): payload is User {
//      return (
//           typeof payload === "object" &&
//           payload !== null &&
//           "id" in payload &&
//           typeof (payload as { id: unknown }).id === "number" &&
//           "name" in payload &&
//           typeof (payload as { name: unknown }).name === "string"
//      );
// }

// function parseUserData(data: unknown): void {
//      if (isUser(data)) {
//           const city = data.address?.city ?? "Unknown City";
//           console.log(`User: ${data.name} | City: ${city}`);
//      } else {
//           console.log("Invalid user data");
//      }
// }

// const user1: unknown = {
//      id: 1,
//      name: "Rahim",
//      address: { city: "Moulvibazar" },
// };

// const user2: unknown = {
//      id: 2,
//      name: "Karim",
// };

// const user3: unknown = {
//      name: "Sakib",
// };

// parseUserData(user1);
// parseUserData(user2);
// parseUserData(user3);


