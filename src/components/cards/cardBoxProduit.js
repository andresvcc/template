import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AlertDialog from '../dialog/alertDialog'

const styles = {
  card: {
    margin:18, 
    minHeight:200, 
    maxHeight:200,
    minWidth: '100%',
    maxWidth: '100%',
    position:'relative',


    
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    width: "100%"
  }
};



function CardBoxProduit(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} >
       <div className="form-row">
          <div className="col-6"> 
            <CardContent>
            <div style={{position:'absolute', top:'5%'}}>
              <Typography gutterBottom variant="h6" component="h6"  style={{lineHeight:'20px'}}>
                {props.data.directeur_nom}
              </Typography>
            </div>
            </CardContent>
            <CardContent style={{lineHeight:'20px', width:'100%'}}>
              <Typography gutterBottom variant="subheading" component="h6" style={{paddingTop:'0px'}}>
              {props.data.pay_origine}
              </Typography>
              <Typography gutterBottom variant="subheading" component="h6" style={{paddingTop:'0px'}}>
              {props.data.date_naissance}
              </Typography>
              <Typography gutterBottom variant="subheading" component="h6" style={{paddingTop:'0px'}}>
                    {props.data.description}
              </Typography>
            </CardContent>
          </div>
      </div>
    </Card>
  );
}

CardBoxProduit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardBoxProduit);