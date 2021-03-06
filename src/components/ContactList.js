import React, {Component} from 'react';
import {Contact} from './Contact';
import {FlatButton, GridList} from 'material-ui';
import {deleteContact} from '../actions/contacts';

export default class ContactList extends Component {

  render() {
    let contacts = this.props.contacts.map(contact =>
      <Contact key={contact.id} contact={contact} deleteContact={this.props.deleteContact}/>);
    return (
      <div>
        <GridList cols={3}>
          {contacts}
        </GridList>
      </div>
    );
  }
}