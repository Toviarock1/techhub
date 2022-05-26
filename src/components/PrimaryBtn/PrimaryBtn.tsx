import React from 'react'
import { Button } from 'react-bootstrap'
import { FaArrowCircleRight } from 'react-icons/fa'

type PrimaryBtnProps = {
    classStyle: string;
}

const PrimaryBtn = ({ classStyle }: PrimaryBtnProps) => {
    return (
        <Button className={classStyle} variant='success'>
            Learn More
            <span className='ml-2'>
                <FaArrowCircleRight />
            </span>
        </Button>
    )
}

export default PrimaryBtn