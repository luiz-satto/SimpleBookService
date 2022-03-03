import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import api from "../../../services/simple-book-service.api";

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

const BookForm: React.FC = () => {

    return (
        <div className="container">
            <br />
            <div className="book-header">
                <h3>New Book</h3>
                <Button variant="primary">Back</Button>
            </div>
            <br />
            <div className="container">
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default BookForm