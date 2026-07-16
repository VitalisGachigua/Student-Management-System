
import StudentCard from "../components/StudentCard";

function Students({students, setStudents }){
    function deleteStudent(id) {

    const updatedStudents = students.filter(function(student){

        return student.id !== id;

    });
    function toggleStatus(id) {

    const updatedStudents = students.map((student) => {

        if (student.id === id) {

            return {

                ...student,

                status:
                    student.status === "Active"
                        ? "Inactive"
                        : "Active"

            };

        }

        return student;

    });

    setStudents(updatedStudents);

}

    setStudents(updatedStudents);

}

    
    return(
           <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">

            Students

        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {students.map(function(student){

                return(

                    <StudentCard

                        key={student.id}

                        name={student.name}

                        course={student.course}

                        status={student.status}

                       onDelete={() => deleteStudent(student.id)}
                        onToggle={() => toggleStatus(student.id)}

                    />
    

                );

            })}
          
        </div>

    </div>

    );
}
export default Students;