import React from 'react';
import './contentPage.scss';
import Layout from "../../layout";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { filterTextFormat } from '../../../local-services/rest/connect';
import Autores from '../../../local-components/blocks/team/WorkTeam';

const useStyles = makeStyles((theme= Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function ContentPage(props) {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root, "page content"}>
        <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
          <Grid item xs={12} sm={9}>
            <Paper elevation={0} className={classes.paper, "p-principal"} id="qsomos">
              <h1 className="p" >{props.pageContext.title}</h1>
              <div className="p-text" dangerouslySetInnerHTML={{ __html: filterTextFormat(props.pageContext.body) }} ></div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper} id="equipo">
              <Autores></Autores>
              <Autores></Autores>
              <Autores></Autores>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}