import React from 'react';
import DropDownAlert from 'react-native-dropdownalert';
import log from '../util/log.js';

const alertWarning = () => {
  log('cannot call alert outside AlertProvider.')
};

const AlertContext = React.createContext(alertWarning);

class AlertProvider extends React.Component {
  alertRef = React.createRef()

  alert = (...args) => {
    this.alertRef.current && this.alertRef.current.alertWithType(args)
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <AlertContext.Provider value={this.alert}>
        <DropDownAlert ref={this.alertRef} {...props} />
        {children}
      </AlertContext.Provider>
    )
  }
}

export {
  AlertProvider,
  AlertContext,
}
