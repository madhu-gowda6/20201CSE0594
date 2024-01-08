import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceInput: React.FC = () => {
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const { transcript, resetTranscript } = useSpeechRecognition();

    const handleVoiceInput = () => {
        setText(transcript);
    };

    const toggleVoiceInput = () => {
        if (listening) {
            SpeechRecognition.stopListening();
            setListening(false);
            handleVoiceInput;
        } else {
            SpeechRecognition.startListening({ continuous: true });
            setListening(true);
        }
    };

    const resetVoiceInput = () => {
        resetTranscript();
        setText('');
    };

    return (
        <div>
            <button onClick={toggleVoiceInput}>
                {listening ? 'Stop Voice Input' : 'Start Voice Input'}
            </button>
            {listening && <button onClick={resetVoiceInput}>Reset Voice Input</button>}
            <p>Text: {transcript}</p>
        </div>
    );
};

export default VoiceInput;
