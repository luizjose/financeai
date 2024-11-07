import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

const Transactions = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div>
      <div className=" p-6 space-y-6">
        <div className="flex w-full justify-between items-center ">
          <h1 className="text-2xl font-bold">Transações</h1>
          <Button className="rounded-full">
            Adicionar Transação <ArrowDownUpIcon className="ml-1" />
          </Button>
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </div>
  );
};

export default Transactions;
