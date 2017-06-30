import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import TextInput from '../TextInput';
import styles from './styles';

const LoginForm = props => {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
      <Field
        name={'email'}
        type={'email'}
        component={TextInput}
        placeholder={'e.g., email@example.com'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Password</Text>
      <Field
        secureTextEntry
        name={'password'}
        type={'password'}
        component={TextInput}
        placeholder={'e.g., ***********'}
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default connect()(reduxForm({ form: 'form' })(LoginForm));
