import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { createReload } from '../../actions/reload/createReloadActions';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  reloadCreation : {
    loading: state.reloads.create.loading,
    error: state.reloads.create.error,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    createReload: (price) => {
      dispatch(createReload(price));
    }
  }
};

class NewReloadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      reloadPrice: Number(process.env.REACT_APP_RELOAD_RECHARDED_BOTTLE_PRICE),
      customPrice: 0,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleOnChange = (event) => {
    this.setState({reloadPrice: event.target.value});
  }

  handleCustomPrice = (event) => {
    this.setState({
      reloadPrice: event.target.value,
      customPrice: event.target.value,
    });
  }

  handleOnSubmit = (event) => {
    this.props.createReload(this.state.reloadPrice);
    event.preventDefault();
    
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
      const newBottlePrice = process.env.REACT_APP_RELOAD_NEW_BOTTLE_PRICE;
      const reloadedBottlePrice = process.env.REACT_APP_RELOAD_RECHARDED_BOTTLE_PRICE;

      return (
      <div className="dropdown show">
        <Button color="default" onClick={this.toggle} className="btn-round btn-simple btn-icon btn btn-default">{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>New CO2 Bottle Changement</ModalHeader>
          <ModalBody>
            <form id="newReloadForm" onSubmit={this.handleOnSubmit}>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" defaultChecked={true} onChange={this.handleOnChange} value={reloadedBottlePrice} className="form-check-input" name="bottle" />Recharged Bottle (${reloadedBottlePrice})
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" value={newBottlePrice} onChange={this.handleOnChange} className="form-check-input" name="bottle"/>Brand New Bottle (${newBottlePrice})
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" value ={this.state.customPrice} onChange={this.handleOnChange} className="form-check-input" name="bottle"/>Custom price: <input name="customPrice" value={this.state.customPrice} onChange={this.handleCustomPrice} type="number" />
                </label>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type='submit' form="newReloadForm" color="primary">Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReloadModal);