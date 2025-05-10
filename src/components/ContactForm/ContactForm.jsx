import css from "./ContactForm.module.css"
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContactThunk } from "../../redux/contacts/operations";



export default function ContactForm () {

  
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
     }
    console.log(newContact) 
    dispatch( addContactThunk(newContact))
    form.reset();
  };


    return (
      <>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>
            <span className={css.label}>Name:</span>
            <input className={css.input} type="text" name="name" />
          </label>
          <label>
            <span className={css.label}>Number:</span>
            <input className={css.input} type="text" name="number" />
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </form>
      </>
      );
}
