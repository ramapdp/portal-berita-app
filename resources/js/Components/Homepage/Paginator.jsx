import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            { prev && <Link href={prev} className="btn btn-sm btn-info">«</Link> }
            <button className="btn btn-sm btn-info">{current}</button>
            { next && <Link href={next} className="btn btn-sm btn-info">»</Link> }
        </div>
    );
};

export default Paginator;
