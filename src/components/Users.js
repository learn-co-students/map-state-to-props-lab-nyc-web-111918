import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
            {this.props.users.map((user)=>{
              return <li key={user.index}>{user.username}</li>
            })}
        </ul>
        <p>
        {this.props.userCount}
        </p>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
  return {users: state.users,
    userCount: state.users.length
  }
}


export default connect(mapStateToProps)(Users)
