function NewsCard({ news }) {

    return (

        <div className="card">

            <h2>Latest News</h2>

            {

                news.map((item, index) => (

                    <div key={index} className="news">

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        <a href={item.url} target="_blank">

                            Read More

                        </a>

                        <hr />

                    </div>

                ))

            }

        </div>

    );

}

export default NewsCard;