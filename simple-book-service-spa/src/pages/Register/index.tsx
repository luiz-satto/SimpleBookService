import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

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
        const response = await api.post('/Create', model);
        console.log(response);
    }

    const history = useHistory()
    function goBack() { history.goBack() }

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
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text"
                            name="author"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="price"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
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