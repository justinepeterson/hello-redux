import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addArticle } from './../js/actions/index';

function mapDispatchToProps(dispatch) {
    console.log(dispatch)
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

const ConnectedForm = (props) => {
    const [title, setTitle] = useState("")

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addArticle({ title: title });
        console.log(title)
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title.title}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">SAVE</button>
        </form>
    );
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form