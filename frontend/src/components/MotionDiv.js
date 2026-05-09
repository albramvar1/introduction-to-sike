import { motion } from "framer-motion";

function MotionDiv({className = '',
                    id,
                    delay,
                    children }) {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={delay === undefined ? {opacity: 1, y: 0} : {opacity: 1, y: 0, transition: {delay: delay}}}
            transition={{duration: 1}}
            id={id}
            className={className}>
            {children}
        </motion.div>
    )

}

export default MotionDiv;