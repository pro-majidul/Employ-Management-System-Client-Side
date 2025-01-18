import UseEmployee from '../../../../hooks/UseEmployee';

const AllEmployCardView = () => {
    const [employees, refetch] = UseEmployee()
    console.log(employees)
    return (
        <div>

        </div>
    );
};

export default AllEmployCardView;