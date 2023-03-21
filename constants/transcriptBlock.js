import palleteColours from './pallete';

const {
  yellow,
  darkBlue,
  salmon,
  petrolBlue,
  pink,
  purple,
  lightGreen,
  platinum,
  champagnePink,
  linen,
  mintCream,
  columbiaBlue,
  teaRose,
  beige,
  lemonYellow
} = palleteColours;

const paragraph = [
  { initial: 2, final: 4, color: darkBlue },
  { initial: 5, final: 5, color: yellow },
  { initial: 7, final: 7, color: salmon },
  { initial: 8, final: 8, color: lightGreen },

  { initial: 9, final: 9, color: darkBlue },
  { initial: 11, final: 11, color: yellow },
  { initial: 12, final: 13, color: salmon },
  { initial: 14, final: 16, color: lightGreen },

  { initial: 17, final: 19, color: darkBlue },
  { initial: 20, final: 20, color: yellow },
  { initial: 22, final: 22, color: yellow },
  { initial: 23, final: 23, color: darkBlue },
  { initial: 25, final: 26, color: lightGreen },
  { initial: 27, final: 28, color: salmon },

  { initial: 29, final: 29, color: yellow },
  { initial: 30, final: 30, color: lightGreen },
  { initial: 31, final: 31, color: darkBlue }
];

const sections = [
  { initial: 2, final: 4, color: columbiaBlue },
  { initial: 5, final: 5, color: linen },
  // { initial: 7, final: 7, color: linen },
  { initial: 7, final: 9, color: beige },
  { initial: 11, final: 20, color: teaRose },
  { initial: 22, final: 22, color: teaRose },
  // { initial: 23, final: 23, color: mintCream },
  { initial: 23, final: 23, color: lemonYellow },
  { initial: 25, final: 26, color: mintCream },
  { initial: 27, final: 31, color: lemonYellow }
];

export { paragraph, sections };
