import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ScreenEditRestaurant from '../fullScreen/screenEditRestaurant'

const styles = {
  card: {
    maxWidth: 400,
    minWidth:400, 
    maxHeight:460,
    minHeight:460,
    margin:'10px'
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  info: {
    position:'relative', 
    bottom:'15px'
  }
};



function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}


function CardBoxRestaurant(props) {

  const click =()=>{
    props.handleClickOpen(props.data.id_film)
  }

  const { classes } = props;
//https://projbd.herokuapp.com/${props.data.lien}
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={click}>
        <CardMedia
          component="img"
          alt={props.data.lien}
          className={classes.media}
          height="250px"
          image= {`https://cdn.empireonline.com/jpg/80/0/0/1200/675/0/0/0/0/0/0/0/c/articles/5cb6eb57133d503e3a48f444/avengers-russian-crop.jpg`}
          title={props.data.lien}
        />
        <div className='col-md-10' style={{textAlign:'center'}}>
          <Typography gutterBottom variant="h5" component="h6">
            {props.data.film_nom}
          </Typography>
        </div>
      </CardActionArea>
      <CardContent className={classes.info} >
        <Typography variant="subheading" component="p">
          {props.data.description}          
        </Typography>
        <Typography gutterBottom variant="subheading" component="p">
         Score: {props.data.score}
        </Typography>
        <Typography gutterBottom variant="subheading" component="p">
         Date: {formatDate(new Date(props.data.date_sortie))}
        </Typography>
        <Typography gutterBottom variant="subheading" component="p">
         Duration: {props.data.duration}
        </Typography>
        <div style={{position:'absolute', top:'-12%', right:'5%'}}>
        <ScreenEditRestaurant
          handleClickOpen = {props.handleClickOpen}
          handleClose = {props.handleClose}
          fullD = {props.fullD}
          data = {props.data}
          categories ={props.categories}
          directeurs ={props.directeurs}
          artistes ={props.artistes}
          photos ={props.photos}/>
        </div>



      </CardContent>
    </Card>
  );
}

CardBoxRestaurant.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardBoxRestaurant);