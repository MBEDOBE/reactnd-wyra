import * as React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Card,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function QuestionDetail() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Card className="detail-card">
      <Typography
        component="div"
        variant="h5"
        style={{ padding: "6px", background: "#016779", color: "#fefefe" }}
      >
        Dan asks
      </Typography>
      <div className="avatar">
        <CardMedia
          style={{ borderRadius: "50%", height: "80px" }}
          component="img"
          sx={{ width: 80 }}
          image="https://tylermcginnis.com/would-you-rather/sarah.jpg"
          alt="avatar"
        />
      </div>

      <FormControl component="fieldset" className="detail-right">
        <FormLabel component="legend">Would you rather...</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="option one"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            value="option two"
            control={<Radio />}
            label="Male"
          />
        </RadioGroup>
        <Button
          variant="contained"
          size="medium"
          style={{
            float: "right",
            marginRight: "10px",
            backgroundColor: "#016779",
            width: "280px",
          }}
        >
          View
        </Button>
      </FormControl>
    </Card>
  );
}
