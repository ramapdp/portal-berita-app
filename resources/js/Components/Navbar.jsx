import { Link } from "@inertiajs/inertia-react";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-slate-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-50 rounded-box w-52"
                    >
                        {!user ? (
                            <div>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            <div>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Dashboard
                                        <span className="badge badge-primary">
                                            New
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">LaravelNews</a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                    <div className="form-control dropdown-content">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered bg-slate-50"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
