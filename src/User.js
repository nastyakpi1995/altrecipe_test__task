import React from 'react';

class User extends React.Component {
    state = {
      username: '',
    }
    onChangeUserName = (e) => {
      this.setState({
      username: e.target.value,
      })
    }

    onSubmit = e => {
     
      e.preventDefault();

    }

  
    render() {
      return (
        <div className="User">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="text"
                className="form_control"
                onChange={this.onChangeUserName}
              />
            </div>
            <button type="submit" className="btn btn_primory">Save</button>
          </form>
    </div>
      );
    }
  }
  

export default User;