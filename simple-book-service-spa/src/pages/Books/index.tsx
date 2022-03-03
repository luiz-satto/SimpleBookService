import React, { useState, useEffect } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import api from "../../services/simple-book-service.api";
import moment from "moment"

import './index.css'

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

const Books: React.FC = () => {

    const [books, setBooks] = useState<IBook[]>([])
    const history = useHistory()

    useEffect(() => {
        getBooks()
    }, [])

    async function getBooks() {
        const response = await api.get("/GetBooks")
        setBooks(response.data)
    }

    function formatDate(date: Date) {
        return moment(date).format('DD/MM/YYYY')
    }

    function getCategoryBadge(category: string) {
        let _category = category.toLocaleLowerCase()
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

    function createBook() {
        history.push('/Register')
    }

    function updateBook(id: string) {
        history.push(`/Register/${id}`)
    }

    function viewBook(id: string) {
        history.push(`/View/${id}`)
    }

    async function deleteBook(id: string) {
        await api.delete(`/Delete/${id}`)
        getBooks()
    }

    return (
        <div className="container">
            <br />
            <div className="book-header">
                <h1>Books Page</h1>
                <Button variant="dark" onClick={createBook}>Create New Book</Button>
            </div>
            <br />
            <Table className="text-center" striped bordered hover>
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Registration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => {
                            return (
                                <tr key={book.id}>
                                    <td>
                                        <Button size="sm" variant="secondary" onClick={() => updateBook(book.id)}>Edit</Button> {' '}
                                        <Button size="sm" variant="info" onClick={() => viewBook(book.id)}>View</Button> {' '}
                                        <Button size="sm" variant="danger" onClick={() => deleteBook(book.id)}>Delete</Button> {' '}
                                    </td>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>
                                        <Badge pill bg={getCategoryBadge(book.category)}>
                                            {book.category}
                                        </Badge>
                                    </td>
                                    <td>{book.description}</td>
                                    <td>{book.price}</td>
                                    <td>{formatDate(book.registration)}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Books