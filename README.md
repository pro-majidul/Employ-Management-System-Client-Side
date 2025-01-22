# Employee Management System 🚀

A robust web application designed to efficiently manage employee workflows, salaries, roles, and administrative tasks is a comprehensive solution tailored to meet the dynamic needs of modern businesses. This system acts as a centralized platform where organizations can streamline their operations, ensuring efficiency, accuracy, and security across various management layers. It bridges the gap between employees, HR personnel, and administrators, offering distinct access levels and customized functionalities for each user role.

---
## Live Demo 🌐
[Employee Management Website](https://employee-management-90aa8.web.app/)  



## Admin Credentials 🔑
- **Email**: harun23roshid@gmail.com
- **Password:** 6254385@B

## 🌟 Key Features

### 🔑 Authentication and User Roles
- **Email & Password Authentication** with validation.
- **Social Login** options (Google, GitHub).
- User role assignment during registration (Employee, HR).
- Admin accounts are securely created through the backend.

### 📋 Employee Dashboard
- Submit and track tasks with categories like Sales, Support, Content, etc.
- Editable and deletable entries for task management.
- **Payment History Table**: Track monthly salary transactions with pagination.

### 👥 HR Dashboard
- **Employee Management Table**: View, verify, and manage employee records.
- Toggle employee verification status.
- Generate payment requests for employees.
- Detailed employee data with visual insights (bar charts for salary trends).
- Filter employee work progress by name and month.

### 🛠️ Admin Panel
- Manage all employees and HR roles.
- Adjust salaries (only increment allowed).
- Fire employees (restrict login access).
- Approve payroll payment requests with unique salary dates.

### 🌐 General Features
- **Contact Us Page**: Allow visitors to send messages directly to the admin.
- Notifications using Sweet Alerts and Toasts for all CRUD operations and authentication feedback.
- JWT-based role-specific API protection and route guards.
- **Responsive Design** for mobile, tablet, and desktop views.
- Environment variables to protect sensitive Firebase and MongoDB credentials.

---

## 🔨 Technologies Used

### Frontend
- **React.js**: Component-based UI development.
- **Tailwind CSS**: For styling with utility classes.
- **TanStack Query**: Efficient data fetching and state management.
- **React Router DOM**: Seamless navigation.
- **imgbb API**: Image hosting for user photos.
- **Chart.js**: Data visualization for salary insights.

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: RESTful API development.
- **MongoDB**: Database for storing user and workflow data.
- **JWT**: Authentication and role-based access control.

### Deployment
- **Firebase**: Hosting the frontend.
- **Vercel**: Deploying the backend server.

---

## 💼 Workflows and Functionalities

1. **Employee Dashboard:**
   - Add tasks with categories and work hours.
   - View and manage tasks in a responsive table.
   - Track salary payments in a paginated history table.

2. **HR Features:**
   - Approve and verify employees.
   - Process payroll for verified employees only.
   - Filter and analyze employee performance data.

3. **Admin Privileges:**
   - Manage and promote employees to HR roles.
   - Approve salary payments with a unique month/year constraint.
   - Adjust salaries for employees and HRs.

4. **General UI/UX:**
   - Interactive forms with validation and feedback.
   - Dashboard views optimized for various user roles.
   - Intuitive navigation across private and public routes.

---

## 🚀 How to Run the Project

1. **Clone the Repositories:**
  
2. **Install Dependencies:**
   ```bash
   cd client && npm install
 
   ```

3. **Environment Variables:**
   - Create `.env` files in both client and server directories.
   - Add Firebase configuration and MongoDB credentials.

4. **Run the Project:**
   ```bash
   cd client && npm start

   ```

---

Feel free to explore, manage, and innovate with this Employee Management System! 😊
