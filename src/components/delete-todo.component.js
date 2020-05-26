import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteTodo extends Component {

    constructor(props) {
        super(props);
        console.log(this);
        axios.delete('http://localhost:7000/todos/delete/'+this.props.match.params.id).then(res => console.log(res.data));
        this.props.history.push('/');
    }

    // componentDidMount() {
    //     console.log(this);
    //     axios.delete('http://localhost:4000/todos/delete/'+this.props.match.params.id).then(res => console.log(res.data));
    //     this.props.history.push('/');
    // }

    render() { return ('success delete'); }
}