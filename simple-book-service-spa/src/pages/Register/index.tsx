import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import api from "../../services/simple-book-service.api";
import './index.css'

interface IBook {
    name: string;
    author: string;
    category: string;
    description: string;
    price: number;
    registration: Date;
}

const Register: React.FC = () => {

    const history = useHistory()
    function goBack() { history.goBack() }

    const { id } = useParams() as {
        id: string;
    }
    useEffect(() => {
        if (id !== undefined) {
            getBook(id)
        }
    }, [id])

    const [model, setModel] = useState<IBook>({
        name: '',
        author: '',
        category: '',
        description: '',
        price: 0.00,
        registration: new Date()
    })

    function updatedModel(event: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        if (id !== undefined) {
            const response = await api.put(`/Update/${id}`, model)
            console.log(response)
        } else {
            const response = await api.post('/Create', model)
            console.log(response)
        }

        goBack()
    }

    async function getBook(id: string) {
        const response = await api.get(`GetBook/${id}`)
        if (response.data) {
            let data = response.data
            setModel({
                name: data.name,
                author: data.author,
                category: data.category,
                description: data.description,
                price: data.price,
                registration: data.registration
            })
        }
    }

    return (
        <div className="container">
            <br />
            <div className="book-header">
                <h3>New Book</h3>
                <Button variant="dark" onClick={goBack}>Back</Button>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={model.name}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text"
                            name="author"
                            value={model.author}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            value={model.category}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="price"
                            value={model.price}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={model.description}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Register