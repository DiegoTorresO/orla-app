import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', aling: "right" }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 275}}>
            <CardContent sx={{ fontSize: 14, mb: 2, mr:2 }}>
                <Typography color="text.secondary">
                    Introduce tú número de alumno
                </Typography>
                <Typography sx={{ mb: 4 }} color="text.secondary">
                    para obtener tu orla.
                </Typography>
                <TextField id="outlined-basic" label="ID Alummno" variant="outlined" />
            </CardContent>
            <CardActions style={{ justifyContent: 'right', fontSize: 14, mb: 4  }}>
                <Button variant="contained" endIcon={<SendIcon />}  sx={{ fontSize: 14, mb: 2, mr:2 }}>
                    Enviar
                </Button>
            </CardActions>
        </Card>
    );
}
