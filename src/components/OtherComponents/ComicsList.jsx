import ComicsCard from "./ComicsCard";

export default function ComicsList ({comics}) {
    return (
        <div className="row">
            {comics.map(comic => (
                <ComicsCard img={comic.thumb} title={comic.series} price={comic.price} key={comic.id}/>
            ))}
        </div>
    );
};