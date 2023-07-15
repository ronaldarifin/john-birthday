import './App.css';
import Card from './Card';

import ronaldPicture from './picture/ronald.png';

function App() {
  const ronaldMessage = "Hey John Happy Birthday ya suhu, semoga lancar karir and hidup"

  const sender1 = "Ronald Arifin"
  return (
    <div className='container'>
      <h1>{'🎉 Happy Birthday John 🎂'}</h1>
      <div className="App">
        <Card pictureFile={ronaldPicture} message={ronaldMessage} sender={sender1} ></Card>
        <Card pictureFile={ronaldPicture} message={ronaldMessage} sender={sender1} ></Card>
        <Card pictureFile={ronaldPicture} message={ronaldMessage} sender={sender1} ></Card>
        <Card pictureFile={ronaldPicture} message={ronaldMessage} sender={sender1} ></Card>
        <Card pictureFile={ronaldPicture} message={ronaldMessage} sender={sender1} ></Card>
        <Card pictureFile={ronaldPicture} message={ronaldMessage} sender={sender1} ></Card>
        <Card pictureFile={ronaldPicture} message={ronaldMessage} sender={sender1} ></Card>
        <Card pictureFile={ronaldPicture} message={ronaldMessage} sender={sender1} ></Card>
      </div>
    </div>
    
  );
}

export default App;
