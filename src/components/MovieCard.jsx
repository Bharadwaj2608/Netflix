import { Link } from "react-router-dom";
function Home({img,slug}){
    return(
        <>
        <Link to={`/details/${slug}`} >
            <div className="mb-2">
                <img src={img} className="w-40 h-56 object-cover flex-grow rounded-xl" alt="" />
            </div>
        </Link>
        </>
    )
}

export default Home;