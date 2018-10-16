import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/ToDoListAction';
import style from './ToDoList.less';
import { Button, Alert } from 'antd';
import List from '../components/todo/List'
import Editor from '../components/todo/Editor'
class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            warning: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.changeItem = this.changeItem.bind(this);

    }

    componentDidMount() {
        this.props.actions.fecthToDoList();
    }

    onSubmit() {

        if (this.state.text.trim() === '') {
            this.setState({ warning: 'please input task' })
            return;
        }
        this.props.actions.submitTask(this.state.text);
        this.setState({ text: '', warning: '' });
    }

    onDelete(toDoItem) {

        this.props.actions.removeItem(toDoItem)
    }
    changeItem(toDoItem, flag) {

        this.props.actions.changeItem(toDoItem, flag)
    }
    render() {
        const { toDoList } = this.props;
        return (
            <div className={style.container}>
                <h2 className={style.h2}>Task ToDoList</h2>


                <List dataSource={toDoList} onDelete={(toDoItem) => this.onDelete(toDoItem)} onCheck={(toDoItem, flag) => { this.changeItem(toDoItem, flag); }} />

                <Editor label='Task' text={this.state.text} placeholder='Input your task' onChange={(value) => this.setState({ text: value })} />
                {this.state.warning ? <Alert message={this.state.warning} type="error" /> : null}
                <Button style={{ float: 'right', marginTop: 15 }} type="primary" loading={this.props.loading} onClick={this.onSubmit}>
                    Submit
                </Button>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        toDoList: state.toDoListState.toDoList,
        loading: state.toDoListState.loading
    }
}

const mmapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}


export default connect(mapStateToProps, mmapDispatchToProps)(ToDoList);