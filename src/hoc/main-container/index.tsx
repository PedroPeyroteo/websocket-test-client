import { Grid } from "@mui/joy";
import { CharacterCard } from "../../components/character-card/character-card";
import { Character } from "../../types/character";
import { useCharacter } from "../../hooks/use-character";

const MainContainer = ({}) => {
  let { data, isFetching, isError, error } = useCharacter();

  if (isFetching) {
    console.log(`Is fetching: ${isFetching}`);
  }

  if (isError) {
    console.error(`Is error: ${isError}\nError: ${error}`);
  }

  const results: Character[] = data?.results ?? [];

  //console.log(`Data: ${results[0].name}`);

  return (
    <>
      {/* <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 20 }}
        sx={{ flexGrow: 1 }}
      >
        {results.map((character, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid> */}
      <div
        className="content-center align-middle rounded-2xl border solid border-red-700 bg-gradient-to-r from-cyan-500 t to-fuchsia-500 p-7 overflow-auto bg-repeat"
        style="background-image: url(src\img\image.png)"
      >
        <img src="src/img/image.png" className="size-28"></img>
        <div className="flex h-56 p-10 align-middle items-center solid bg-white bg-opacity-30 hover:bg-opacity-20 rounded-2xl ">
          <p>Hello there</p>
        </div>
      </div>
    </>
  );
};

export { MainContainer };
