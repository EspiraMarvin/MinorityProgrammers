import Link from 'next/link'
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import {Button, Form, FormControl, Spinner, Row, Col, InputGroup, Container} from "react-bootstrap";
import { useRouter } from "next/router";

const New = () => {
    const [form, setForm ] = useState({
        full_name: '',
        description: '',
        date_founded: '',
        date_created: '',
        category: '',
        tvl: '',
        governance_token_name: '',
        dao_structure: '',
        voting_process: '',
        blockchain: '',
        headquarters: '',
        twitter_handle: '',
        github_organization_handle: '',
        twitter_followers: ''
    })

    const [isSubmitting, setIsSubmitting ] = useState(false)
    const [validated, setValidated] = useState(false);
    const router = useRouter()

    const useEffect = (() => {
        console.log('use effect hook run')
    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log('form validity check', form.checkValidity())
        if (form.checkValidity() === false) {
            console.log('form valid false')
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);

        }else if (form.checkValidity() === true) {
            setIsSubmitting(true)
            event.preventDefault();
            // setValidated(true);
            // return validated === true
            addDao()
        }
    };

    const addDao = async () => {
        console.log('form data', form)
        try {
            const res = await fetch('http://localhost:3000/api/daos', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
           await router.push("/")
        } catch (e) {
            console.log('error', e)
        }

    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     let errs = validate();
    //     setErrors(errs)
    //     setIsSubmitting(true)
    // }
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }


    return(
        <>
            <h5>Add Dao</h5>
            <div>
                <Container>
                    {
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <h6>Dao Details</h6>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control required type="text" name="full_name" placeholder="Full name" onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group as={Col} md="8">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        name="description" required type="text" placeholder="Description"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Date Founded</Form.Label>
                                        <Form.Control type="date" placeholder="Date Founded" aria-describedby="inputGroupPrepend" required
                                         name="date_founded" onChange={handleChange}
                                        />
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Date Created</Form.Label>
                                    <Form.Control type="date" placeholder="date founded" name="date_created" onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>AUM ($)</Form.Label>
                                    <Form.Control type="number" placeholder="AUM ($)" name="tvl" onChange={handleChange} required />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select aria-label="Default select example" name="category" onChange={handleChange} required>
                                        <option>Select category</option>
                                        <option value="Protocol">Protocol</option>
                                        <option value="Service">Service</option>
                                        <option value="Grant">Grant</option>
                                        <option value="Media">Media</option>
                                        <option value="Social">Social</option>
                                        <option value="Investment">Investment</option>
                                        <option value="Platform">Platform</option>
                                        <option value="Collector">Collector</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Governance Token Name</Form.Label>
                                    <Form.Control type="text" placeholder="Governance Token Name" name="governance_token_name" onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Voting Process</Form.Label>
                                    <Form.Control type="text" placeholder="Voting Process" name="voting_process" onChange={handleChange} required />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col}  className="mb-3">
                                    <Form.Label>Dao Structure</Form.Label>
                                    <Form.Select aria-label="Default select example" name="dao_structure" onChange={handleChange} required>
                                        <option>Select Structure</option>
                                        <option value="shares">shares</option>
                                        <option value="gov_token">gov_token</option>
                                        <option value="tbd">tbd</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Blockchain</Form.Label>
                                    <Form.Select aria-label="Default select example" name="blockchain" onChange={handleChange} required>
                                        <option>Select Blockchain</option>
                                        <option value="Ethereum">Ethereum</option>
                                        <option value="Polygon">Polygon</option>
                                        <option value="Binance_Smart_Chain">Binance_Smart_Chain</option>
                                        <option value="Harmony">Harmony</option>
                                        <option value="Solana">Solana</option>
                                        <option value="Algorand">Algorand</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Headquarters</Form.Label>
                                    <Form.Control type="text" placeholder="Headquarters" name="headquarters" onChange={handleChange} required />
                                </Form.Group>
                            </Row>
                            <h6>Social Media Details</h6>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Twitter Handle</Form.Label>
                                    <Form.Control required type="text" placeholder="Twitter Handle" name="twitter_handle" onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Twitter Followers</Form.Label>
                                    <Form.Control
                                        required name="twitter_followers" type="number"
                                        placeholder="Twitter Followers" onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Github organization Handle</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"  placeholder="Github organization Handle" aria-describedby="inputGroupPrepend" required
                                            name="github_organization_handle" onChange={handleChange}
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                <Spinner
                                    as="span"
                                    animation={isSubmitting ? 'grow' : ''}
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                { isSubmitting ? 'Loading...' : 'Submit'}
                            </Button>
                        </Form>
                    }
                </Container>

            </div>
        </>

    )
}

export default New
