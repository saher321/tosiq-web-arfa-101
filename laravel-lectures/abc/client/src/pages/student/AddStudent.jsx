import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { useForm } from "react-hook-form";
import { ADD_DEPARTMENT_API } from "../../utils/server_apis";
import axios from "axios";

const AddDepartment = () => {
  const { register, handleSubmit } = useForm();

  const addDepartment = (data) => {
    try {
      axios.post(ADD_DEPARTMENT_API, data, {
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
        onSubmit={handleSubmit(addDepartment)}
        className="bg-white p-6 rounded-xl shadow-md w-96"
      >
        <div className="mb-4">
          <label
            htmlFor="department"
            className="block text-gray-700 font-semibold mb-2"
          >
            Department
          </label>
          <input
            type="text"
            id="department"
            {...register("department")}
            placeholder="Enter department name"
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

export default AddDepartment;
