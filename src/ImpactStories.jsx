import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImpactStories.css';

const stories = [
    {
        id: 1,
        name: 'Sneha Jain',
        title: 'TEAM LEADER',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/WhatsApp Image 2025-04-24 at 11.27.31_fad931d2.jpg'
    },
    {
        id: 2,
        name: 'Rohit Sharma',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor si sed diam urna tuius ros lobortis nulla molestie mattis scsque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus.',
        image: '/WhatsApp Image 2025-04-24 at 11.26.04_f45f0754.jpg'
    },
    {
        id: 3,
        name: 'Siddharth Suman',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: '/WhatsApp Image 2025-04-24 at 11.27.02_05e5e7cc.jpg'
    },
    {
        id: 4,
        name: 'Gautam Singhania',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: '/Leonardo_Phoenix_10_a_confident_smiling_male_with_bright_warm_0.jpg'
    },
    {
        id: 5,
        name: 'Neha Gupta',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: '/Leonardo_Phoenix_10_a_smiling_confident_woman_in_her_40s_with_2.jpg'
    },
    {
        id: 6,
        name: 'Anamika Sharma',
        title: 'M.D.',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: '/WhatsApp Image 2025-04-24 at 11.29.29_3645a856.jpg'
    },
];

const ImpactStories = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % stories.length);
        }, 100000); // 100 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="impact-container">
            <div className="impact-center">
                <h3 className="feedback-title">IMPACT STORIES</h3>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={stories[active].id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="story"
                    >
                        <div className="story-left">
                            <img src={stories[active].image} alt="Profile" className="profile-img" />
                            <div className="vertical-line1"></div>
                        </div>
                        <div className="story-right">
                            
                            <p className="story-text">{stories[active].quote}</p>
                            <p className='name'>{stories[active].name}</p>
                            <p className="title">{stories[active].title}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="impact-dots">
                {stories.map((story, index) => (
                    <button
                        key={story.id}
                        onClick={() => setActive(index)}
                        className={`dot ${index === active ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImpactStories;
