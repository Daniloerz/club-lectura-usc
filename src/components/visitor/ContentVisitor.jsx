import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default function ContentVisitor({items, title, name, url}) {
    return (
        <>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, color: 'black', fontSize: 30, color: '#004B87' }}
        >
          {title}
        </Typography>
        <Container sx={{ py: 8, backgroundColor: '#004B87', marginBottom: 5 }} maxWidth="md">
          <Grid container spacing={4}>
            {items.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?cover"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nombre del {name}
                    </Typography>
                    <Typography>
                      Corta descripción del {name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={url}>Ver</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </> 
    );
}