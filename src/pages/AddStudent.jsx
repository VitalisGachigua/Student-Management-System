import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddStudent({students, setStudents}){
    
    const [name, setName] = useState("");
    const [course, setCourse] =useState("")
    const [status ,setStatus]= useState("Active")
    const navigate =useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        const newStudent={
            id: Date.now(),
            name: name,
            course: course,
            status: status
        };

        setStudents([
            ...students,
            newStudent
        ]);

        setName("");
        setCourse("");
        setStatus("");
        navigate("/students");
    }
    
    return(
        <div className="max-w-xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-6">

                Add Student

            </h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full border p-3 rounded-lg"
            />
            <input
                type="text"
                placeholder="Course Name"
                value={course}
                onChange={(event) => setCourse(event.target.value)}
                className="w-full border p-3 rounded-lg"
            />
            <select
                type="text"
                placeholder="Status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="w-full border p-3 rounded-lg">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            <p className="mt-4">

                You typed:

                <strong> {name},{course}</strong>

            </p>
            <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-4"
                >
                    Add Student
                </button>
            </form>
            

        </div>
    );
}
export default AddStudent;
