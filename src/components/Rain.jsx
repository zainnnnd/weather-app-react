import { motion } from "framer-motion";

const drops = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  duration: Math.random() * 2 + 1,
  delay: Math.random() * 2
}));

function Rain(){
    
    return(
        <>
           {
drops.map((drop) => (

<motion.div

key={drop.id}

initial={{ y: -100 }}

animate={{ y: 1000 }}

transition={{
duration: drop.duration,
repeat: Infinity,
delay: drop.delay
}}

className="
absolute
w-[1px]
h-6
bg-cyan-300
opacity-60
pointer-events-none
"

style={{
left: `${drop.left}%`
}}

/>

))
}
        </>
    );
}
export default Rain;