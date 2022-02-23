import React from 'react';
import { Button } from "@chakra-ui/react"

export default ({ children, ...props }) => (
    <Button
        outline="none"
        color="#FFFFFF"
        fontSize={15}
        fontWeight="500"
        {...props}
    >
        {children}
    </Button>
)