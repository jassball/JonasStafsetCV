import  {motion} from 'framer-motion';

const transition = (ogComponent) => {
    return () => {
        <>

        <ogComponent />
        <motion.div 
        className='slide-in'
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration: 0.5, ease: 'easeInOut' }}
        
        
        >

        </motion.div>
        </>
    }
} 