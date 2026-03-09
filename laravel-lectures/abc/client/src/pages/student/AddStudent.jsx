import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { useForm } from "react-hook-form";
import { ADD_STUDENT_API, DEPARTMENTS_API } from "../../utils/server_apis";
import axios from "axios";

const AddStudent = () => {

  const [departments, setDepartments] = useState([])
  const { register, handleSubmit } = useForm();


  useEffect(() => {

    const getDepartments = async () => {
      try {
        const depts = await axios.get(DEPARTMENTS_API)
        setDepartments(depts.data.departments)
      } catch (error) {
        console.log("ERR: ", error);
      }
    }

    getDepartments();
    
  }, [])

  const addStudent = (data) => {
    try {
      axios.post(ADD_STUDENT_API, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
    } catch (error) {
      console.log("ERR: ", error);
    }
  };
  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit(addStudent)}
        className="bg-white p-6 rounded-xl shadow-md w-96"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Enter name name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Department
          </label>

          <select
            {...register("department_id")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {departments.length > 0 && departments.map((dept) => {
              return (
                <option key={dept.id} value={dept.id} selected={dept.id == 1}>{dept.name}</option>
              )
            })}
          </select>

        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            placeholder="Enter phone"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddStudent;
