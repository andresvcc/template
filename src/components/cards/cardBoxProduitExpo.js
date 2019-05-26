import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AlertDialog from '../dialog/alertDialog'
import AchatDialog from '../dialog/achatDialog'


const styles = {
  card: {
    margin:18, 
    minHeight:190, 
    maxHeight:190,
    minWidth: '120%',
    maxWidth: '120%',
    position:'relative',   
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    width: "100%"
  }
};



function CardBoxProduit(props) {

  const description = ()=>{
    let photo = `http://localhost:4000/photo/${props.data.lien}`
    let smallDescription = (props.data.description).slice(0,45)
    let res = props.data.description.length > 45 ? (
      <AlertDialog
      label='lire plus'
      title={props.data.film_nom}
      contenue={props.data.description}
      smallContenue={smallDescription}
      image={photo}/>
    ):(
      <p>{smallDescription}</p>
    ) 

    return (
          <div style={{lineHeight:'12px'}}>
            {res}
          </div>
    )
  }

  const { classes } = props;

  return (
    <Card className={classes.card} >
       <div className="form-row">
          <div className="col-5" style={{width:'100%'}}>
            <CardMedia
              component="img"
              alt={props.data.lien}
              className={classes.media}
              height="190px"
              image= {`http://localhost:4000/photo/${props.data.lien}`}
              title={props.data.lien}
            />
          </div>
          <div className="col-7"> 
            <CardContent>
            <div style={{position:'absolute', top:'5%', left:'5%' }}>
              <Typography gutterBottom variant="h6" component="h6"  style={{lineHeight:'20px'}}>
                {props.data.film_nom}
              </Typography>
            </div>
            </CardContent>
            <CardContent style={{lineHeight:'20px'}}>
              <Typography gutterBottom variant="subheading" component="h6" style={{paddingTop:'0px'}}>
              {description()}
              </Typography>
            </CardContent>
          </div>
      </div>
      
      <Typography gutterBottom variant="subheading" component="h6" style={{lineHeight:'20px', position:'absolute', bottom:'25%', left:'45%'}}>
        {'categories'} 
      </Typography>
      <Typography gutterBottom variant="h6" component="h6"  style={{lineHeight:'20px', position:'absolute', bottom:'1%', left:'45%', width:'35%', height:'20%'}}>
          Score: {props.data.score}
      </Typography>
    </Card>
  );
}

const mapStateToProps = (state) => {

  return {
    count: state.counter.count,
    loginStatus: state.counter.loginStatus,
    typeUser: state.counter.typeUser,
    surname: state.counter.surname,
    sessID: state.counter.sessID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

CardBoxProduit.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps) (CardBoxProduit));