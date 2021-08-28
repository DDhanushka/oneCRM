import React, {useState} from 'react';
import {Appbar, FAB} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../Components/Container';

const ContactsScreen = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  return (
    <>
      <Appbar>
        <Appbar.Content title="Contacts" />
      </Appbar>
      <Container>
        {contacts.length === 0 && (
          <View style={styles.emptyLabel}>
            <Text style={styles.emptyTxt}> Sorry ! No contacts found.</Text>
            <Text style={styles.emptyTxt}> Try adding a new one.</Text>
          </View>
        )}
      </Container>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('AddContact')}
        theme={{colors: {...{accent: '#0500EE'}}}}
      />
    </>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  emptyLabel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTxt: {
    fontFamily: 'Mukta-Light',
    fontSize: 20,
    color: '#aaa',
  },
});
