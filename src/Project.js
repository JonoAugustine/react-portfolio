import StrifeLogo from "./images/strife-logo.png";
import OTMLogo from "./images/otm_logo.png";
import OTMGif from "./images/otm.gif";
import Pysduc from "./images/psyduck_purple.png";
import AmproLogo from "./images/logo.jpg";
import AmproPng from "./images/ampro_yt.png";
import OuchPng from "./images/ouch.png";
import OuchGif from "./images/ouch.gif";
import EvoEmu from "./images/EvoEmuSub.png";

export class Project {
  constructor(name, live, source, description, imageName, invert, screenshot) {
    this.name = name;
    this.live = live;
    this.source = source;
    this.description = description;
    this.imageSrc = imageName;
    this.invert = invert;
    this.screenshotSrc = screenshot;
  }
}

export const projects = [
  new Project(
    "Strife",
    null,
    "https://gitlab.com/serebit/strife",
    "An idiomatic Kotlin implementation of the Discord API.",
    StrifeLogo
  ),
  new Project(
    "Off The Menu",
    "https://JonoAugustine.github.io/off-the-menu",
    "https://github.com/JonoAugustine/off-the-menu",
    `
    A web app aiming to make eating out simpler for allergy sufferers and picky eaters.
    It provides the ability to search items on restaurant menus to determine if they contain
    potential allergens which the user defines. 
    `,
    OTMLogo,
    true,
    OTMGif
  ),
  new Project(
    "Team Magma PRO",
    "https://teammagmapro.web.app",
    "https://gitlab.com/JonoAugustine/teammagma",
    `
      This project aims to simplify & organize the selling, buying, 
      & trading process of Pokemon Revolution Online by providing
      users with a clean and intuitive web app to find the items 
      and pokemon they need.
    `,
    Pysduc
  ),
  new Project(
    "Aquatic Mastery",
    "https://youtube.com/aquaticmaster",
    null,
    `A YouTube channel centered around sharing my experiences as an
    aquarist and showing others how to achieve success in their own aquariums.`,
    AmproLogo,
    false,
    AmproPng
  ),
  new Project(
    "Ouch",
    "https://anthnyd.github.io/Ouch/",
    "https://github.com/anthnyd/Ouch",
    `
    A web app built like a simulation where you and your friends can exist in an Existence together.
    In an Existence you can chat to each other and perform fun commands.
    `,
    OuchPng,
    false,
    OuchGif
  ),
  new Project(
    "Evolution Emulator",
    null,
    "https://github.com/JonoAugustine/Evolution-Emulator",
    "A basic attempt at emulating Earthen evolution with OOP.",
    EvoEmu,
    true
  ),
  new Project(
    "ScoreBorda",
    null,
    "https://github.com/JonoAugustine/ScoreBorda",
    `
    A system which utilizes the simplicity of binary choices to score and rank 
    "Features" and "Candidates". By presenting only two options in each comparison,
    the Borda is able to remove much of the overwhelming aspect of comparing and
    several choices at once.
    `
  )
];
