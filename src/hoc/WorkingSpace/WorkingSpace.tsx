import React from 'react';
//components
import CoWorkingSpace from '../../views/CoWorkingSpace/CoWorkingSpace';
//hoc component
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