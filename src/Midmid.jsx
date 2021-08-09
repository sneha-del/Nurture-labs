import React,{Component} from 'react';
class Midmid extends Component{
    constructor(props){
        super(props)
        this.state = {
          users:null,
          isLoading: false,
          isError:false
        }
      }

async componentDidMount(){
    this.setState({isLoading:true})
const response=await
    fetch("https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard");
    if(response.ok){
        const users=await response.json()
        console.log(users);
        this.setState({users:users.data,isLoading:false})
    }else{
        this.setState({isError:true,isLoading:false})
    }
}
renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }
  renderTableRows = () => {
    return this.state.users.map( (user) => 
      (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.keyword}</td>
          <td>{user.goal}</td>
          <td>{user.matches}</td>
          <td>{user.search_status}</td>
          </tr>
      )
    )
  }
  render(){
      const {users,isLoading,isError}=this.state
      if(isLoading){
          return <div>Loading..</div>
      }
      if(isError){
          return <div>Error..</div>
      }
      return users?
      (
          <table>
              <thead>
                  <tr>
                      {this.renderTableHeader()}
                  </tr>
              </thead>
              <tbody>
                  {this.renderTableRows()}
              </tbody>
          </table>
      ):
      (
          <div>No Users</div>
      )
  }
}
export default Midmid;