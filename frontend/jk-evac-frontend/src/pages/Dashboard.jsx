import Sidebar from "../components/Sidebar"
import MapView from "../components/MapView"
import RouteInfo from "../components/RouteInfo"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-80 bg-white shadow-lg">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <MapView />
        </div>
        <div className="h-40 border-t bg-white">
          <RouteInfo />
        </div>
      </div>
    </div>
  )
}

