import React from 'react'
import ListItem from './ListItem';
import styles from './index.less';
class List extends React.Component {

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    render() {
        const { dataSource } = this.props;

        return (
            <ul className={styles.list}>
                {
                    dataSource.map((toDoItem, i) => this.renderItem(toDoItem, i))
                }
                <li > {dataSource.filter(i => !!i.checked).length} 已完成/ {dataSource.length} 总数</li>
            </ul>
        )
    }

    renderItem(toDoItem, i) {

        return <ListItem key={toDoItem.id} toDoItem={toDoItem} onDelete={() => this.props.onDelete(toDoItem)}
            onCheck={(toDoItem, flag) => { this.props.onCheck(toDoItem, flag) }} />
    }

}

export default List