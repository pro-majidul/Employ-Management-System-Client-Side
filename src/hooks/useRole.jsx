import useAuth from './UseAuth';
import useSecureAxios from './useSecureAxios';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { user, loading } = useAuth()
    const secureAxios = useSecureAxios()
    const { data: role, isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await secureAxios(`/users/role/${user?.email}`)
            return data.role
        },
    })
    // console.log(role)
    return [role, isLoading]
};

export default useRole;