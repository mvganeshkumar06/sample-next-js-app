import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import styles from "../styles/tutor.module.css";

const useStyles = makeStyles({
    secondaryText: {
        fontSize: "small",
        color: "rgb(88, 88, 88)"
    },
    subTitle: {
        fontSize: "medium",
        fontWeight: "bold",
        margin: "15px 0px"
    },
    checkedIcon: {
        backgroundColor: "#311b92",
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
    }
});

function Tutor() {
    const classes = useStyles();

    return (
        <Box id={styles.tutorContainer}>
            <Card id={styles.tutorCard}>
                <Box id={styles.tutor}>
                    <Avatar alt="John" src="/avatar.png" id={styles.avatar} />
                    <Box id={styles.tutorInfo}>
                        <Box id={styles.tutorTitle}>
                            <Typography variant="h6">John</Typography>
                            <Typography variant="h6">$50 /hr</Typography>
                        </Box>
                        <Typography variant="subtitle1" className={classes.secondaryText}>Chemistry (Bachelors) - London University</Typography>
                        <Box id={styles.ratings}>
                            <GradeRoundedIcon fontSize="small" />
                            <GradeRoundedIcon fontSize="small" />
                            <GradeRoundedIcon fontSize="small" />
                            <GradeRoundedIcon fontSize="small" />
                            <GradeRoundedIcon fontSize="small" />
                            <Typography color="textPrimary" id={styles.reviewNumber}>68 reviews</Typography>
                        </Box>
                        <Typography id={styles.courseCompletionText}><Box component="span" id={styles.courseCompletionNumber}>120</Box>completed lessons</Typography>
                    </Box>
                </Box>

                <Box id={styles.about}>
                    <Typography className={classes.subTitle}>About me</Typography>
                    <Button id={styles.saveProfile}><TurnedInNotRoundedIcon /> Save profile</Button>
                </Box>

                <Typography component="p">Photo booth neutra hexagon meggings put a bird on it, gochujang messenger bag pork belly mixtape stumptown hell of church-key. Ramps kale chips affogato, jianbing bespoke lumber sustainable vegan green juice pork belly edison bulb banh mi wolf. Shaman neutra twee pok pok, beard kombucha salvia yuccie vinyl prism helvetica. Live-edge cornhole try-hard jianbing dreamcatcher snackwave gastropub unicorn humblebrag drinking vinegar four loko flexitarian etsy. Tumblr etsy edison bulb roof party. Bicycle rights +1 ennui, forage master cleanse godard authentic lyft meh.</Typography>

                <Typography className={classes.subTitle}>About my session</Typography>

                <Typography>Photo booth neutra hexagon meggings put a bird on it, gochujang messenger bag pork belly mixtape stumptown hell of church-key. Ramps kale chips affogato, jianbing bespoke lumber sustainable vegan green juice pork belly edison bulb banh mi wolf. Shaman neutra twee pok pok, beard kombucha salvia yuccie vinyl prism helvetica. Live-edge cornhole try-hard jianbing dreamcatcher snackwave gastropub unicorn humblebrag drinking vinegar four loko flexitarian etsy. Tumblr etsy edison bulb roof party. Bicycle rights +1 ennui, forage master cleanse godard authentic lyft meh.</Typography>
                <Box id={styles.showMore}>
                    <Typography id={styles.showMoreText}>Show more</Typography>
                    <ExpandMoreIcon id={styles.showMoreIcon} />
                </Box>
            </Card>
            <Box id={styles.messageContainer}>
                <Card id={styles.messageCard}>
                    <Typography id={styles.messageTitle}>Send John a message</Typography>
                    <Box id={styles.message}>
                        <EmojiObjectsRoundedIcon id={styles.bulbIcon} />
                        <Box id={styles.messageInfo}>
                            <Typography>A free meeting is a great next step.</Typography>
                            <Typography>Just ask John below.</Typography>
                        </Box>
                    </Box>
                    <Box id={styles.messageBox}>
                        <TextField
                            id={styles.messageField}
                            multiline
                            rows={5}
                            variant="outlined"
                            placeholder="Hello John, Yuccie master hammock man braid keytar selfies pack green juice yolo."
                        />
                    </Box>
                    <FormControl variant="outlined" id={styles.formControl}>
                        <Typography>Select subject and level</Typography>
                        <NativeSelect>
                            <option aria-label="None" value="Select subject and level" />
                            <option value={1}>Chemistry I</option>
                            <option value={2}>Chemistry II</option>
                            <option value={3}>Chemistry III</option>
                        </NativeSelect>
                    </FormControl>
                    <Typography className={styles.secondaryText}><Checkbox id={styles.checkBox} checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />} />Hear from 2-3 tutors just like John</Typography>
                    <Box component="div" id={styles.sendMessage}>
                        <Button variant="contained" id={styles.btn}>Send a message</Button>
                    </Box>
                    <Typography className={styles.secondaryText} id={styles.responseTime}>Expected response time : 24h</Typography>
                </Card>
                <Typography id={styles.moreTutors}>More chemistry tutors</Typography>
                <Typography id={styles.moreTutors}>More chemistry A level tutors</Typography>
                <Typography id={styles.moreTutors}>More chemistry GCSC tutors</Typography>
            </Box>
            <Box component="div" id={styles.sendMessageOnMobile}>
                <Button variant="contained" id={styles.btn}>Send a message</Button>
            </Box>
        </Box >
    );
}

export default Tutor;