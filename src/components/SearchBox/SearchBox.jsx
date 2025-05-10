import css from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filters/slice"
import { useDispatch } from "react-redux"



export default function SearchBox ()  {

const dispatch = useDispatch()
const handleChangeFilter = event => {
    event.preventDefault();
    const input = event.target;
    const newFilter = input.value;
    
    console.log(newFilter) 
    dispatch( changeFilter(newFilter))
    
  };


    return (
        <div className={css.box}>
            <p className={css.text}>Find contacts by name</p>
            <input className={css.input} type="text" onChange={handleChangeFilter}>
            </input>
        </div>
    )
    
}
