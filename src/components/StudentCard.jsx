function StudentCard(props) {

    return (

        <div className="bg-white shadow-md rounded-lg p-6">

            <h2 className="text-2xl font-bold">

                {props.name}

            </h2>

            <p className="mt-2">

                {props.course}

            </p>

            <p className="mt-2">

                {props.status}

            </p>

        </div>

    );

}

export default StudentCard;