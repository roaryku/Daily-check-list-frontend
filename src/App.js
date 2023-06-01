import './App.css';
import { MyList } from './MyList';
import { useEffect, useState } from 'react';
import { getTheList, addList, editList, deleteList } from './FetchList';

function App() {

  const [myList, setList] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [listId, setListId] = useState("");
  const [wordSubmitted, setWordSubmitted] = useState("")
  
  useEffect(() => {
    getTheList(setList)
  }, [wordSubmitted])

  const updatingInInput = (_id, name) => {
    setEditing(true)
    setName(name)
    setListId(_id)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(name)
  }

  return (
    <div>
      <form onSubmit={finalSearch}>
        <h1>Daily Check List</h1>

        <input
        type="text"
        placeholder="Add list"
        value={name}
        onChange = {(e) => setName(e.target.value)}
        />

        <button
        disabled={!name}
        onClick=
        {editing ? () => editList (listId, name, setList, setName, setEditing) : () => addList(name, setName, setList )}>
        {editing ? "Edit" : "Add"}
      </button>
        
        {/*<MyList text="WE ARE DONE!!!"/>*/}

        {myList.map((list) => <MyList text={list.name} key={list._id}
        updatingInInput = {() => updatingInInput(list._id, list.name)}
        deleteList = {() => deleteList(list._id, setList)}
        />
        )}
        </form>
    </div>
  );
}

export default App;
