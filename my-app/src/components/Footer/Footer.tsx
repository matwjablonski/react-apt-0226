import { Button } from '@mui/material';
import { FooterContainer } from './Footer.styled';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

const Footer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <FooterContainer>
            <p>Copyright © 2024 | Created by: Mateusz</p>
            <Button variant="text" onClick={() => setIsModalVisible((prev) => !prev)}>Text</Button>
            <Modal title="Mój modal po kliknięciu w przycisk" content='akcja wyszla ze stopki' isVisible={isModalVisible}/>
        </FooterContainer>
    );
}

export default Footer;