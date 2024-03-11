import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchFindList,fetchFindPage} from "../../actions/foodActions";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";

function FoodFind(){
    const [fd,setFd] = useState('마포')
    const [curpage,setCurpage] = useState(1)
    const dispatch = useDispatch()
    /*
            View               Model                  Controller
            react ===== actions ====== reducer ======== store
                  dispatcher    dispatcher                |
                                                         react => useSelector
     */
    useEffect(() => {
        dispatch(fetchFindList(curpage,fd))
        dispatch(fetchFindPage(fd))
    }, [fd,curpage]);
    const find_list = useSelector((state)=>state.foods.find_list)
    const find_page = useSelector((state)=>state.foods.find_page)

    const html = find_list.map((food) =>
        <div className="col-md-4">
            <div className="thumbnail">
                <Link to={"/food/food_detail/" + food.fno}>
                    <img src={"http://www.menupan.com" + food.poster} alt="Lights" style={{"width": "100%"}}/>
                    <div className="caption">
                        <p>{food.name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
    const handlePageChange=(page)=>{
        setCurpage(page)
    }

    const findChange=(e)=>{
        setFd(e.target.value)
    }

    return (
        <Fragment>
            <div className={"row"}>
                <input type={"text"} size={"20"} className={"input-sm"} onChange={findChange} value={fd}/>
                <input type={"button"} value={"검색"} className={"btn-sm btn-primary"}/>
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"row"}>
                {html}
            </div>
            <div className={"row"}>
                <div className={"text-center"}>
                    <Pagination activePage={curpage} itemsCountPerPage={12} totalItemsCount={find_page} pageRangeDisplayed={10} prevPageText={"<"} nextPageText={">"} onChange={handlePageChange}/>
                </div>
            </div>
        </Fragment>
    )
}

export default FoodFind