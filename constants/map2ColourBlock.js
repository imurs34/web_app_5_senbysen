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
} = palleteColours;

const pdfBlock = [
  {
    paragraph: [300, 400, 4700, 6400, 800, 102],
    colour: darkBlue,
  },
  {
    paragraph: [2100, 5100, 6500, 9200],
    colour: yellow,
  },
  {
    paragraph: [3500, 5700, 6200, 6600, 9100],
    colour: salmon,
  },
  {
    paragraph: [],
    colour: petrolBlue,
  },
  {
    paragraph: [],
    colour: pink,
  },
  {
    paragraph: [4100, 5900, 6000, 7300, 7800, 9300, 9500],
    colour: lightGreen,
  },
];

export default pdfBlock;
