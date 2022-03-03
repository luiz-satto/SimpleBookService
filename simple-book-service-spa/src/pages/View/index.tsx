import React, { useState, useEffect } from "react";
import { Badge, Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";

import api from "../../services/simple-book-service.api";
import moment from "moment"

// import './index.css'

interface IBook {
    id: string;
    name: string;
    author: string;
    category: string;
    description: string;
    price: number;
    registration: Date;
}

enum BookCategory {
    Thriller = "thriller",
    History = "history",
    Drama = "drama",
    Biography = "biography"
}

const View: React.FC = () => {
    const history = useHistory()
    function goBack() { history.goBack() }

    const { id } = useParams() as {
        id: string;
    }

    const [book, setBook] = useState<IBook>()
    async function getBook(id: string) {
        const response = await api.get<IBook>(`GetBook/${id}`)
        // console.log(response)
        setBook(response.data)
    }

    useEffect(() => {
        if (id !== undefined) {
            getBook(id)
        }
    }, [id])

    function getCategoryBadge(category: string | undefined) {
        let _category = category?.toLocaleLowerCase()
        if (_category === BookCategory.Biography) {
            return "primary"
        }

        if (_category === BookCategory.Drama) {
            return "danger"
        }

        if (_category === BookCategory.History) {
            return "info"
        }

        return "secondary"
    }

    function formatDate(date: Date | undefined) {
        if (date) {
            return moment(date).format('DD/MM/YYYY')
        }

        return undefined
    }

    return (
        <div className="container">
            <br />
            <div className="book-header">
                <h1>Book Details</h1>
                <Button variant="dark" onClick={goBack}>Back</Button>
            </div>
            <br />

            <Card>
                <Card.Body>
                    <Card.Title><strong>{book?.name}</strong></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <strong>Author: </strong>
                        {book?.author}
                    </Card.Subtitle>
                    <Card.Text>
                        <strong>Description: </strong>
                        {book?.description}
                        <br />
                        <strong>Category: </strong>
                        <Badge pill bg={getCategoryBadge(book?.category)}>
                            {book?.category}
                        </Badge>
                        <br />
                        <strong>Price: </strong>
                        <Badge pill bg="success">
                            {book?.price}
                        </Badge>
                        <br />
                        <strong>Registration Date: </strong>
                        <Badge pill bg="info">
                            {formatDate(book?.registration)}
                        </Badge>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default View