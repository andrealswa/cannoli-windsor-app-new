import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from './ClientNotes.module.css'
import { Button } from '@material-ui/core';
import { useRecoilState } from 'recoil'
import { notes } from '../../recoil/recoil-atoms'

export const ClientNotes = () => {
  const [note, setNote] = useRecoilState(notes);
  const handleChange = (text) => {
    setNote(() => text)
  }
  return (
    <div className={styles.notesContainer}>
      <h1>Notes</h1>
      <TextareaAutosize
        onChange={(event) => handleChange(event.target.value)}
        value={note}
        className={styles.textBox}
        aria-label="minimum height"
        rowsMin={10}
        rowsMax={50}
        placeholder="ie. Please substitute extra cherry cannolis in place of vanilla."
      />
      <Button className={styles.buttonSubmit}>Save</Button>
    </div>
  );
}
