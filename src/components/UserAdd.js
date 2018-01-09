import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';
export default class UserAdd extends Component{
    constructor(props){
        super(props);
        this.state={blocking:false}
    }
    handleChange=(event)=>{
      this.setState({
          blocking:event.target.value&&event.target.value.length>0
      })
    };
    handleSubmit =()=>{
      let name=this.name.value;
      let userStr=localStorage.getItem('users');
      let users=userStr?JSON.parse(userStr):[];
      users.push({id:Date.now(),name});
      localStorage.setItem('users',JSON.stringify(users));
      this.setState({blocking:false},function () {
          this.props.history.push('/user/list');
      });
    };

    render(){
        return (
            <div>
                <Prompt when={this.state.blocking}
                        message={(location)=>`你确定要跳转到${location.pathname}吗？`}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">姓名：</label>
                        <input onChange={this.handleChange} ref={ref=>this.name=ref} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        )
    }
}
