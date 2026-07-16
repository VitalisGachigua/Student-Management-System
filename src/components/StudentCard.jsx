function StudentCard({

name,

course,

status,

onDelete,

onToggle

}){
    return(
        <div className="bg-white shadow-md rounded-lg p-6">

            <h2 className="text-2xl font-bold">

                {name}

            </h2>

            <p className="mt-2">

                Course: {course}

            </p>

            <p className="mt-2">

                Status: {status}

            </p>

          <div className="flex gap-2 mt-4">

                <button
                    onClick={onToggle}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Toggle Status
                </button>

                <button
                    onClick={onDelete}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    Delete
                </button>

            </div>
        </div>
     );   

}

export default StudentCard;