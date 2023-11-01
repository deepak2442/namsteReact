import React from "react";

export class UserClass extends React.Component{
    render(){
        return(
            <div className="user-card">
                <h2>name : satoro Gojo</h2>
                <h3>location : japan</h3>
                <h4>contact : contact uji to get appointment</h4>
            </div>
        )
    }
}

// how to use props in class
export class UserClass2 extends React.Component{
    constructor(props){
        super(props)
        // console.log(props)
        // how to use useState
        // this.state={
            // count:0,
            // count2:2

            this.state= {
                userInfo :{
                    name:"dummy",
                    location :"default",
                },
            };
            console.log(this.props.name+ "child Constructor")
        }

async componentDidMount (){
    const data = await fetch ("https://api.github.com/users/deepak2442")
    const json= await data.json()
    
    // const json = {
    //     "login": "deepak2442",
    //     "id": 113442716,
    //     "node_id": "U_kgDOBsL_nA",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/113442716?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/deepak2442",
    //     "html_url": "https://github.com/deepak2442",
    //     "followers_url": "https://api.github.com/users/deepak2442/followers",
    //     "following_url": "https://api.github.com/users/deepak2442/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/deepak2442/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/deepak2442/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/deepak2442/subscriptions",
    //     "organizations_url": "https://api.github.com/users/deepak2442/orgs",
    //     "repos_url": "https://api.github.com/users/deepak2442/repos",
    //     "events_url": "https://api.github.com/users/deepak2442/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/deepak2442/received_events",
    //     "type": "User",
    //     "site_admin": false,
    //     "name": null,
    //     "company": null,
    //     "blog": "",
    //     "location": null,
    //     "email": null,
    //     "hireable": null,
    //     "bio": null,
    //     "twitter_username": null,
    //     "public_repos": 4,
    //     "public_gists": 0,
    //     "followers": 0,
    //     "following": 0,
    //     "created_at": "2022-09-13T12:39:41Z",
    //     "updated_at": "2023-10-19T21:37:07Z"
    //   }

    this.setState({userInfo: json})
    console.log (json)
}
    componentDidUpdate(){console.log("componentDidupdate")}

    componentWillUnmount(){console.log("componentDidUnmount")}


        render(){
            const {name,location,avatar_url,login}= this.state.userInfo;


            // const {count,count2}= this.state;
            console.log(this.props.name +"child render")

            return(
                <div className="use-card">
                
                    <button onClick={()=> {this.setState({count:this.state.count+1 })}}>click Me</button>

                    <img src={avatar_url}></img>
                    <h2>name:{login}</h2>
                    <h3>location : {location}</h3>
                    <h4> contact : @satoru gojo @chilling</h4>
                </div>
            )
        }
    }
    
   
   
    
