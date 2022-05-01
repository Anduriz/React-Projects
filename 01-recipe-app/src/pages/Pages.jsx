import Home from "./Home"
import Cuisine from "./Cuisine"
import Searched from "./Searched"
import Recipe from "./Recipe"
import {Route, Routes, useLocation} from 'react-router-dom'
//This helps so we can detect when we need to use the fade out animation
import { AnimatePresence } from 'framer-motion';

function Pages() {
  
  const location = useLocation();

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages