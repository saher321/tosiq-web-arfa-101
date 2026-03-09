import React, { useEffect, useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import axios from  'axios';
import { DEPARTMENTS_API } from '../../utils/server_apis'
import { Link } from 'react-router';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {

    const getDepartments = async () => {
      try {
        setIsLoading(true)
        const depts = await axios.get(DEPARTMENTS_API)
        setDepartments(depts.data.departments)

        setIsLoading(false)
      } catch (error) {
        console.log("ERR: ", error);
      }
    }

    getDepartments();
    
  }, [])

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <AdminLayout>
        <div className="min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg">
        
        <div className='flex items-center justify-between'>
          <h2 className="text-xl font-semibold p-4 border-b border-gray-200">
            Departments & Students
          </h2>
          <div className='mr-3'>
            <Link className='pointer bg-blue-500 text-white p-1 rounded hover:shadow' to={'/add-department'}>Add Department</Link>
          </div>
        </div>

        { isLoading ? <div className='py-1 px-2'>Loading...</div> :
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 border-b border-gray-200">Department ID</th>
              <th className="p-3 border-b border-gray-200">Department Name</th>
              <th className="p-3 border-b border-gray-200 w-24">Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.length >0 && departments.map((dept) => (
              <React.Fragment key={dept.id}>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border-b border-gray-200">{dept.id}</td>
                  <td className="p-3 border-b border-gray-200">{dept.name}</td>
                  <td className="p-3 border-b border-gray-200">
                    <button
                      onClick={() => toggle(dept.id)}
                      className="text-blue-600 text-sm font-bold cursor-pointer hover:underline"
                    >
                      {openId === dept.id ? "Hide" : "View"}
                    </button>
                  </td>
                </tr>

                {openId === dept.id && (
                  <tr>
                    <td colSpan={3} className="p-4 bg-gray-50">
                      <table className="w-full border border-gray-200 text-sm">
                        <thead>
                          <tr className="bg-gray-100 text-left">
                            <th className="p-2 border border-gray-200">Image</th>
                            <th className="p-2 border border-gray-200">Student ID</th>
                            <th className="p-2 border border-gray-200">Name</th>
                            <th className="p-2 border border-gray-200">Phone</th>
                            <th className="p-2 border border-gray-200">Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                          dept?.students?.length > 0 && dept?.students?.map((student) => (
                            <tr key={student.id} className="bg-white">
                              <td className="p-2 border border-gray-200">
                                <img
                                  src={student.image}
                                  alt={student.name}
                                  className="w-8 h-8 rounded-full"
                                />
                              </td>
                              <td className="p-2 border border-gray-200">{student.id}</td>
                              <td className="p-2 border border-gray-200">{student.name}</td>
                              <td className="p-2 border border-gray-200">{student.phone}</td>
                              <td className="p-2 border border-gray-200">{student.email}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        }
      </div>
    </div>
    </AdminLayout>
  )
}

export default Departments