import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImpactStories.css';

const stories = [
    {
        id: 1,
        name: 'Sneha Jain',
        title: 'TEAM LEADER',
        quote: 'Pete Graham is among the outstanding members of my team. He can work under pressure and easily adapt to change. I hope he grows and continues to thrive in his new endeavor.',
        image: 'public/WhatsApp Image 2025-04-24 at 11.27.31_fad931d2.jpg'
    },
    {
        id: 2,
        name: 'Rohit Sharma',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'public/WhatsApp Image 2025-04-24 at 11.26.04_f45f0754.jpg'
    },
    {
        id: 3,
        name: 'Siddharth Suman',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'public/WhatsApp Image 2025-04-24 at 11.27.02_05e5e7cc.jpg'
    },
    {
        id: 4,
        name: 'Gautam Singhania',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'public/Leonardo_Phoenix_10_a_confident_smiling_male_with_bright_warm_0.jpg'
    },
    {
        id: 5,
        name: 'Neha Gupta',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'public/Leonardo_Phoenix_10_a_smiling_confident_woman_in_her_40s_with_2.jpg'
    },
    {
        id: 6,
        name: 'Neha Gupta',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'public/Leonardo_Phoenix_10_a_smiling_confident_woman_in_her_40s_with_2.jpg'
    },
    {
        id: 7,
        name: 'Neha Gupta',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'public/Leonardo_Phoenix_10_a_smiling_confident_woman_in_her_40s_with_2.jpg'
    },
    {
        id: 8,
        name: 'Neha Gupta',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'public/Leonardo_Phoenix_10_a_smiling_confident_woman_in_her_40s_with_2.jpg'
    },
];

const ImpactStories = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % stories.length);
        }, 100000); // Change every 10 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="impact-container">
            {/* Center */}
            <div className="impact-center">
                <div className="story-title">
                    {/* Title outside the animation */}
                    <h3 className="feedback-title">IMPACT STORIES</h3>
                </div>
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
                            <div className="vertical-line2"></div>
                        </div>
                        <div className="story-right">
                            <p className="story-text">{stories[active].quote}</p>
                            <p className='name'>{stories[active].name}</p>
                            <p className="title">{stories[active].title}</p>
                            
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots positioned over the center content */}
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
