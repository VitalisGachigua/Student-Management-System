import { useState } from "react";
import StudentCard from "../components/StudentCard";

Function Students({students}){

    
    return(
           <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8">

            Students

        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {Students.map(function(student){

                return(

                    <StudentCard

                        key={student.id}

                        name={student.name}

                        course={student.course}

                        status={student.status}

                    />

                );

            })}

        </div>

    </div>

    );
}
export default Students;