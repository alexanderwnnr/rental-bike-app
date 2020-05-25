import React from 'react'
import { Container, Form, Row, Col, Button} from 'react-bootstrap'
const AddBikeForm = () => {
    return (
        <Container className='mt-2'>
        <h4>Create new</h4>
        <Form>
            <Row className="align-items-center">
                <Form.Group as={Col} controlId="formBikeName" >
                    <Form.Label>Bike Name</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formBikeType">
                    <Form.Label>Bike Type</Form.Label>
                    <Form.Control as="select">
                        <option>Road</option>
                        <option>Mountain</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formRentPrice">
                    <Form.Label>Rent Price</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Button variant="primary" type="submit">
                        Submit
                </Button>
            </Row>
        </Form>
        </Container>
    )
}

export default AddBikeForm