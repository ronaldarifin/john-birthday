import './App.css';
import Card from './Card';

import ronaldPicture from './picture/ronald.png';
import mkPicture from './picture/mk.jpeg';
import nicolePicture from './picture/johnpic1.jpeg';
import tiffanyPicture from './picture/johnpic2.webp';
import yeriPicture from './picture/johnpic3.jpg';
import peterPicture from './picture/johnpic4.jpg';
import brendanPicture from './picture/johnpic5.jpg';


function App() {
  const ronaldMessage = "Hey John Happy Birthday ya suhu, semoga lancar karir and hidup. Terima kasih, dah temenin debug. Here is a bug picture for u lol. Semoga makin deked Tuhan, keluarga, fit, and Cracked coder. God bless you bro!"
  const MKMessage = "Hey John Happy Birthday ya suhu, semoga lancar karir and hidup"
  const nicoleMessage = "happy birthday johnny! super grateful to have known you over the past year and i’m very sure you’re gonna do well moving forward~ God bless Johnny "
  const tiffanyMessage = "Happy birth Johnnnyyy!!! 🥳🥳Wishing you the very very best new year filled with so much love and abundance!!! May God continue to bless works of your hands and your journey this new year 😊"
  const Yerimessage = "Happy birthday John! Have an amazing journey with your new job. Always be blessing!"
  const peterMessage = "Happy birthday John! Hope you have a great day and a great year ahead! "
  const brendanMessage = "happy birthday john! God bless and wish you all the best! Hope you have a great time working in sf, hope to see you again soon!"


  const ronaldtitle = "Ronald Arifin"
  const mktitle = "Michelle Koesmono"
  const nicoletitle = "Nicole"
  const tiffanytitle = "Tiffany"
  const yerititle = "Yeri"
  const petertitle = "Peter"
  const brendanTitle = "Brendan"


  return (
    <div className='container'>
      <h1>{'🎉 Happy Birthday John 🎂'}</h1>
      <div className="App">
        <Card pictureFile={ronaldPicture} message={ronaldMessage} sender={ronaldtitle} ></Card>
        <Card pictureFile={mkPicture} message={MKMessage} sender={mktitle} ></Card>
        <Card pictureFile={nicolePicture} message={nicoleMessage} sender={nicoletitle} ></Card>
        <Card pictureFile={tiffanyPicture} message={tiffanyMessage} sender={tiffanytitle} ></Card>
        <Card pictureFile={yeriPicture} message={Yerimessage} sender={yerititle} ></Card>
        <Card pictureFile={peterPicture} message={peterMessage} sender={petertitle} ></Card>
        <Card pictureFile={brendanPicture} message={brendanMessage} sender={brendanTitle} ></Card>
      </div>
    </div>
    
  );
}

export default App;
