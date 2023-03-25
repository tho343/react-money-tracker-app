import React, { Fragment } from 'react'
import { Form } from 'react-router-dom'
import Modal from './modal'

export default function AddIncomeForm(props) {

    return (
        <Fragment>
            <Modal {...props} name="income" />
        </Fragment>
    )
}
