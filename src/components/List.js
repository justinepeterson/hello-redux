import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log(state.articles)
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <ul>
        {articles.map((el, i) => (
            <li key={i}>{el.title}</li>
        ))}
    </ul>
);

// List is the result of connecting the stateless component ConnectedList with the Redux store.
const List = connect(mapStateToProps)(ConnectedList);

export default List;