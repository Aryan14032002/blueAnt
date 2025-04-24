import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImpactStories.css'; // Make sure to create and import this CSS file

const stories = [
    {
        id: 1,
        name: 'OLIVIA BROOKES',
        title: 'TEAM LEADER',
        quote: 'Pete Graham is among the outstanding members of my team. He can work under pressure and easily adapt to change. I hope he grows and continues to thrive in his new endeavor.',
        image: 'slide1.jpg'
    },
    {
        id: 2,
        name: 'Siddharth Suman',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'slide2.jpg'
    },
    {
        id: 2,
        name: 'Siddharth Suman',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'slide2.jpg'
    },
    {
        id: 2,
        name: 'Siddharth Suman',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'slide2.jpg'
    },
    {
        id: 2,
        name: 'Siddharth Suman',
        title: 'OWNER',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem dolorem delectus dolores ullam iste perferendis omnis fugiat asperiores voluptate doloribus dolorum autem ut maxime, reiciendis quis neque maiores ab!',
        image: 'slide2.jpg'
    },
];

const ImpactStories = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % stories.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="impact-container">
            {/* Left */}
            <div className="impact-left">
                <h2>IMPACT STORIES</h2>
                <p className="subtitle">Your trust drives us forward</p>
                <p className="quote">"Success is best when it's shared."</p>

                {/* Floating Circles */}
                <motion.div className="circle one" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} />
                <motion.div className="circle two" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4 }} />
                <motion.div className="circle three" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
            </div>

            {/* Center */}
            <div className="impact-center">
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
                            <div className="vertical-line"></div>
                        </div>
                        <div className="story-right">
                            <p className="story-text">{stories[active].quote}</p>
                            <h3>{stories[active].name}</h3>
                            <p className="title">{stories[active].title}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right */}
            <div className="impact-right">
                {stories.map((story, index) => (
                    <button
                        key={story.id}
                        onClick={() => setActive(index)}
                        className={`dot ${index === active ? 'active' : ''}`}
                    />
                ))}
                <div className="bottom-ellipse"></div>
            </div>
        </div>
    );
};

export default ImpactStories;