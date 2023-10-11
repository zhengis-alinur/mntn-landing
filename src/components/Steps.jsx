import React from 'react';
import Step from './Step';
import Step01 from '../assets/01.png';
import Step02 from '../assets/02.png';
import Step03 from '../assets/03.png';

const Steps = () => {
    const steps = [
        {
            title: 'What level of  hiker are you?',
            subtitle: 'Get Started',
            number: '01',
            text: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ',
            img: Step01,
        },
        {
            title: 'Picking the right Hiking Gear!',
            subtitle: 'Hiking Essentials',
            number: '02',
            text: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.',
            img: Step02,
        },
        {
            title: 'Understand Your Map & Timing',
            subtitle: 'where you go is the key',
            number: '03',
            text: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
            img: Step03,
        },
    ];
    return (
        <div className="flex flex-col gap-20 p-10">
            {steps.map((step, index) => (
                <Step key={index} {...step} reverse={index % 2 !== 0 ? true : false} />
            ))}
        </div>
    );
};

export default Steps;
