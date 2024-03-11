import {
    FETCH_FOOD_DETAIL,
    FETCH_FOOD_LIST,
    FETCH_PAGE,
    FETCH_RECIPE_PAGE,
    FETCH_RECIPE_COUNT,
    FETCH_RECIPE_LIST,
    FETCH_RECIPE_DETAIL,
    FETCH_RECIPE_POSTER, FETCH_RECIPE_MAKES, FETCH_FIND_LIST, FETCH_FIND_PAGE
} from "../actions/types";
/*
     Board
     News
     Goods
     Food
     Recipe
*/

const initialState={
    food_list:[],
    food_detail:{},
    total:0,
    recipe_list:[],
    recipe_count:0,
    recipe_total:0,
    recipe_detail:{},
    recipe_posters:[],
    recipe_makes:[],
    find_list:[],
    find_page:0
}
/*
        let arr=[12,3,4,5]
        let k = ...arr
          [1,2,3,4,5]
 */

export default function (state=initialState,action){
    console.log("reducer function call... action[전송값]")
    switch (action.type){
        case FETCH_FOOD_LIST:
            return {
                ...state,
                food_list:action.payload
            }
        case FETCH_FOOD_DETAIL:
            return{
                ...state,
                food_detail:action.payload
            }
        case FETCH_PAGE:
            return{
                ...state,
                total:action.payload
            }
        case FETCH_RECIPE_LIST:
            return{
                ...state,
                recipe_list: action.payload
            }
        case FETCH_RECIPE_COUNT:
            return{
                ...state,
                recipe_count: action.payload
            }
        case FETCH_RECIPE_PAGE:
            return{
                ...state,
                recipe_total: action.payload
            }
        case FETCH_RECIPE_DETAIL:
            return{
                ...state,
                recipe_detail: action.payload
            }
        case FETCH_RECIPE_POSTER:
            return{
                ...state,
                recipe_posters: action.payload
            }
        case FETCH_RECIPE_MAKES:
            return{
                ...state,
                recipe_makes: action.payload
            }
        case FETCH_FIND_LIST:{
            return{
                ...state,
                find_list:action.payload
            }
        }
        case FETCH_FIND_PAGE:{
            return{
                ...state,
                find_page: action.payload
            }
        }
        default:
            return state
    }
}