import './App.css';
import Accordion from './Accordion';

const data = [
  {
    title: 'Hypertext Markup Language',
    content: `Hypertext Markup Language (HTML) is the standard markup language for creating web pages
     and web applications. With Cascading Style Sheets(CSS) and JavaScript, it forms a triad of
     cornerstone technologies for the World Wide Web.`
  },
  {
    title: 'Cascading Style Sheets',
    content: `Cascading Style Sheet (CSS) is a style sheet language used for describing the presentation of a
     document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web.
      alongside HTML and JavaScript`
  },
  {
    title: 'JavaScript',
    content: `JavaScript often abbreviated as JS, is a high-level, intrepreted programming language that
     conforms to the ECMAScript specification. JavaScript has curly bracket syntax, dynamic typing, prototype-based
      object-orientation and first-class functions.`
  }
];

function App() {


  return (
     <Accordion data={data}/>
  );
};

export default App;
