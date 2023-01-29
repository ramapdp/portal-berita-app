import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
        setTitle("");
        setDescription("");
        setCategory("");
        setIsNotif(true);
    };

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        console.log("props", props);
    }, []);

    console.log("props last : ", props);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My News
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-5">
                        {isNotif && (
                            <div className="alert alert-success shadow-lg m-1">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            </div>
                        )}
                        <input
                            type="text"
                            placeholder="Category"
                            className="m-1 input input-bordered w-full bg-slate-50 text-black"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                        />
                        <input
                            type="text"
                            placeholder="Title"
                            className="m-1 input input-bordered w-full bg-slate-50 text-black"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                        />
                        <textarea
                            className="m-1 textarea textarea-bordered bg-slate-50 w-full text-black"
                            placeholder="Description"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                        ></textarea>
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-primary w-full m-1"
                            onClick={() => handleSubmit()}
                        />
                    </div>
                </div>
                <div className="my-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {props.myNews && props.myNews.length > 0 ? (
                        props.myNews.map((news, i) => {
                            return (
                                <div
                                    key={i}
                                    className="card w-full bg-white shadow-l my-4"
                                >
                                    <div className="card-body text-black">
                                        <div className="text-slate-500">
                                            {news.category}
                                        </div>
                                        <h2 className="card-title">
                                            {news.title}
                                            <div className="badge badge-info text-white">
                                                new
                                            </div>
                                        </h2>
                                        <p>{news.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link
                                                href={route("edit.news")}
                                                as="button"
                                                method="get"
                                                data={{ id: news.id }}
                                            >
                                                <button className="btn btn-info">
                                                    Edit
                                                </button>
                                            </Link>
                                            <Link
                                                href={route("delete.news")}
                                                as="button"
                                                method="post"
                                                data={{ id: news.id }}
                                            >
                                                <button className="btn btn-error">
                                                    Delete
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-l text-center text-black py-5">
                            Anda belum meiliki berita sama sekali.
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
