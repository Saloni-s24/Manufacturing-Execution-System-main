import PageContainer from "../../../components/ui/PageContainer";

import GoodsIssueForm from "../components/GoodsIssueForm";
import GoodsReceiptForm from "../components/GoodsReceiptForm";
import MaterialHistoryTable from "../components/MaterialHistoryTable";

import { components, materialHistory } from "../data/materialData";
import { PERMISSIONS } from "../../../constants/permissions";
import { canAccess, getStoredUser } from "../../../utils/canAccess";

export default function MaterialPage() {
  const user = getStoredUser();
  const canPostGoodsIssue = canAccess(user, PERMISSIONS.MATERIAL_GOODS_ISSUE);
  const canPostGoodsReceipt = canAccess(
    user,
    PERMISSIONS.MATERIAL_GOODS_RECEIPT
  );

  return (
    <PageContainer>

      {/* 🔷 Header */}
      <div className="mb-6 flex items-center justify-between">
        
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Material Management
          </h1>

          <p className="text-gray-500 mt-1">
            Goods movement & material consumption
          </p>
        </div>

      </div>

      {/* 🔷 Forms Section */}
      {(canPostGoodsIssue || canPostGoodsReceipt) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {canPostGoodsIssue && (
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          
              <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="text-base font-semibold text-gray-800">
                  Goods Issue (261)
                </h2>
              </div>

              <div className="px-5 py-5">
                <GoodsIssueForm components={components} />
              </div>

            </div>
          )}

          {canPostGoodsReceipt && (
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          
              <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="text-base font-semibold text-gray-800">
                  Goods Receipt (101)
                </h2>
              </div>

              <div className="px-5 py-5">
                <GoodsReceiptForm />
              </div>

            </div>
          )}

        </div>
      )}

      {/* 🔷 History Table */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">
            Material Document History
          </h2>
        </div>

        <div className="px-5 py-5">
          <MaterialHistoryTable data={materialHistory} />
        </div>

      </div>

    </PageContainer>
  );
}
