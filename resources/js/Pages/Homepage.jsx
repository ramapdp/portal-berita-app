import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { data } from "autoprefixer";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Carousel from "@/Components/Homepage/Carousel";

export default function Homepage(props) {
    // console.log(props)
    return (
        <div className="bg-slate-50 min-h-screen text-black">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <h1 className="text-4xl font-bold p-4 text-center">
                {props.description}
            </h1>
            {/* <div className="p-5">
                <Carousel/>
            </div> */}
            <div className="flex justify-center items-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-5 p-5">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
