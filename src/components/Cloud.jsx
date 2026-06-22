import { WiCloud } from "react-icons/wi";
import { motion } from "framer-motion";

function Cloud(){

    return(
        <>
            <motion.div
                animate={{x:[-100,100,-100]}}
                transition={{duration:10, repeat:Infinity}}

                className="absolute top-32 left-20 text-8xl text-gray-200 opacity-40"
            >
            <WiCloud />
            </motion.div>

            <motion.div
                animate={{x:[100,-100,100]}}
                transition={{duration:15, repeat:Infinity}}
                className="absolute bottom-32 right-20 text-9xl text-gray-400"
            >
                <WiCloud />
            </motion.div>
        </>
    )
}
export default Cloud;