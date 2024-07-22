import React, {useState} from 'react';
import { Modal } from '../Modal';
import Form from '../Form';
import { Button } from './styles';



const ChangeBalance = ({onChange}) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>+</Button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Form onChange={onChange} onCloseFormModal={() => setOpenModal(false)}/>
            </Modal>
        </>
    )
}

export default ChangeBalance;