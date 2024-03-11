import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate,useParams} from "react-router-dom";
import {fetchRecipeDetail, fetchRecipeMakes, fetchRecipePosters} from "../actions/foodActions";
// useSelector => store안에 있는 데이터를 선택해서 가지고 온다.
// useDispatch => Action안에 있는 함수 호출 => reducers => store
function RecipeDetail(){
    const nav = useNavigate()
    const {no} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecipeDetail(no))//store에 저장 완료
        dispatch(fetchRecipePosters(no))
        dispatch(fetchRecipeMakes(no))
    }, []);//
    const recipe_detail = useSelector((state)=>state.foods.recipe_detail)
    const recipe_posters = useSelector((state)=>state.foods.recipe_posters)
    const recipe_makes = useSelector((state)=>state.foods.recipe_makes)
    const recipe_deta = recipe_detail
    // const recipe_img = recipe_posters
    // const recipe_make = recipe_makes
    let html=recipe_makes.map((m,index)=>
        <tr>
            <td className={"text-left"}>{m}</td>
            <td className={"text-right"}>
                <img src={recipe_posters[index]} style={{"width":"120px","height":"80px"}}/>
            </td>
        </tr>
    )

    return(
        <div className={"row"}>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        <img src={recipe_deta.poster} style={{"width": "600px", "height": "200px"}}/>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        <h3 className={"text-center"}>{recipe_deta.title}</h3>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        {recipe_deta.content}
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"}><img src={process.env.PUBLIC_URL+"/icon/a1.png"}/></td>
                    <td className={"text-center"}><img src={process.env.PUBLIC_URL+"/icon/a2.png"}/></td>
                    <td className={"text-center"}><img src={process.env.PUBLIC_URL+"/icon/a3.png"}/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>{recipe_detail.info1}</td>
                    <td className={"text-center"}>{recipe_detail.info2}</td>
                    <td className={"text-center"}>{recipe_detail.info3}</td>
                </tr>
                </tbody>
            </table>
            <table className={"table"}>
                <caption><h3>조리 방법</h3></caption>
                <tbody>
                {html}
                </tbody>
            </table>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} rowSpan={"2"}>
                        <img src={recipe_deta.chef_poster} style={{"width": "150px", "height": "100px"}}/>
                    </td>
                    <td>{recipe_deta.chef}</td>
                </tr>
                <tr>
                    <td>{recipe_deta.chef_profile}</td>
                </tr>
                <tr>
                    <td colSpan={"2"} className={"text-right"}>
                        <button className={"btn btn-sm btn-danger"} onClick={()=>nav(-1)}>목록</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RecipeDetail