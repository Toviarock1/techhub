import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn'
import classes from "./ProgramsCard.module.css"

interface ProgramsCard {
    image: string;
    title: string;
    description: string;
    flexRowReverse: boolean;
}

const ProgramsCard: React.FC<ProgramsCard> = ({ image, title, description, flexRowReverse }) => {
    return (
        <div className='mt-16'>
            <Row className={`${flexRowReverse ? 'flex flex-row-reverse' : 'flex'}`}>
                <Col>
                    <img src={image} alt="" />
                </Col>
                <Col>
                    <h2 className={classes.Title}>{title}</h2>
                    <p className={classes.Description}>
                        {description}
                    </p>
                    <div className='mt-11'>
                        <PrimaryBtn classStyle='PrimaryBtn' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProgramsCard