import { useEffect, useState } from 'react';

// Types each word, pauses, deletes it, then moves to the next. `words` must be a stable array.
export default function useTyping(words, speed = 80, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const delay = !deleting && text === word ? pause : deleting ? 40 : speed;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === word) setDeleting(true);
        else setText(word.slice(0, text.length + 1));
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (!next) { setDeleting(false); setIndex(index + 1); }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}
