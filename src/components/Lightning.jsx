import { motion } from "framer-motion";

function Lightning() {

  return (

    <motion.div

      animate={{
        opacity:[0,1,0]
      }}

      transition={{
        duration:0.2,
        repeat:Infinity,
        repeatDelay:5
      }}

      className="
      absolute
      inset-0
      bg-white/20
      pointer-events-none
      "

    >

    </motion.div>

  )

}

export default Lightning;