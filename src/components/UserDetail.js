import React,{Component} from 'react';
export default class UserDetail extends Component{
    render(){
        let id=this.props.match.params.id;
        let userStr=localStorage.getItem('users');
        let users=userStr?JSON.parse(userStr):[];
        let user=users.find(user=>user.id==id);
        return (
            <table className="table table-bordered">
                <thead>
                    <tr><td>姓名</td><td>ID</td></tr>
                </thead>
                <tbody>
                    <tr><td>{user.name}</td><td>{user.id}</td></tr>
                </tbody>
            </table>
        )
    }
}
