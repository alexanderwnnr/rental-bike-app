import React, { Component } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import ListItem from '../listItem/listItem'
import { fetchItems } from '../../actions'
import { connect } from 'react-redux'

const List = ({items}) => {
    return (
        <Container className='mt-5'>
            <h4>Available bicycles ( 3 )</h4>
            <ListGroup>
                {
                    items.map(item => {
                        return <ListGroup.Item ><ListItem item={item} /></ListGroup.Item>
                    })
                }
                {/* <ListGroup.Item ><ListItem /></ListGroup.Item> */}
            </ListGroup>
        </Container>
    )
}

class AvailableList extends Component {
    
    componentDidMount() {
        this.props.fetchItems()
    }
    
    render() {
        const {items, loading, error} = this.props
        console.log(items)
        return <List items={items} />
    }
}

const mapDispatchToProps = (dispatch) => {
    // recieve data
        return {
            fetchItems: () => dispatch(fetchItems)
        }
    
        // return {
        //     fetchItems: () => dispatch(fetchItems(myService)()),
        //     onAddedToCart: (id) => dispatch(itemAddedToCart(id))
        // }
}

const mapStateToProps = ({aList}) => {
    return {
        items: aList.items,
        loading: aList.loading,
        error: aList.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableList)

