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
    paragraph: [3, 4, 47, 64],
    colour: darkBlue,
  },
  {
    paragraph: [21, 53, 65],
    colour: yellow,
  },
  {
    paragraph: [35, 57, 66, 91, 92, 93],
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
    paragraph: [41, 59, 60, 73, 78],
    colour: lightGreen,
  },
];

export default pdfBlock;
