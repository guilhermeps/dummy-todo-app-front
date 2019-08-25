import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  state = {
    todos: [
      { owner: 'Guilherme', description: 'Implement a front end app for dummy todo app', done: false },
      { owner: 'Natália', description: 'Write a paper to finish her course', done: false },
      { owner: 'Guilherme', description: 'Improve his english skills', done: false }
    ]
  };

  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>
        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Dummy</a>
           </div>
        </div>
        <div id="main">
          <div className="header">
            <h1>Tasks</h1>
          </div>
          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                  <label htmlFor="owner">Owner</label> 
                  <input id="owner" type="text" name="owner" value=""  />                  
                </div>
                <div className="pure-control-group">
                  <label htmlFor="description">Description</label> 
                  <input id="description" type="text" name="description" value=""  />                  
                </div>
                <div className="pure-control-group">                                  
                  <label></label> 
                  <button type="submit" className="pure-button pure-button-primary">Add</button>                                    
                </div>
              </form>  
              <div>            
                <table className="pure-table">
                    <thead>
                      <tr>
                        <th>Owner</th>
                        <th>Description</th>
                        <th>Done?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.todos.map((todo) => {
                          return (
                            <tr>
                              <td>{todo.owner}</td>
                              <td>{todo.description}</td>
                              <td>{todo.done ? 'Yes' : 'No'}</td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </table> 
              </div>                        
            </div> 
          </div>
        </div>
      </div>               
    );
  }
}

export default App;
