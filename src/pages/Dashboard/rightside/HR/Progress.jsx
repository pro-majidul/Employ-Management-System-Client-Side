import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../../hooks/useSecureAxios";

const Progress = () => {
    const SecureAxios = useSecureAxios()
    const { data: tasks = [] } = useQuery({
        queryKey: ['employee-Task'],
        queryFn: async () => {
            const res = await SecureAxios.get('/work-sheet')
            console.log(res.data)
        }
    })
    console.log(tasks)
    return (
        <div>

        </div>
    );
};

export default Progress;