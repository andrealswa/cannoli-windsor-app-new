import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from './ClientNotes.module.css';
import { Button } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { notes } from '../../recoil/recoil-atoms';
import Link from 'next/link';

export const ClientNotes = () => {
  const [note, setNote] = useRecoilState(notes);
  const handleChange = (text) => {
    console.log(text);
    setNote(() => text);
  };
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
        placeholder={
          'ie.\nNo Glacé Cherry, \n2 Toasted Almond, \n2 Chocolate Chip, \n2 Vanilla Sugar \n'
        }
      />
      <Link href="/cart">
        <a className={styles.blueLink}>
          <Button className={styles.buttonSubmit}>Take Me To Cart</Button>
        </a>
      </Link>
    </div>
  );
};
