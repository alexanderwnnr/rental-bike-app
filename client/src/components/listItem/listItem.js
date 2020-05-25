import React from 'react'
import { Container, Card, Row, Button } from 'react-bootstrap'

const ListItem = (item) => {
const {name, type, price } = [item]

    return(
        <Container as={Row}>
            <Card.Text className='mr-5'>{name}</Card.Text>
            <Card.Text className='mr-5'></Card.Text>
            <Card.Text></Card.Text>
            <Button className='ml-auto'>Rent</Button>
            <Button variant="danger" className='ml-2'>Delete</Button>
        </Container>
    )
}
export default ListItem