import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";

const UseEmployee = () => {
    const secureAxios = useSecureAxios();
    const { data: employees = [], refetch } = useQuery({
        queryKey: ["all-Employees"],
        queryFn: async () => {
            const res = await secureAxios.get("/all-employee-list");
            return res.data;
        },
    });
    return [employees , refetch]
};

export default UseEmployee;