import { toast } from "react-toastify";
import axiosSecureInstance from "../api/axiosSecureInstance";

interface User {
  name: string;
  email: string;
  isOnline: boolean;
  isActive: boolean;
  role: string;
  createdAt: Date;
}

const fetchAllUser = async (): Promise<User[]> => {
  try {
    const res = await axiosSecureInstance("/users");
    if (!res) {
      throw new Error("Failed to fetch user data");
    }
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
      throw error;
    } else {
      toast.error("An unexpected error occurred");
      throw new Error("An unexpected error occurred");
    }
  }
};
export { fetchAllUser };
