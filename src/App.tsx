import RouteApp from "@/routes/Route.tsx";
import ParticleBackground from "@/components/ParticleBackground.tsx";
import {Toaster} from "sonner";

function App() {

  return (
    <>
      <Toaster richColors position='top-right'/>
      <ParticleBackground/>
      <RouteApp/>
    </>
  )
}

export default App
