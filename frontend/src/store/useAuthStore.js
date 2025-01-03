import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js";

export const useAuthStore = create((set)=>({
    authUser : null,
    isLoggingIn : false,
    isSigningIn : false,
    isUpdatingProfiel : false,

    isCheckingAuth : true,
    checkAuth :async()=>{
        set({ isCheckingAuth: true }); // Ensure loading state is updated
        try {
            const res = await axiosInstance.get("/auth/check");
            console.log("Auth Response:", res.data); // Debugging response
            set({ authUser: res.data });
        } catch (error) {
            console.error("Error in checking authentication:", error.message);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },
    signup:async (data)=>{
        console.log(data);
    }
}))