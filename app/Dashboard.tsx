import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [userValue, setUserValue] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 10;
  const lastIndex = currentPage * recordsPage;
  const firstIndex = lastIndex - recordsPage;
  const records = userValue.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(userValue.length / recordsPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
    } else if (currentPage <= 1) {
      console.log(currentPage);
      setCurrentPage(nPage);
    }
  };

  const nextPage = () => {
    if (currentPage < nPage) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
    } else if (currentPage >= nPage) {
      setCurrentPage(1);
    }
  };
  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((res) => {
        setUserValue(res.users);
      });
  }, [setUserValue]);
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Table User</strong>
      <div className="">
        <table className="  w-full text-gray-700">
          <thead className="bg-slate-100 text-gray-700 font-medium ">
            <tr>
              <td className="p-2 w-1/5">ID</td>
              <td className="w-1/5">Name</td>
              <td className="w-1/5">Email</td>
              <td className="w-1/5">Company Name</td>
              <td className="w-1/5">Department</td>
            </tr>
          </thead>
          <tbody>
            {records.map((result) => (
              <tr key={result.id} className="border border-gray-200 ">
                <td className="p-2">
                  <Link to={`users/${result.id}`}>#{result.id}</Link>
                </td>
                <td>
                  <Link to={`users/${result.id}`}>
                    {result.firstName} {result.lastName}
                  </Link>
                </td>
                <td>{result.email}</td>
                <td>{result.company.name}</td>
                <td>{result.company.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="mt-4">
          <ul className="flex justify-center">
            <li>
              <Link
                className="p-2 hover:bg-gray-200"
                href="#"
                onClick={prePage}
              >
                Prev
              </Link>
            </li>
            {numbers.map((number, index) => (
              <li key={index}>
                <Link
                  className="p-2 px-4 hover:bg-gray-200"
                  onClick={() => changeCPage(number)}
                >
                  {number}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="p-2 hover:bg-gray-200"
                href="#"
                onClick={nextPage}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;
