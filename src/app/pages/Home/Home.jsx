import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Lightbox from 'react-images';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: 500,
        height: 450
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)'
    }
});

const tileData = [
    {
        img: '../../../app/assets/1.jpg',
        title: 'Image',
        author: 'author'
    },
    {
        img: '../../../app/assets/2.jpg',
        title: 'Image',
        author: 'author'
    },
    {
        img: '../../../app/assets/3.jpg',
        title: 'Image',
        author: 'author'
    },
    {
        img: '../../../app/assets/4.jpg',
        title: 'Image',
        author: 'author'
    },
    {
        img: '../../../app/assets/5.jpg',
        title: 'Image',
        author: 'author'
    },
    {
        img: '../../../app/assets/6.jpg',
        title: 'Image',
        author: 'author'
    }
];

export class Home extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <GridList className={styles.gridList}>
                    {/* <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                        <ListSubheader component="div">December</ListSubheader>
                    </GridListTile> */}
                    {tileData.map(tile => (
                        <GridListTile cols={0.65} key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton className={styles.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

// var styles = {
//     root: {
//         flexGrow: 1
//     },
//     card: {
//         // maxWidth: '33.33%'
//     },
//     media: {
//         height: '-webkit-fill-available',
//         backgroundSize: 'contain'
//     }
// };

// export class Home extends React.Component {

//     render() {
//         return (
//             <div className={styles.root}>
//                 <Grid container spacing={24}>
//                     <Grid item xs={4}>
//                         <Card style={styles.card}>
//                             <CardActionArea>
//                                 <CardMedia style={styles.media} image="../../../app/assets/1.jpg" />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="h2">
//                                         Lizard
//                                     </Typography>
//                                     <Typography component="p">
//                                         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                                         across all continents except Antarctica
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 <Button size="small" color="primary">
//                                     Share
//                                 </Button>
//                                 <Button size="small" color="primary">
//                                     Learn More
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Card style={styles.card}>
//                             <CardActionArea>
//                                 <CardMedia style={styles.media} image="../../../app/assets/2.jpg" />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="h2">
//                                         Lizard
//                                     </Typography>
//                                     <Typography component="p">
//                                         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                                         across all continents except Antarctica
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 <Button size="small" color="primary">
//                                     Share
//                                 </Button>
//                                 <Button size="small" color="primary">
//                                     Learn More
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Card style={styles.card}>
//                             <CardActionArea>
//                                 <CardMedia style={styles.media} image="../../../app/assets/3.jpg" />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="h2">
//                                         Lizard
//                                     </Typography>
//                                     <Typography component="p">
//                                         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                                         across all continents except Antarctica
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 <Button size="small" color="primary">
//                                     Share
//                                 </Button>
//                                 <Button size="small" color="primary">
//                                     Learn More
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </div>
//         );
//     }
// }
