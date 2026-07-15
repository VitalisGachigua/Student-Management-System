import { useState } from "react";

function AddStudent({students, setStudents}){
    
    const {name, setName} = useState("");

    return(
        <div className="max-w-xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-6">

                Add Student

            </h1>

            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full border p-3 rounded-lg"
            />

            <p className="mt-4">

                You typed:

                <strong> {name}</strong>

            </p>

        </div>
    );
}
export default AddStudent;
