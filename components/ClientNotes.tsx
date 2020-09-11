import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from './ClientNotes.module.css'
import { Button } from '@material-ui/core';

export const ClientNotes = () => {
  return (
    <div>
      <h1>Notes</h1>
      <TextareaAutosize
        className={styles.textBox}
        aria-label="minimum height"
        rowsMin={10}
        rowsMax={50}
        placeholder="ie. Please substitute extra cherry cannolis in place of vanilla."
      />
      <Button className={styles.buttonFlip}>Submit</Button>

    </div>
  );
}
