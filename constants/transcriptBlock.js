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
  { initial: 6, final: 7, color: salmon },
  { initial: 8, final: 8, color: lightGreen },

  { initial: 9, final: 9, color: darkBlue },
  { initial: 11, final: 11, color: yellow },
  { initial: 12, final: 13, color: salmon },
  { initial: 14, final: 15, color: lightGreen },

  { initial: 16, final: 17, color: darkBlue },
  { initial: 18, final: 18, color: yellow },
  { initial: 19, final: 19, color: salmon },
  { initial: 20, final: 20, color: yellow },

  { initial: 22, final: 23, color: lightGreen },
  { initial: 24, final: 27, color: salmon }
];

const sections = [
  { initial: 2, final: 4, color: columbiaBlue },
  { initial: 5, final: 6, color: linen },
  { initial: 7, final: 9, color: beige },
  { initial: 10, final: 18, color: teaRose },
  { initial: 19, final: 23, color: mintCream },
  { initial: 24, final: 27, color: lemonYellow }
];

export { paragraph, sections };
