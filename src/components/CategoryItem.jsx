import { Link } from "react-router-dom";

function CategoryItem(props) {
    const {  strCategory, strCategoryDescription, strCategoryThumb } = props;

    return (
    <div className="card">
        <div className="card-image">
            <img src={strCategoryThumb} alt = {strCategory} />
        </div>
        <div className="card-content">
        <span className="card-title">{strCategory}</span>
          <p>{strCategoryDescription.slice(0,100)}...</p>
        </div>
        <div className="card-action">
            <Link to={`/categories/${strCategory}`} className="btn">Watch Categories</Link>
        </div>
    </div>
    )
};

export {CategoryItem};