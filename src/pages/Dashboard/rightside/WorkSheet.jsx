import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import useAuth from "../../../hooks/UseAuth";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { toast } from "react-toastify";
import { PiSpinnerLight } from "react-icons/pi";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
const WorkSheet = () => {
  const { user, } = useAuth();
  const secureAxios = useSecureAxios()
  // const [tasks, setTasks] = useState([]);

  const { data: tasks = [], refetch, isLoading } = useQuery({
    queryKey: ['tasks', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await secureAxios.get(`/work-sheet/${user?.email}`);
      return res.data;
    },
  });
  // console.log(tasks)

  const [formData, setFormData] = useState({
    task: 'Sales',
    hoursWorked: '',
    date: new Date(),
  });
  const [editingTask, setEditingTask] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  // task delete 
  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  // task add 
  const handleAddTask = async (e) => {
    e.preventDefault()
    if (!formData.hoursWorked) return toast.error('Please enter hours worked');

    const newTask = { ...formData, id: Date.now(), email: user?.email, name: user?.displayName };
    console.log(newTask)
    try {

      const res = await secureAxios.post('/work-sheet', newTask)
      console.log(res.data)
      if (res.data?.insertedId) {
        refetch()
        toast.success('Work Added Success')
      }
      // setTasks([newTask, ...tasks]);


    } catch (err) {
      console.log(err)
      toast.error(`${err.message}`)
    }

    // setTasks([newTask, ...tasks]);
    setFormData({ task: 'Sales', hoursWorked: '', date: new Date() });
  };


  // task edit button in table ,,, when click the table then which table data added in the hooks
  const handleEditTask = async (task) => {
    setEditingTask(task);
  };

  // task update in modal
  const handleUpdateTask = async () => {
    const res = await secureAxios.patch(`/work-sheet/${editingTask._id}`, editingTask)
    if (res.data.modifiedCount) {
      refetch()
      toast.success('task update success full')
    }
    setEditingTask('')

  };

  // task delete in table 
  const handleDeleteTask = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {

        const res = await secureAxios.delete(`/work-sheet/${id}`)
        if (res.data.deletedCount) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success"
          });
        }

      }
    });
  };

  return (
    <div className="space-y-5">
      {/* Input  */}
      <form
        onSubmit={handleAddTask}
        className="w-full grid md:grid-cols-4 gap-4 p-4 bg-white shadow-lg rounded-lg"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Task
          </label>
          <select
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            name="task"
            value={formData.task}
            onChange={handleInputChange}
          >
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="Content">Content</option>
            <option value="Paper-work">Paper-work</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Hour Worked
          </label>
          <input
            type="number"
            name="hoursWorked"
            placeholder="Hours Worked"
            value={formData.hoursWorked}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Date
          </label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
          >
            {isLoading ? <PiSpinnerLight className="text-2xl spin" /> : 'Add'}
          </button>
        </div>
      </form>


      {/*  Table */}
      <div className="overflow-x-auto w-full ">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Task</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Hours Worked</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Date</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((task) => (
                <tr key={task.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{task.task}</td>
                  <td className="px-4 py-2">{task.hoursWorked}</td>
                  <td className="px-4 py-2">{new Date(task.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <button
                      onClick={() => handleEditTask(task)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {editingTask && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded-lg shadow-md w-11/12 md:w-2/3 lg:w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-center">Update Task</h3>
            <div>
              <label>Task</label>
              <select
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                name="task"
                value={editingTask.task}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, task: e.target.value })
                }
              >
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Content">Content</option>
                <option value="Paper-work">Paper-work</option>
              </select>
            </div>
            <div>
              <label>Works Hours</label>

              <input
                type="number"
                name="hoursWorked"
                placeholder="Hours Worked"
                value={editingTask.hoursWorked}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, hoursWorked: e.target.value })
                }
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              />
            </div>
            <div>
              <label className="block">Date</label>
              <DatePicker
                selected={new Date(editingTask.date)}
                onChange={(date) => setEditingTask({ ...editingTask, date })}
                className="border block border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleUpdateTask}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setEditingTask(null)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default WorkSheet;
