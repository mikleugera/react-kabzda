import React from 'react';
import s from './../Dialogs.module.css'

const Message = (props) => {
    return <div className={s.message}>
        <img src="data:image/jpeg;base64,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" alt=""/>
        {props.message}
    </div>
};

export default Message;