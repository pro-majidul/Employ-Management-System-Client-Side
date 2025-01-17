import { useParams } from "react-router-dom";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const EmployeDetails = () => {
    const { email } = useParams()
    const axiosSecure = useSecureAxios()

    const { data: info = {} } = useQuery({
        queryKey: ['user-Info', email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/details/${email}`)
            return res.data
        }
    })
    console.log(info)

    return (
        <div>
            <h3>hi there</h3>
        </div>
    );
};

export default EmployeDetails;