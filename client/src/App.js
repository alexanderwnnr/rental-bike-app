import React from 'react';
import { Container, Col } from 'react-bootstrap'
import AddBikeForm from './components/addBikeForm/addBikeForm'
import AvailableList from './components/availableList/availableList'
import RentedList from './components/rentedList/rentedList'

function App() {
  return (
    <Container>
      <AddBikeForm />
      <RentedList />
      <AvailableList />
    </Container>
  );
}

export default App;
