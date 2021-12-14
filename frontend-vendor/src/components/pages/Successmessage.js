import React from 'react'
import { withRouter, Route,Switch,useLocation } from 'react-router-dom';

function Successmessage(props) { 
    return (
        <div className="modal" id={this.props.modalId}>
  <div className="modal-dialog modal-dialog-centered">

    <div className="modal-content">
    <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body align-center">
        
        <h3 className="heading color-black">{this.props.heading}</h3>
        <p className="paragraph color-black">{this.props.description}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    )
}

export default withRouter(Successmessage);