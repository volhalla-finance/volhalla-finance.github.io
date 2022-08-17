import React from 'react';
import { Modal } from 'antd';

/*
* Modal for finding more info
*/

class GetUpdatesModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  render() {
    const handleDismiss = () => {
      this.setState({isVisible: false});
    };
  
    return <Modal title="Basic Modal" visible={this.state.isVisible} onOk={handleDismiss} onCancel={handleDismiss}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
  }
}

export default GetUpdatesModal;