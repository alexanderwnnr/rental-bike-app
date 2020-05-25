import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import ListItem from '../listItem/listItem'

const RentedList = () => {
    return (
        <Container className='mt-4'>
            <h4>Your rent ( Total:  )</h4>
            <ListGroup>
                <ListGroup.Item><ListItem /></ListGroup.Item>
            </ListGroup>
        </Container>
    )
}
export default RentedList