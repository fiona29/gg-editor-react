import React,{ Component } from "react";
import { withPropsAPI } from "gg-editor";

class GgSave extends Component {
    constructor(props){
       super(props) 
       this.state={
       }
    }

    handleClick = () => {
        const { propsAPI } = this.props;
        console.log(propsAPI.save());
   };

    render() {

      return (
       <div style={{ padding: 8 }}>
        <button onClick={this.handleClick}>保存</button>
      </div>
        )
    }
}

export default withPropsAPI(GgSave)