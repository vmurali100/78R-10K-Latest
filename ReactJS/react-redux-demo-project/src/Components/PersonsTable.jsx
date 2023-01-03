import React, { Component } from 'react'
import { connect } from 'react-redux'

class PersonsTable extends Component {
  render() {
    console.log(this.props.persons)
    return (
      <div>
          <table className="table">
              <thead>
                <tr>
                  <th>First</th>
                  <th>Last</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
      </div>
    )
  }
}
function mapStateToProps(state){
    return {
        persons:state.persons
    }
}
function mapDispatchToProps(){
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonsTable)