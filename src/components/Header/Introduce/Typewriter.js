import React from 'react';
import { useTypewriter } from 'use-typewriter-hook';

export default function Typewriter() {
    const targetText = `I'm a fresher front-end Developer`;
    const { textValue: typedText, wrapperClassName } = useTypewriter({
        targetText: targetText,
        autoStartDelay: 0,
        typingDelayMillis: 100,
        loop: true,
    });

    return <div className={wrapperClassName}>{typedText}</div>;
}
