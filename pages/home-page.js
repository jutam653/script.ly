import styles from '../styles/Home.module.css'
import UploadButton from '../components/homePage/UploadButton.js'
import Analyze from '../components/homePage/Analyze.js'
import {emotion, results} from '../components/homePage/emotiondata.js'

export default function homePage() {


  const charts = results.keywords.map((item, i) => {
    return (
      <div key={i}>
        <h3> Keyword: " {item.text} " Emotion Analysis </h3>
        <Analyze emotion={item.emotion}></Analyze>
      </div>
    )
  })


  return (
    <div className={styles.container}>
      <title>Home</title>
      <div>this is the home page</div>
      <UploadButton></UploadButton>
      <button>Record</button>
      <h3>Full Document Emotion Analysis</h3>
      <Analyze emotion={emotion}></Analyze>
      {charts}
    </div>
  )
}