import { Routes, Route } from 'react-router-dom';

import Root from "./Root.js";
import Cases from "../pages/Cases/ui/Cases.js";
import NoMatch from "../pages/NoMatch/ui/NoMatch.js";
import Placeholder from "../pages/Placeholder/ui/Placeholder.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { switchMobile } from "../shared/redux/mobileSlice";

export default function App() {

    const dispatch = useDispatch();

    const handleMobile = () => {
        if (window.innerWidth <= 414) {
            dispatch(switchMobile(true));
        } else {
            dispatch(switchMobile(false));
        }
    }
    useEffect(() => {
        if (window.innerWidth <= 414) { dispatch(switchMobile(true)); }

        window.addEventListener('resize', () => { handleMobile() });

        return () => window.removeEventListener('resize', () => handleMobile());

    }, []);

  return (
      <Routes>
          <Route path={"/"} element={<Root />}>
              <Route index element={<Placeholder />}></Route>
              <Route path="agency" element={<Placeholder />}></Route>
              <Route path="services" element={<Placeholder />}></Route>
              <Route path="cases" element={<Cases />}></Route>
              <Route path="blog" element={<Placeholder />}></Route>
              <Route path="contacts" element={<Placeholder />}></Route>
              <Route path="*" element={<NoMatch />}></Route>
          </Route>
      </Routes>
  )
}