import React, { useState, useEffect } from 'react'; //hooks de react para tomar estados de la global store, se usan para no colocarle props a todo
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';//hook que funciona primero enviando una accion y despues un estado

import Posts from './components/Posts/Posts'; //lugar donde esta la logical de varios post(plural)
import Form from './components/Form/Form';//lugar donde esta la logica del formulario
import { getPosts } from './actions/posts';//lugar donde piden los post del back-end
import useStyles from './styles';
import ima from './images/ima.jpg';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Guardar imagenes</Typography>
        <img className={classes.image} src={ima} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
