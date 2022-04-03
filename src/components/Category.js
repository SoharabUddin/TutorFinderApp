import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>
createStyles({
	paper: {
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	},
	root: {
	flexGrow: 1,
	},
}),
);

export default function Category() {
const classes = useStyles();

return (
	<div>
	<Grid container spacing={3}>

		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
	  <p>This is 1</p>
        </Paper>
		</Grid>

		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
	  <p>This is 1</p>
        </Paper>
		</Grid>

		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
	  <p>This is 1</p>
        </Paper>
		</Grid>
		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Pn-H2zNApqyx7cEM19mScSysC4qt22ZpLw&usqp=CAU"
        alt="new"
      />
	  <p>This is 1</p>
        </Paper>
		</Grid>
		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
       alt="new"
      />
	  <p>This is 1</p>
        </Paper>
		</Grid>
		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/8076/1601635839903/front-left-side-47.jpg"
       alt="new"
      />
	  <p>This is 1</p>
        </Paper>
		</Grid>
	</Grid>
	</div>
);
}
