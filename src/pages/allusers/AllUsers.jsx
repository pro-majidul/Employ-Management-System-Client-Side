import React, { useEffect, useState } from "react";
import usePublicAxios from "./../../hooks/usePublicAxios";

const AllUsers = () => {
  const publicAxios = usePublicAxios();
  const [info, setInfo] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await publicAxios.get("/users");
        setInfo(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const sortedUsers = [...info].sort((a, b) => {
    return sortOrder === "asc" ? a.salary - b.salary : b.salary - a.salary;
  });

  return (
    <div className="container mx-auto p-6 mt-28">
      <h2 className="text-3xl font-bold text-center mb-6">All Users</h2>
      <div className="flex justify-end mb-4 md:mb-8">
        <select
          className="px-4 py-2 border text-black rounded-md"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort by Salary (Ascending)</option>
          <option value="desc">Sort by Salary (Descending)</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedUsers.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.designation}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="mt-2 text-green-600 font-bold">৳ {user.salary}</p>
            <span
              className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                user.role === "Admin" ? "bg-red-500 text-white" : "bg-blue-500 text-white"
              }`}
            >
              {user.role}
            </span>
            {user.isVerified && (
              <span className="mt-2 text-green-500 text-sm">✔ Verified</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
