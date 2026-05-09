import { motion } from 'framer-motion'
import Characters from "#components/Characters";

function AliceToBob({className = '',
                    id = '',
                    distance = 600,
                    hideAlice = false, hideBob = false,
                    children }) {
    return (
        <div className={className} id={id}>
            <Characters hideAlice={hideAlice} hideBob={hideBob} />
            <div  className={"alice-to-bob " + className} id={id}>
                <motion.div
                    initial={{opacity: 0.5, x: 0}}
                    animate={{opacity: 1, x: distance}}
                    transition={{duration: 3}}
                >
                    {children}
                </motion.div>
            </div>
        </div>

    )
}

export default AliceToBob