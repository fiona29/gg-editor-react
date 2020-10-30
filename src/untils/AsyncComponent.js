import React, {Component} from 'react';
// 创建异步组件
export default function asyncComponent(importComponent){
    class AsyncComponent extends Component{
        constructor(props){
            super(props)
            this.state={
                component:null
            }
        }
        
        async componentDidMount(){
            const {default:component} = await importComponent();
            this.setState({
                component:component
            })
            
        }
        componentWillUnmount(){
            this.setState=(state,callback)=>{
                return
            }
        }
        render(){
            const Component = this.state.component;
            return Component ? <Component {...this.props}/> : null
        }
    }
    return AsyncComponent
	
}


