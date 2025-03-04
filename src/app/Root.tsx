import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "../widgets/Header/ui/Header.js";
import Wrapper from "../shared/Wrapper/ui/Wrapper.js";
import Breadcrumbs from "../shared/Breadcrumbs/ui/Breadcrumbs.js";
import Feedback from "../widgets/Feedback/ui/Feedback.js";
import Footer from "../widgets/Footer/ui/Footer.js";

export default function Root() {

    const locationKey  = useLocation();
    const CustomOutlet = useOutlet();

    return <Wrapper>
            <Header />
                <Breadcrumbs />
                <AnimatePresence mode="wait">
                    { CustomOutlet && (
                    <motion.div
                        key={locationKey.pathname}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}>
                        { CustomOutlet }
                    </motion.div>
                    )}
                </AnimatePresence>
                <Feedback></Feedback>
            <Footer />
    </Wrapper>
};