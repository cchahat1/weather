import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AuthorInfo(props) {
  console.log(props.authorData)
  return (
    <Box>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {props.authorData.personal_name}
      </Typography>
      <Typography align="center" color="text.primary" paragraph>
        {props.authorData.birth_date} -  {props.authorData.death_date ? props.authorData.death_date : "Present Day"}
      </Typography>
    </Box>
  )
}