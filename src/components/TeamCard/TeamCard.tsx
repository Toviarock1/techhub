import React from 'react'
import { Card } from 'react-bootstrap';

type CardProps = {
    img: string;
    title: string;
}

const TeamCard = ({ img, title }: CardProps) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default TeamCard