import { useEffect } from "react";

export default function Embed({ refId }) {
  useEffect(() => {
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  }, []);
  return <div className="embedsocial-hashtag" data-ref={refId}></div>;
}
