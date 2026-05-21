// OrderFilters.jsx

import { useState } from "react";
import {
  Search,
  RefreshCcw,
  Plus,
} from "lucide-react";

const statusOptions = [
  "In Process",
  "Delayed",
  "Near Done",
  "Released",
  "Confirmed",
];

const OrderFilters = ({
  onSearch,
  plants,
}) => {
  const [
    productionOrder,
    setProductionOrder,
  ] = useState("");

  const [material, setMaterial] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [plant, setPlant] =
    useState("");

  const handleSearch = () => {
    onSearch({
      productionOrder,
      material,
      status,
      plant,
    });
  };

  return (
    <div className="mb-6">
      {/* Header */}
      

      {/* Filters */}
      <div className="mt-6 rounded-xl border bg-white p-5 shadow-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          
          {/* Production Order */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Production Order
            </label>

            <input
              type="text"
              placeholder="Enter Order Number"
              value={productionOrder}
              onChange={(e) =>
                setProductionOrder(
                  e.target.value
                )
              }
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Material */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Material
            </label>

            <input
              type="text"
              placeholder="Enter Material"
              value={material}
              onChange={(e) =>
                setMaterial(
                  e.target.value
                )
              }
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value
                )
              }
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">
                All Status
              </option>

              {statusOptions.map(
                (statusItem) => (
                  <option
                    key={statusItem}
                    value={statusItem}
                  >
                    {statusItem}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Plant */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Plant
            </label>

            <select
              value={plant}
              onChange={(e) =>
                setPlant(
                  e.target.value
                )
              }
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">
                All Plants
              </option>

              {plants.map(
                (plantItem) => (
                  <option
                    key={plantItem}
                    value={plantItem}
                  >
                    {plantItem}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
            >
              <Search size={18} />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFilters;