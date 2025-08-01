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
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 border border-green-100">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Your Profile
        </h2>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <User className="text-green-500" />
            <span className="font-medium">Full Name:</span>
            <span>{user.username}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-green-500" />
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-500" />
            <span className="font-medium">Role:</span>
            <span className="capitalize">{user.role}</span>
          </div>

          <div className="flex justify-center items-center mt-5 ">
            <button
              onClick={handleUserLogout}
              className="bg-red-500 hover:bg-red-600 transition-all duration-300 hover:scale-105
             hover:translate-y-2 flex items-center gap-2 py-2 px-8 text-sm rounded-md cursor-pointer text-white"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
