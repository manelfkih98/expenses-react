import "./newExpenses.css";

const NewExpenses = () => {
    const titleChangeHander=(event) =>
    {
        console(event.target.value)

    }
    //nfare8 input avec state
    //event.preventDefault tamne3 l refrech 
    // title variable setTitle 
    // input :=> state : onchange
    //state => INPUT :value
    //useStat valuer pad defaut
    // stat t3mel planing
    
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" placeholder="Title" onChange={titleChangeHander}  />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input  type="number" min="0" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min ="2022-01-1" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button >Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenses;