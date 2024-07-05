
const Users = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="flex flex-wrap divide-y divide-gray-200">
        {data.map((user) => (
          <li key={user.id} className="py-4">
            <div className="flex flex-col items-center justify-center bg-[#9d9dfa] w-[320px] h-[230px] rounded-lg">
              <div className="flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-medium">{user.name}</h3>
                <p className="text-md text-gray-500">{user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
