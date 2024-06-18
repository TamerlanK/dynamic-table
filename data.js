const employees = [
  {
    employeeId: 1,
    name: "John Doe",
    age: 30,
    department: "Engineering",
    city: "New York",
  },
  {
    employeeId: 2,
    name: "Jane Smith",
    age: 25,
    department: "Marketing",
    city: "San Francisco",
  },
  {
    employeeId: 3,
    name: "Sam Brown",
    age: 45,
    department: "Human Resources",
    city: "Chicago",
  },
]

const products = [
  {
    productId: 101,
    productName: "Laptop",
    category: "Electronics",
    price: 1200,
    stock: 50,
  },
  {
    productId: 102,
    productName: "Smartphone",
    category: "Electronics",
    price: 800,
    stock: 100,
  },
  {
    productId: 103,
    productName: "Desk Chair",
    category: "Furniture",
    price: 150,
    stock: 200,
  },
]

const orders = [
  {
    orderId: 1001,
    customerName: "Alice Johnson",
    orderDate: "2023-06-15",
    totalAmount: 250.75,
    status: "Shipped",
  },
  {
    orderId: 1002,
    customerName: "Bob Lee",
    orderDate: "2023-06-16",
    totalAmount: 499.99,
    status: "Pending",
  },
  {
    orderId: 1003,
    customerName: "Charlie Kim",
    orderDate: "2023-06-17",
    totalAmount: 89.95,
    status: "Delivered",
  },
]

const courses = [
  {
    courseId: 301,
    courseName: "Introduction to Programming",
    instructor: "Dr. Smith",
    credits: 3,
    semester: "Fall 2023",
  },
  {
    courseId: 302,
    courseName: "Advanced Mathematics",
    instructor: "Prof. Johnson",
    credits: 4,
    semester: "Spring 2024",
  },
  {
    courseId: 303,
    courseName: "Modern Art History",
    instructor: "Dr. Williams",
    credits: 2,
    semester: "Summer 2024",
  },
]

const books = [
  {
    bookId: 501,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationYear: 1960,
  },
  {
    bookId: 502,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publicationYear: 1949,
  },
  {
    bookId: 503,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publicationYear: 1851,
  },
]

const projects = [
  {
    projectId: 401,
    projectName: "Website Redesign",
    manager: "Alice Davis",
    budget: 50000,
    deadline: "2023-12-31",
  },
  {
    projectId: 402,
    projectName: "Mobile App Development",
    manager: "Bob Wilson",
    budget: 75000,
    deadline: "2024-03-31",
  },
  {
    projectId: 403,
    projectName: "Cloud Migration",
    manager: "Charlie White",
    budget: 100000,
    deadline: "2024-06-30",
  },
]

const movies = [
  {
    movieId: 601,
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: "Sci-Fi",
  },
  {
    movieId: 602,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    genre: "Crime",
  },
  {
    movieId: 603,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    genre: "Crime",
  },
]

let users = [
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 35,
    mail: "jane.smith@example.com",
    address: "Canada",
    phone: "555-123-45-67",
    birthDate: "15.03.1989",
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    age: 28,
    mail: "michael.johnson@example.com",
    address: "UK",
    phone: "555-234-56-78",
    birthDate: "22.07.1995",
  },
  {
    firstName: "Emily",
    lastName: "Williams",
    age: 32,
    mail: "emily.williams@example.com",
    address: "Australia",
    phone: "555-345-67-89",
    birthDate: "30.11.1991",
  },
  {
    firstName: "David",
    lastName: "Brown",
    age: 45,
    mail: "david.brown@example.com",
    address: "Germany",
    phone: "555-456-78-90",
    birthDate: "05.05.1979",
  },
  {
    firstName: "Sophia",
    lastName: "Jones",
    age: 29,
    mail: "sophia.jones@example.com",
    address: "France",
    phone: "555-567-89-01",
    birthDate: "10.10.1994",
  },
]

export { employees, products, orders, courses, books, projects, movies, users }
