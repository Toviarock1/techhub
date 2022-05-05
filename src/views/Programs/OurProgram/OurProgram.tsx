import React from 'react'
import { Container } from 'react-bootstrap'
import ProgramsCard from './../../../components/ProgramsCard/ProgramsCard';
import Image from './../../../assets/svgs/image 9.svg'


const OurProgram = () => {
    return (
        <div className='md:px-20 py-44'>
            <Container fluid>
                <ProgramsCard
                    image={Image}
                    flexRowReverse={false}
                    title="Developer Programme ODP 1.0"
                    description='With little or no interest by tertiary institutions in Nigeria
                                (especially those in the southeast) in developing customized and
                                credentialed courses suited for small business leaders in the region,
                                who for generations have run traditional apprenticeship systems.'
                />
                <ProgramsCard
                    image={Image}
                    flexRowReverse={true}
                    title="Developer Programme ODP 1.0"
                    description='With little or no interest by tertiary institutions in Nigeria
                                (especially those in the southeast) in developing customized and
                                credentialed courses suited for small business leaders in the region,
                                who for generations have run traditional apprenticeship systems.'
                />
                <ProgramsCard
                    image={Image}
                    flexRowReverse={false}
                    title="Developer Programme ODP 1.0"
                    description='With little or no interest by tertiary institutions in Nigeria
                                (especially those in the southeast) in developing customized and
                                credentialed courses suited for small business leaders in the region,
                                who for generations have run traditional apprenticeship systems.'
                />
            </Container>
        </div >
    )
}

export default OurProgram