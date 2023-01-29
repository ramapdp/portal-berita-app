const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-white shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body text-black">
                    <div className="text-slate-500">{data.category}</div>
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-info text-white">new</div>
                    </h2>
                    <p>{data.description}</p>
                </div>
            </div>
        );
    });
};

const NoNews = () => {
    return <div>Tidak ada berita tersedia saat ini!</div>;
};

const NewsList = ({ news }) => {
    return !news ? NoNews() : isNews(news);
};

export default NewsList;
