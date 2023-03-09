import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealsList } from '../components/MealsList';

function Categories() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const nav = useNavigate();

    const goBack = () => nav(-1);


    useEffect(() => {
        getFilteredCategory(name).then(data => {
            setMeals(data.meals)
        })
    }, [name]);

    return (<>
    <button className="btn" onClick={goBack} >Go back</button>
        {!meals ? <Preloader /> : (
            <MealsList meals={meals} />
        )}
        </>
    )
};

export { Categories };