import React from 'react';
import styles from './index.less';
import { Input } from 'antd';
class Editor extends React.Component {
    render() {
        const { label, placeholder, onChange = () => { },
             text } = this.props;
        return <div className={styles.editor}>
            <label>{label} : </label>
            <Input value={text}
                placeholder={placeholder}
                onChange={(e) => { onChange(e.target.value) }} />
        </div>;
    }
}

export default Editor;