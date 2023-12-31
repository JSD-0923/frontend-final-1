import { Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function CoralBtnIcon(props) {
    return (
        <Button
            variant={props.type}
            startIcon={props.icon}
            endIcon={props.endIcon}
            onClick={props.click}
            sx={{
                margin: 0,
                paddingY: 0,
                paddingX: 3,
                borderRadius: 1,
                minHeight: 44,
                minWidth: '100%',
            }}
            color={props.color}
            >{props.label}</Button>
    )
}

CoralBtnIcon.defaultProps = {
    color: 'primary'
}

CoralBtnIcon.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    endIcon: PropTypes.element,
    click: PropTypes.func,
}

export default CoralBtnIcon