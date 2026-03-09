import React, { useEffect, useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import axios from  'axios';
import { STUDENTS_API } from '../../utils/server_apis'
import { Link } from 'react-router';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const getStudents = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(STUDENTS_API)
        setStudents(response.data.students)

        console.log(response.data.students)

        setIsLoading(false)
      } catch (error) {
        console.log("ERR: ", error);
      }
    }

    getStudents();
    
  }, [])

  return (
    <AdminLayout>
        <div className="min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg">
        
        <div className='flex items-center justify-between'>
          <h2 className="text-xl font-semibold p-4 border-b border-gray-200">
            Students
          </h2>
          <div className='mr-3'>
            <Link className='pointer bg-blue-500 text-white p-1 rounded hover:shadow' to={'/add-student'}>Add Student</Link>
          </div>
        </div>

        { isLoading ? <div className='py-1 px-2'>Loading...</div> :
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 border-b border-gray-200">Student ID</th>
              <th className="p-3 border-b border-gray-200">Student Name</th>
              <th className="p-3 border-b border-gray-200">Department Name</th>
              <th className="p-3 border-b border-gray-200 w-24">Student Email</th>
            </tr>
          </thead>
          <tbody>
            {students.length >0 && students.map((std) => (
              <React.Fragment key={std.id}>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border-b border-gray-200">{std.id}</td>
                  <td className="p-3 border-b border-gray-200">{std.name}</td>
                  <td className="p-3 border-b border-gray-200">{std.department?.name}</td>
                  <td className="p-3 border-b border-gray-200">{std.email}</td>
                </tr>
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

export default Students