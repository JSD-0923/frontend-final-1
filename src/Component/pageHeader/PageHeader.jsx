import { Typography, useTheme } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CoralBtnIcon from '../CoralBtnIcon/CoralBtnIcon';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TxtInput from '../textInput/textInput';
import IconBtn from '../IconBtn/IconBtn';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const Container = styled.div`
display:flex;
justify-content: space-between;
`;


const SearchContainer = styled.div`
display:flex;
align-items: center;
`;

function PageHeader(props) {

    return (
        <Container>
            <Typography sx={{ fontSize: '34px', fontWeight: 600, color: 'primary.main', paddingBottom:'20px' }}>{props.title}</Typography>
            {props.logoutBtn ?
                <div><CoralBtnIcon label='Logout' type={'outlined'} icon={<LogoutOutlinedIcon /> } /></div>
                : null}

            {props.searchFeild ?
                <SearchContainer>
                    <IconBtn icon={<ArrowBackIosNewOutlinedIcon/>}/>
                    <TxtInput placeholder={'Search'} type={'text'} />
                </SearchContainer>
                : null}
        </Container>
    )
}

PageHeader.propTypes = {
    title: PropTypes.string,
    logoutBtn: PropTypes.bool,
    searchFeild: PropTypes.bool,
}

PageHeader.defaultProps = {
    logoutBtn: false,
    searchFeild: false
}

export default PageHeader