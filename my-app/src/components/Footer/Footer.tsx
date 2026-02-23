import { Button } from '@mui/material';
import { FooterContainer } from './Footer.styled';
import { Modal } from '../Modal/Modal';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Footer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const theme = useContext(ThemeContext);
    return (
        <FooterContainer>
            <p>Copyright © 2024 | Created by: Mateusz | Motyw: {theme.theme}</p>
            <Button variant="text" onClick={() => setIsModalVisible((prev) => !prev)}>Text</Button>
            <Modal title="Mój modal po kliknięciu w przycisk" content='akcja wyszla ze stopki' isVisible={isModalVisible}/>
        </FooterContainer>
    );
}

export default Footer;