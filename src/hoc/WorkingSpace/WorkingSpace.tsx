import React from 'react'
import Header from '../../views/Header/Header'
import CoWorkingSpace from '../../views/CoWorkingSpace/CoWorkingSpace'
import Layout from '../Layout/Layout'

const WorkingSpace = () => {
    return (
        <Layout navLinkColor={false}>
            <>
                <CoWorkingSpace />
            </>
        </Layout>
    )
}

export default WorkingSpace