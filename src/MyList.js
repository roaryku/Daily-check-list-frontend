import { MdOutlineEditNote, MdOutlineDeleteForever } from "react-icons/md"

export const MyList = ({ text, updatingInInput, deleteList}) => {
    return(
        <div>
            <p>{text}</p>
            <MdOutlineEditNote size={31} style={{ fill: '#d5dfe2' }} onClick={updatingInInput}></MdOutlineEditNote>
            <MdOutlineDeleteForever size={27} style={{ fill: '#d5dfe2' }} onClick={deleteList}></MdOutlineDeleteForever>
            </div>
        
    )
}