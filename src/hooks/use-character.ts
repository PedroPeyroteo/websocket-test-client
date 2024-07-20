import { useQuery } from "@tanstack/react-query";

const useCharacter = () => {
  const getCharacters = async () => {
    const response = await fetch("https://swapi.dev/api/people/", {
      headers: { "content-type": "application/json" },
    });

    if (!response) {
      console.log("ERROR FETCHING CHARACTERS");
    }
    console.log("DATA FETCHED");

    return response.json();
  };

  return useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });
};

export { useCharacter };
