import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { User, Mail, ShieldCheck, LogOut } from "lucide-react";

const Profile = () => {
  const { user, handleUserLogout } = useContext(UserContext);

  if (!user) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-gray-600">
        Loading user info...
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4 py-12">
      <div className="border border-gray-200 rounded-2xl max-w-xl w-full p-8">
        <h2
          className="text-3xl font-bold bg-gradient-to-r from-green-600 via-green-400
           to-green-600 bg-clip-text text-transparent text-center mb-6"
        >
          Your Profile
        </h2>

        <div className="flex justify-center mb-6">
          <div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-green-300 via-green-400 to-green-600 
  text-white text-3xl font-bold flex items-center justify-center shadow-inner"
          >
            {user?.username?.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="space-y-6 text-gray-800">
          <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
            <User className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-semibold">{user.username}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
            <Mail className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-semibold">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-semibold capitalize">{user.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleUserLogout}
            className="bg-red-500 hover:bg-red-600 hover:scale-105 active:scale-95 transition-all duration-300 text-white flex items-center gap-2 py-2 px-6 rounded-md shadow-md"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
