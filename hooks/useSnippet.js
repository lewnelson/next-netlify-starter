export const useSnippet = () => {
  const url = process.env.SNIPPET_URL;
  const id = process.env.SNIPPET_ID;
  return { snippetUrl: url, snippetId: id };
};
