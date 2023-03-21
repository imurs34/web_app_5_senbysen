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
    paragraph: [4, 47, 64, 8, 102],
    colour: darkBlue,
  },
  {
    paragraph: [21, 51, 65, 92],
    colour: yellow,
  },
  {
    paragraph: [35, 57, 62, 66, 91],
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
    paragraph: [41, 59, 60, 73, 78, 93, 95],
    colour: lightGreen,
  },
];

export default pdfBlock;
