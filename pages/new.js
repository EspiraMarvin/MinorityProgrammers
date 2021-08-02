import Link from 'next/link'
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import {Button, Form, FormControl, Spinner} from "react-bootstrap";
import { useRouter } from "next/router";

const New = () => {
    const [form, setForm ] = useState({
        full_name: '',
        description: '',
        date_founded: '',
        date_created: '',
        logo_link: '',
        category: '',
        governance_token_name: '',
        dao_structure: '',
        voting_process: '',
        tech_stack: '',
        notes: '',
        blockchain: '',
        headquarters: '',
        twitter_handle: '',
        github_organization_handle: '',
        telegram_handle: '',
        linkedin_company_name: '',
        discord_link: '',
        twitter_followers: ''
    })

    const [isSubmitting, setIsSubmitting ] = useState(false)
    const [ errors, setErrors ] = useState({})
    const router = useRouter()

    const handleSubmit = () => {

    }

    return(
        <>
            <div>
                <div>
                    {
                        isSubmitting ?
                            <Spinner animation="border"/>
                            :
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form>

                    }
                </div>

            </div>
        </>

    )
}
