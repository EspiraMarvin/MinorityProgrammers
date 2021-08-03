import Head from 'next/head'
import Link from "next/link";
import React, {useEffect, useState} from 'react'
import fetch from "isomorphic-unfetch";
import { Card, Col, Image, Row, Table} from 'react-bootstrap';
import {numberWithCommas} from '../helpers/helper'
import {TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import Canvas from "../components/layouts/Canvas";
import {Language, Twitter, Edit} from "@material-ui/icons";

const lodash = require('lodash');
const moment = require('moment')

const Index = ({ daos }) => {

    const [ companies, setCompanies] = useState(daos)
    const [category, setCategory] = useState('All')
    const [id, setId] = useState(null)
    const [showEdit, setShowEdit] = useState(false);
    let _id;
    const EditButton = ({_id = id}) =>
        (
        <div>
            <Link href={`/${_id}/edit`}>
            <Edit />
            </Link>
        </div>
    )

// set target categories state
    const setTarget = (e) => {
        if (e && e.target.value) {
            setCategory(e.target.value)
        }
    }

// get target
    const handleFilter = (e) => {
        setTarget(e)
    }

// runs on use effect hook to filter categories of daos
    const filterCat = (category) => {
        let filteredCompanies = daos
        let finalFiltered = []
        filteredCompanies.map(company => {
            company.dao.category === category ? finalFiltered.push(company) : ''
        })
        setCompanies(finalFiltered)
        if (category === 'All') {
            setCompanies(daos)
        }
    }

    useEffect(() => {
        filterCat(category);
        if(id === null) {
            setShowEdit(false)
        }
    },[category, daos, filterCat, id] )


    // get total AUM($)
    const companiesTotalTvl = () => {
        let arr = []
        companies.map(com => {
            arr.push(com.dao.tvl)
        })
        const values = Object.values(arr)
        return lodash.sum(values)
    }


    const onClickRow = event => {
        const id = event.currentTarget.getAttribute("data-rowid")
        setId(id)
        setShowEdit(true)
    }

    const renderHeader = () => {
        let headerElement = ['NAME', 'CATEGORY','AUM (USD)', 'TWITTER FOLLOWERS', 'FOUNDED DATE']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    const renderBody = () => {
        return companies && companies.map((dao) => {
            return (
                <>
                    <TableRow key={dao.dao._id} data-rowid={dao.dao._id} onClick={onClickRow}>
                    <TableCell className="name_item  justify-content-start w-25" style={{ }}>
                        <Image roundedCircle className="" src={dao.dao.logo_link} width={20} height={20} />
                        <Link href={`/${dao.dao._id}`} id="dao-name">
                            <a>
                            {dao.dao.full_name.charAt(0).toUpperCase() + dao.dao.full_name.slice(1).toLowerCase()}
                            </a>
                        </Link>
                    </TableCell>
                    <TableCell>{dao.dao.category}</TableCell>
                    <TableCell>${numberWithCommas(dao.dao.tvl)}</TableCell>
                    <TableCell>{numberWithCommas(dao.social.twitter_followers)}</TableCell>
                    <TableCell>
                        <span>
                            <span>
                                {moment(dao.dao.date_founded).format('MMMM YYYY')}
                            </span>
                            <span>
                                <Language />
                            </span>
                            <Twitter />
                        </span>
                    </TableCell>
                </TableRow>
        </>

        )
        })
    }


    return (
        <>
                <Head>
                <title> Daolist | Leaderboard </title>
                <meta name="keywords" content="dao list" />
            </Head>
        <div className="">
            <Row className="col-xs-12">
                <Col className="col-12 col-lg-6">
                    <Card className="py-4">
                            <h6>Number of DAOs</h6>
                            <p>{ companies.length }</p>
                    </Card>
                </Col>
                <Col className="col-12 col-lg-6">
                    <Card className="py-4">
                       <h6>Total AUM (USD</h6>
                        <p>{ numberWithCommas(companiesTotalTvl()) }</p>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={8} xs={12}  className="my-2">
                    <button className="filter-btn" value="All" onClick={handleFilter}>All</button>
                    <button className="filter-btn" value="Protocol" onClick={handleFilter}>Protocol</button>
                    <button className="filter-btn" value="Service" onClick={handleFilter}>Service</button>
                    <button className="filter-btn" value="Grant" onClick={handleFilter}>Grant</button>
                    <button className="filter-btn" value="Media" onClick={handleFilter}>Media</button>
                    <button className="filter-btn" value="Social" onClick={handleFilter}>Social</button>
                    <button className="filter-btn" value="Investment" onClick={handleFilter}>Investment</button>
                    <button className="filter-btn" value="Platform" onClick={handleFilter}>Platform</button>
                    <button className="filter-btn" value="Collector" onClick={handleFilter}>Collector</button>
                </Col>
            </Row>

                <div style={{ float:"left"}}>
                    <Canvas />
                </div>
                <div style={{float: "right", marginRight: "5px"}}>
                    {
                        showEdit ? < EditButton id={id} /> : null
                    }
                </div>
            <div>
                <Table id='daolist'>
                    <TableHead>
                    <TableRow>{renderHeader()}</TableRow>
                    </TableHead>
                    <TableBody>
                    {renderBody()}
                    </TableBody>
                </Table>
            </div>

        </div>

        </>
    )
}

Index.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/daos');
    const { data } = await res.json();

    return { daos: data }
}

export default Index
