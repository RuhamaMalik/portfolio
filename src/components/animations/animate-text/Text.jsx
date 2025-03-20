import React, { useEffect, useState } from 'react';
const Text = () => {
    const [words, setWords] = useState([
        'Front End Developer',
        'Backend Developer',
        'Full Stack Developer',
        'Trainer',
        'Freelancer'
        
    ]);
    const [part, setPart] = useState('');
    const [i, setI] = useState(0);
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);
    const skipDelay = 15;
    const speed = 70;

    useEffect(() => {
        const wordFlickInterval = setInterval(() => {
            if (forwards) {
                if (offset >= words[i].length) {
                    setSkipCount((prevSkipCount) => prevSkipCount + 1);
                    if (skipCount === skipDelay) {
                        setForwards(false);
                        setSkipCount(0);
                    }
                }
            } else {
                if (offset === 0) {
                    setForwards(true);
                    setI((prevI) => prevI + 1);
                    setOffset(0);
                    if (i >= words.length - 1) {
                        setI(0);
                    }
                }
            }

            let newOffset = offset;
            if (skipCount === 0) {
                newOffset = forwards ? offset + 1 : offset - 1;
            }

            setOffset(newOffset);
            setPart(words[i].substr(0, newOffset));
        }, speed);

        return () => clearInterval(wordFlickInterval);
    }, [forwards, i, offset, skipCount, words]);

    return (
        <div className="word" 
        style={{ 
            margin: 'auto',
             color: 'var( --text-1)', 
             fontWeight: 600, 
             fontSize: '1em', 
             textTransform: 'capitalize',
             textShadow: '' }}>
            {part}
        </div>
    );
};

export default Text;
