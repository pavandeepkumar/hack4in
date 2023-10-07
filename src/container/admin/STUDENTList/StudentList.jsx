import React from "react";

const StudentResultList = () => {
  return (
    <div>
      <p className="text-center text-3xl">This is a Result table.</p>
      <table className="w-80 border-collapse mx-auto my-20">
        <thead>
          <tr>
            <th className="bg-gray-200 p-2 border">User Email</th>
            <th className="bg-gray-200 p-2 border">Exam Name</th>
            <th className="bg-gray-200 p-2 border">Exam Date</th>
            <th className="bg-gray-200 p-2 border">Result Status</th>
            <th className="bg-gray-200 p-2 border">Your Score</th>
            <th className="bg-gray-200 p-2 border">Total Marks</th>
            <th className="bg-gray-200 p-2 border">Total Question</th>
            <th className="bg-gray-200 p-2 border">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">user@gmail.com</td>
            <td className="p-2 border">Sunil</td>
            <td className="p-2 border">19/09/2023</td>
            <td className="p-2 border">Pass</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full mr-2">
                Edit
              </button>
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">user@gmail.com</td>
            <td className="p-2 border">Sunil</td>
            <td className="p-2 border">19/09/2023</td>
            <td className="p-2 border">Pass</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full mr-2">
                Edit
              </button>
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">user@gmail.com</td>
            <td className="p-2 border">Sunil</td>
            <td className="p-2 border">19/09/2023</td>
            <td className="p-2 border">Pass</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full mr-2">
                Edit
              </button>
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">user@gmail.com</td>
            <td className="p-2 border">Sunil</td>
            <td className="p-2 border">19/09/2023</td>
            <td className="p-2 border">Pass</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full mr-2">
                Edit
              </button>
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">user@gmail.com</td>
            <td className="p-2 border">Sunil</td>
            <td className="p-2 border">19/09/2023</td>
            <td className="p-2 border">Pass</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full mr-2">
                Edit
              </button>
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">user@gmail.com</td>
            <td className="p-2 border">Sunil</td>
            <td className="p-2 border">19/09/2023</td>
            <td className="p-2 border">Pass</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full mr-2">
                Edit
              </button>
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">user@gmail.com</td>
            <td className="p-2 border">Sunil</td>
            <td className="p-2 border">19/09/2023</td>
            <td className="p-2 border">Pass</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">10</td>
            <td className="p-2 border">
              <button className="p-1  bg-blue-500 text-white rounded-full mr-2">
                Edit
              </button>
              <button className="p-1 px-2 bg-blue-500 text-white rounded-full">
                Delete
              </button>
            </td>
          </tr>
          {/* Repeat this row for other data */}
        </tbody>
      </table>
    </div>
  );
};

export default StudentResultList;
