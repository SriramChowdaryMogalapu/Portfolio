import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 }
        }
    };

    const itemVariants = {
        initial: { y: 20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const spinnerVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <motion.div
            className="loading-container"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                className="loading-spinner"
                variants={spinnerVariants}
                animate="animate"
            />
            <motion.div
                className="loading-text"
                variants={itemVariants}
            >
                Loading Portfolio...
            </motion.div>
            <motion.div
                variants={itemVariants}
                style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.5rem'
                }}
            >
                Sriram Chowdary Mogalapu
            </motion.div>
        </motion.div>
    );
};

export default Loading;