import { motion } from "framer-motion";

const flakes = Array.from({ length: 40 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  duration: Math.random() * 5 + 5,
  delay: Math.random() * 2
}));

function Snow() {

  return (

    <>

      {flakes.map((flake) => (

        <motion.div

          key={flake.id}

          initial={{ y: -50 }}

          animate={{ y: 1000 }}

          transition={{
            duration: flake.duration,
            repeat: Infinity,
            delay: flake.delay
          }}

          className="absolute text-white text-xl pointer-events-none"

          style={{
            left: `${flake.left}%`
          }}

        >

          ❄

        </motion.div>

      ))}

    </>

  )

}

export default Snow;