import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useSecureAxios from "./useSecureAxios";

const useEmployeData = () => {
    const { user, loading } = useAuth();
    const secureAxios = useSecureAxios();
    const { data: employees = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["all-employee"],
        enabled: user && !loading,
        queryFn: async () => {
            const res = await secureAxios.get("/employee-list");
            return res.data.map((employee) => ({
                ...employee,
                isVerified: employee.isVerified || false,
            }));
        },

        onError: (error) => {
            console.error("Error fetching employees:", error.message);
        },

    });
    return [employees, isLoading, isError, refetch]
};

export default useEmployeData;