import { useMemo } from "react";
import { useSnippet } from '@hooks/useSnippet';

export const MazeSnippet = () => {
  const { snippetUrl, snippetId } = useSnippet();
  const scriptBody = useMemo(() => {
    return `
    (function (m, a, z, e) {
      var s, t;
      try {
        t = m.sessionStorage.getItem('maze-us');
      } catch (err) {}
    
      if (!t) {
        t = new Date().getTime();
        try {
          m.sessionStorage.setItem('maze-us', t);
        } catch (err) {}
      }
    
      s = a.createElement('script');
      s.src = z + '?t=' + t + '&apiKey=' + e;
      a.getElementsByTagName('head')[0].appendChild(s);
      m.mazeUniversalSnippetApiKey = e
    })(window, document, '${snippetUrl}', '${snippetId}');
    `;
  }, [snippetUrl]);

  return (
    <script dangerouslySetInnerHTML={{ __html: scriptBody }} />
  );
};
