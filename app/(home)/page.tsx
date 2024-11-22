import Image from "next/image";
import { Button } from "../_components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
import NavBar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionPieCharts from "./_components/transactions-pie-charts";
import { getDashboard } from "../_data/get_dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect("/?month=01");
  }
  const dashboard = await getDashboard(month);
  return (
    <>
      <NavBar />
      <div className=" flex h-full flex-col p-6 space-y-6 overflow-hidden">
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <div className="grid grid-cols-[2fr,1fr] ">
          <div className="flex flex-col gap-6">
            <SummaryCards month={month} {...dashboard} />
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              <TransactionPieCharts {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
