import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import { CardOverflow } from "@mui/joy";
import { ButtonGroup } from "@mui/material";
import { Character } from "../../types/character";
import UnstyledButtonCustom from "../testBtn";
import CardLayers3d from "../testCard";

type CharacterProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <Card
      sx={{
        width: 320,
        height: 400,
        maxWidth: "100%",
        boxShadow: "lg",
        "--Card-padding": "20px",
        "--Card-radius": "11px",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Typography level="title-lg">{character.name}</Typography>
        <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
          {character.height}cm
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level2" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          >
            <Button color="danger">Details</Button>
            <Button color="danger">Details</Button>
          </ButtonGroup>
          {/* <UnstyledButtonCustom></UnstyledButtonCustom> */}
          {/* <CardLayers3d></CardLayers3d> */}
        </CardActions>
      </CardOverflow>
    </Card>
  );
};

export { CharacterCard };
