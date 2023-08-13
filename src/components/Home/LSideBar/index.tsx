import { Box, Button, ListItem, styled } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import Item from './Item';

const MuiButton = styled(Button)({
    textAlign: 'start',
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    py:1,
});

const LSideBar = () => {
    return (

        <Box sx={{
            position: "fixed",
            width: 260,
            top: 0,
            background: "#202123d9",
            left: 0,
            height: "100%",
            color: "white",
            px: 0.8,
            py: 0.5,
        }}>


            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <MuiButton
                    startIcon={<AddIcon />}
                    style={{ textAlign: 'left' }}
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 0.7, py: 1 }}
                >New Chat</MuiButton>

                <Box sx={{ height: '100%', overflow: 'auto' }}>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>


                </Box>

                <Box sx={{ borderTop: '1px solid rgba(86,88,105,1)' }}>
                    <Box mt={0.5} mb={0.7}>
                        <Item />
                    </Box>

                    
                </Box>

            </Box>
        </Box>


    );


};

export default LSideBar;