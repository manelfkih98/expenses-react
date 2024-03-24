import "./newExpenses.css";
import { useState } from "react";
let id = 5;
const NewExpenses = ({ getData }) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [oneState, setOneState] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    // setOneState({ ...oneState, title: event.target.value });
    setOneState((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const priceChangeHandler = (event) => {
    // setPrice(event.target.value);
    setOneState({ ...oneState, price: event.target.value });
  };
  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setOneState({ ...oneState, date: event.target.value });
  };
  const inputChanger = (event) => {
    // const { name, value } = target;
    setOneState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    getData({
      title: oneState.title,
      price: +oneState.price,
      date: new Date(oneState.date),
      id: id,
    });
    id++;
    setOneState({
      title: "",
      price: "",
      date: "",
    });
    // console.log(title);
    // console.log(price);
    // console.log(date);
    // setTitle("");
    // setPrice("");
    // setDate("");
  };
  const [openForm, setOpenForm] = useState(true);
  const handelForm = () => {
    setOpenForm(!openForm);
  };
  return (
    <div className="new-expense">
      {openForm ? (
        <button onClick={handelForm}>Add New Expense</button>
      ) : (
        <form onSubmit={submitForm}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                required
                placeholder="Title"
                name="title"
                value={oneState.title}
                onChange={inputChanger}
              />
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
                required
                placeholder="Price"
                type="number"
                min="0"
                name="price"
                value={oneState.price}
                onChange={inputChanger}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                value={oneState.date}
                onChange={inputChanger}
                required
                type="date"
                name="date"
                min="2022-01-01"
                max="2025-12-31"
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={handelForm} type="button">
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewExpenses;
    //nfare8 input avec state
    //event.preventDefault tamne3 l refrech 
    // title variable setTitle 
    // input :=> state : onchange
    //state => INPUT :value
    //useStat valuer pad defaut
    // stat t3mel planing
    //... bech tfare9 les donnes 3 state par 1 state
    // new state des state relier par une state ... 
    // instegram avec les jaime solution par fifo 
    // setoneStete ta5ou parametre prevstate a5er state state 
    //onestate : objet
    // event : onchange
    //[] index 