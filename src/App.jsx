import { Routes, Route } from 'react-router-dom';

import Root from "./Components/Root.jsx";
import Cases from "./Components/Cases.jsx";
import NoMatch from "./Components/NoMatch.jsx";
import Placeholder from "./Components/Placeholder.jsx";

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