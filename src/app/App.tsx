import { Routes, Route } from 'react-router-dom';

import Root from "./Root.js";
import Cases from "../pages/Cases/ui/Cases.js";
import NoMatch from "../pages/NoMatch/ui/NoMatch.js";
import Placeholder from "../pages/Placeholder/ui/Placeholder.js";

export default function App() {
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