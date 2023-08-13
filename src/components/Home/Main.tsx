import {Grid, Box, Container} from '@mui/material';
import LSideBar from './LSideBar';
import RightSide from './RightSide';


const Main = () => {
    return (
        <Box>
            <Grid container>
                <Grid xs={2} sx={{position:'relative'}}><LSideBar/></Grid>
                
                <Grid sx={{width:'calc(100%-260px)', ml:1}}>
                <Container sx={{width: {md: '20rem' ,lg:'100rem', sm:'20rem'}}}>
                <RightSide/>
                </Container>
                </Grid>
            </Grid>
        </Box>
    ); 
};

export default Main;
