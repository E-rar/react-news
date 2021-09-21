const NewsItem = (props) => {
    return ( 
        <figure>
            <img src={props.img} alt="" />
            <figcaption>
                <h4>{props.title}</h4>
                <p>{props.content}</p>
                <div className="center">
                    <p>{props.date}</p>
                    <a rel="noreferrer" target="_blank" href={props.url}>Read More</a>
                </div>
            </figcaption>
        </figure>
     );
}
 
export default NewsItem;