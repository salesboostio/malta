import fs from "fs";
import path from "path";

const nv = "rgba(27, 28, 37, ";
const bl = "rgba(57, 67, 226, 1.0)";
const rd = "rgba(243, 70, 70, 1.0)";
const yl = "rgba(245, 169, 33, 1.0)";

const TypoName = ["title_403224_nv90_300", "title_403224_nv90_500" ,
  "title_363022_nv90_300" , "title_363022_nv90_500" ,
  "title_323220_nv90_300" , "title_323220_nv90_500" ,
  "title_322424_nv90_300" , "title_322424_nv90_500" ,
  "title_322422_nv90_300" , "title_322422_nv90_500" ,
  "title_242018_nv90_300" , "title_242018_nv90_500" , "title_242018_bl_700" ,
  "body_181818_nv90_300" , "body_181818_nv90_500" ,
  "body_181818_nv60_300" , "body_181818_nv60_500" ,
  "body_181818_yl_300" , "body_181818_yl_500" ,
  "body_181818_bl_300" , "body_181818_bl_500" ,
  "body_161616_nv80_300" , "body_161616_nv80_500" ,
  "body_161616_nv60_300" , "body_161616_nv60_500" ,
  "body_161616_yl_300" , "body_161616_yl_500" ,
  "body_161616_bl_300" , "body_161616_bl_500" ,
  "body_141414_nv90_300" , "body_141414_nv90_500" ,
  "body_141414_nv60_300" , "body_141414_nv60_500" ,
  "body_141414_yl_300" , "body_141414_yl_500" ,
  "body_141414_bl_300" , "body_141414_bl_500" ,
  "body_141414_rd_300" , "body_141414_rd_500" ,
  "caption_121212_nv80_300" , "caption_121212_nv80_500" ,
  "caption_121212_nv40_300" , "caption_121212_nv40_500"];

type TypoInfoType = {
  [key: string]: {
    color: string;
    fontSize: string | string[];
    fontWeight: number;
    lineHeight?: string | string[];
  };
};

const typoInfo: TypoInfoType = {};

for (const name of TypoName) {
  const parts = name.split("_");

  const color = (() => {
    if (parts[2].includes("nv")) {
      return `${nv}0.${parts[2][2]})`;
    } else {
      switch (parts[2]) {
        case "rd":
          return rd;
        case "yl":
          return yl;
        case "bl":
          return bl;
      }
    }
  })();

  const fontSize = (() => {
    const pc = parts[1].slice(0, 2);
    const tablet = parts[1].slice(2, 4);
    const mobile = parts[1].slice(4);

    if (pc === tablet && tablet && mobile) {
      return `${pc}px`;
    } else if (pc === tablet && tablet !== mobile) {
      return [`${mobile}px`, `${pc}px`];
    } else {
      return [`${mobile}px`, `${tablet}px`, `${pc}px`];
    }
  })();

  const fontWeight = (() => {
    return Number.parseInt(parts[3]);
  })();

  typoInfo[name] = {
    color,
    fontSize,
    fontWeight,
  };
}

fs.writeFile(path.join(__dirname, "typography.json"), JSON.stringify(typoInfo, null, 2), { encoding: "utf-8" }, () => {
  console.log("typography style file created.");
});
console.log(typoInfo);
