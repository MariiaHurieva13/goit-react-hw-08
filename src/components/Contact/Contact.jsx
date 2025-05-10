import { useDispatch } from "react-redux";
import css from "./Contact.module.css"
import { deleteContactThunk } from "../../redux/contacts/operations";


           
export default function Contact ({ data: { id, name, number} }) {
    const dispatch = useDispatch()
    


 return (
    <div className={css.contact}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
        <button className={css.btn} onClick ={() => dispatch(deleteContactThunk(id))}>Delete</button>
    </div>
 )
}
