import React, {useEffect, useState} from "react";
import {useOutlet, useLocation} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

import Header from "./Header.jsx";
import Wrapper from "./Wrapper.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";
import Feedback from "./Feedback.jsx";
import Footer from "./Footer.jsx";

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