// export const loadScripts = async (u, type = "text/javascript", id) => {
//   return new Promise(function (resolve, reject) {
//     let s = document.createElement("script");
//     s.type = type;
//     s.async = true;
//     s.src = u;
//     if (id) {
//       s.id = id;
//     }

//     s.onload = () => resolve(s);
//     s.onerror = () => reject(new Error(`Error loading script ${u}`));

//     document.head.append(s);
//   });
// };

export function loadScripts({ u, type = "text/javascript", id }) {
  return new Promise(function (resolve, reject) {
    const s = document.createElement("script");
    let r = false;
    s.type = type;
    s.src = u;
    s.async = true;

    if (id) s.id = id;

    s.onerror = function (err) {
      reject(err, s);
    };

    s.onload = s.onreadystatechange = function () {
      if (!r && (!this.readyState || this.readyState == "complete")) {
        r = true;
        resolve();
      }
    };
    const t = document.getElementsByTagName("script")[0];

    t.parentElement.insertBefore(s, t);
  });
}
