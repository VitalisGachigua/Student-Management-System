import {Link} from "react-router-dom";

function Navbar() {

    return (
        <nav className="bg-indigo-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className ="text-2xl font-bold">
                    Student Management System
                </h1>
                <div className="flex gap-6">
                    <Link to="/">Home</Link>
                    <Link to="/students"></Link>
                    <Link to="/add-students">Students</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;