export const getApi = async () => {
  const url = `https://breakingbadapi.com/api/characters?limit=10&offset=10`;

  const resp = await fetch(url);
  const data = await resp.json();
  const result = data.map((character) => ({
    id: character.char_id,
    name: character.name,
    nickname: character.nickname,
  }));

  return result;
};
