import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { data } from "autoprefixer";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    // console.log(props)

    const handleSubmit = () => {
        const data = {
            id : props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className="bg-slate-50 min-h-screen text-black">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-5">
                  <h1 className="text-center p-5 text-xl font-bold text-black uppercase">Edit News</h1>
                    <input
                        type="text"
                        placeholder="Category"
                        className="m-1 input input-bordered w-full bg-slate-50 text-black"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="m-1 input input-bordered w-full bg-slate-50 text-black"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <textarea
                        className="m-1 textarea textarea-bordered bg-slate-50 w-full text-black"
                        placeholder="Description"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    ></textarea>
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-primary m-1 w-full"
                        onClick={() => handleSubmit()}
                    />
                </div>
            </div>
        </div>
    );
}
