import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { useForm } from "react-hook-form";
import { EDIT_DEPARTMENT_API, UPDATE_DEPARTMENT_API } from "../../utils/server_apis";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";

const EditDepartment = () => {
  const { register, handleSubmit, reset } = useForm();
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const singleDept = async () => {
      try {
        const response = await axios.get(`${EDIT_DEPARTMENT_API}/${params.id}`)
        if (response.data && response.data.status == true) {
          reset({'department': response.data.dept.name})
        } else {
          toast.error(response.data.message, { duration: 3000 });
        }
      } catch (error) {
        console.log("ERR: ", error)
      }
    }
    singleDept()
  }, [])

  const handleUpdateDept = async (data) => {
    try {

      let myData = {
        'id': params.id,
        'name': data.department
      }
      // {id: 1, name: dept 1}
      const response = await axios.post(UPDATE_DEPARTMENT_API, myData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      });

      if (response.data && response.data.status == true) {
        navigate('/departments');
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("ERR: ", error)
    }
  }
  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit(handleUpdateDept)}
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
          Update department
        </button>
      </form>
    </AdminLayout>
  );
}

export default EditDepartment;
