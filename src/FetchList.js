import axios from 'axios';

const getTheList = (setList) => {
    axios.get("https://daily-check-list.onrender.com")
    .then(({data}) => {console.log(data)
        setList(data)
    })
}

const addList = (name, setName, setList) => {
    axios.post("https://daily-check-list.onrender.com/saveList", { name })
    .then((data) => {
        console.log(data);
        setName("");
        getTheList(setList)
    })
}

const editList = (listId, name, setList, setName, setEditing) => {
    axios.post("https://daily-check-list.onrender.com/editList", {_id: listId, name})
    .then((data) => {
        console.log(data)
        setName("")
        setEditing(false)
        getTheList(setList)
    })
}

const deleteList = (_id, setList) => {
    axios.post("https://daily-check-list.onrender.com/deleteList", { _id })
    .then((data) => {
        console.log(data)
        getTheList(setList)
    })
}



export{ getTheList, addList, editList, deleteList }