import { act } from "react";
import { categories } from "../../data/data"

const initialState ={
  categories : [
    {
      id: "0",
      name: "CSPM Executive Dashboard",
      widgets: [
      
        {
          id: "0",
          name: "Cloud Accounts",
          text: "Random text for Widget 1"
        },
        {
          id: "1",
          name: "Cloud Account Risk Assessment ",
          text: "Random text for Widget 2"
        },
        
     
     
      ]
    },
    {
      id: "1",
      name: "CWPP Dashboard",
      widgets: [ {
        id: "0",
        name: "Top 5 Namesspace specific Alerts",
        text: "Random text for Widget 1"
      },
      {
        id: "1",
        name: "Workload Alerts",
        text: "Random text for Widget 2"
      }]
    },
    {
        id: "2",
        name: "Registry Scan",
        widgets: [ {
          id: "0",
          name: "Image Risk Assessment",
          text: "Random text for Widget 1"
        },
        {
          id: "1",
          name: "Image Security Issues",
          text: "Random text for Widget 2"
        }]
      }
  ]
  
}
const reducer =(state=initialState, action)=>{
  switch(action.type){

    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(el=>
          el.id===action.payload.id ? {...el, widgets:[...el.widgets, {id:Date.now(), ...action.payload}]}:el
        )
      };
       case 'REMOVE_WIDGET':
       return{
       ...state,
       categories:state.categories.map((el)=> (el.id===action.payload.elid ? {...el, widgets:el.widgets.filter((e)=>(e.id !== action.payload.id))} : el))
       }
        default: return state;
  }

}
export default reducer