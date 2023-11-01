import React from "react";

import { UserClass2} from "./userClass";

class About extends React.Component{
    constructor(props){
        super(props)
        console.log(" About parent constructor")
    }

    render(){
        return(
            <div>
                {/* <UserClass /> */}
                <UserClass2 />
            </div>
        )
    }
}

export default About;