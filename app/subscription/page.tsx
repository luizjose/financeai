import { auth } from "@clerk/nextjs/server";
import NavBar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import { Button } from "../_components/ui/button";

const Subscriprion = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinatura</h1>
        <div className="flex gap-6">
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="font-semi-bold text-2xl text-center">
                Plano Básico
              </h2>
              <div className="flex items-center gap-3 justify-center">
                <span className="text-4xl ">R$</span>
                <span className="font-semibold text-6xl">0,00</span>
                <span className="text-muted-foreground text-2xl">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Apenas 10 transações por mês (8/10)</p>
              </div>
              <div className="flex items-center gap-2">
                <XIcon />
                <p>Relatórios de IA</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="font-semi-bold text-2xl text-center">
                Plano Premium
              </h2>
              <div className="flex items-center gap-3 justify-center">
                <span className="text-4xl ">R$</span>
                <span className="font-semibold text-6xl">9,90</span>
                <span className="text-muted-foreground text-2xl">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Transações Ilimitadas</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA</p>
              </div>
              <Button className="w-full rounded-full font-bold">
                Adquirir plano
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Subscriprion;
