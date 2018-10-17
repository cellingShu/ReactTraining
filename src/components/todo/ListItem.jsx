import React from 'react'
import styles from './index.less';
class ListItem extends React.Component {
    render() {
        const { toDoItem ,onDelete,onCheck} = this.props;
        return <li className={toDoItem.checked ? styles.checked : styles.unchecked} key={toDoItem.id}>
        <input type="checkbox" checked={toDoItem.checked} id={toDoItem.id} onChange={(e) => {onCheck(toDoItem,e.target.checked)}} />
        <label htmlFor={toDoItem.id}>{toDoItem.title}</label>
        <span onClick={onDelete}>Delete</span>
      </li>;
    // return <div>   {toDoItem.title}</div>
    }


}

export default ListItem